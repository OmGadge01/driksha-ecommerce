<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $banners
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'subtitle' => 'nullable|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'bg_color' => 'nullable|string',
            'button_text' => 'nullable|string',
            'button_link' => 'nullable|string',
            'is_active' => 'nullable|boolean',
        ]);

        $uploaded = cloudinary()->upload($request->file('image')->getRealPath(),[
            'folder' => 'driksha/banners'
        ]);

        $banner = Banner::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'image' => $uploaded->getSecurePath(),
            'public_id' => $uploaded->getPublicId(),
            'bg_color' => $request->bg_color,
            'button_text' => $request->button_text,
            'button_link' => $request->button_link,
            'is_active' => $request->is_active ?? true,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Banner created successfully',
            'data' => $banner
        ], 201);
    }

    public function show($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'success' => false,
                'message' => 'Banner not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $banner
        ]);
    }

    public function update(Request $request, $id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'success' => false,
                'message' => 'Banner not found'
            ], 404);
        }

        $request->validate([
            'title' => 'nullable|string',
            'subtitle' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'bg_color' => 'nullable|string',
            'button_text' => 'nullable|string',
            'button_link' => 'nullable|string',
            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {
            
        if($banner->public_id){
            cloudinary()->destroy($banner->public_id);
        }
        $uploaded = cloudinary()->upload($request->file('image')->getRealPath(),[
            'folder' => 'driksha/banners'
        ]);
        $banner->image = $uploaded->getSecurePath();
        $banner->public_id = $uploaded->getPublicId();
        }

        $banner->title = $request->title ?? $banner->title;
        $banner->subtitle = $request->subtitle ?? $banner->subtitle;
        $banner->bg_color = $request->bg_color ?? $banner->bg_color;
        $banner->button_text = $request->button_text ?? $banner->button_text;
        $banner->button_link = $request->button_link ?? $banner->button_link;
        $banner->is_active = $request->is_active ?? $banner->is_active;

        $banner->save();

        return response()->json([
            'success' => true,
            'message' => 'Banner updated successfully',
            'data' => $banner
        ]);
    }

    public function destroy($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'success' => false,
                'message' => 'Banner not found'
            ], 404);
        }

        if($banner->public_id) {
            cloudinary()->destroy($banner->public_id);
        }

        $banner->delete();
        return response()->json([
            'success' => true,
            'message' => 'Banner deleted successfully'
        ]);
    }
}