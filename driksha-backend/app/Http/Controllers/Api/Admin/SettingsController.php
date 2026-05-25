<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingsController extends Controller
{    public function index()
    {
        $settings = Setting::first();
        if (!$settings) {
            return response()->json([
                'success' => true,
                'data' => []
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'site_name' => 'nullable|string',
            'tagline' => 'nullable|string',
            'logo'  => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'email' => 'nullable|email',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
            'facebook'  => 'nullable|string',
            'instagram' => 'nullable|string',
            'twitter' => 'nullable|string',
            'youtube' => 'nullable|string',
        ]);

        $settings = Setting::first();

        if (!$settings) {
            $settings = new Setting();
        }

        if ($request->hasFile('logo')) {
            if ($settings->logo_public_id) {
                cloudinary()->uploadApi()->destroy($settings->logo_public_id);
            }
            $uploaded = cloudinary()->uploadApi()->upload(
                $request->file('logo')->getRealPath(), [
                    'folder' => 'driksha/settings',
                    'transformation' => [
                        'width' => 200,
                        'height' => 200,
                        'crop' => 'limit',
                        'quality' => 'auto',
                    ]
                ]
            );
    
            $settings->logo = stripcslashes($uploaded['secure_url']);
            $settings->logo_public_id = $uploaded['public_id'];
        }

        $settings->site_name = $request->site_name ?? $settings->site_name;
        $settings->tagline = $request->tagline ?? $settings->tagline;
        $settings->email = $request->email ?? $settings->email;
        $settings->phone = $request->phone ?? $settings->phone;
        $settings->address = $request->address ?? $settings->address;
        $settings->facebook  = $request->facebook  ?? $settings->facebook;
        $settings->instagram = $request->instagram ?? $settings->instagram;
        $settings->twitter = $request->twitter ?? $settings->twitter;
        $settings->youtube = $request->youtube ?? $settings->youtube;

        $settings->save();

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully',
            'data' => $settings
        ]);
    }
}