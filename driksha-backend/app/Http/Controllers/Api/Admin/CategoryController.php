<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Category;

use Illuminate\Support\Str;

use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Controller;

use App\Http\Resources\CategoryResource;

use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Get All Categories
    |--------------------------------------------------------------------------
    */

    public function index()
    {
        $categories = Category::with('parent')
            ->orderBy('sort_order')
            ->latest()
            ->get();

        return response()->json([

            'success' => true,

            'data' => CategoryResource::collection($categories)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Create Category
    |--------------------------------------------------------------------------
    */

    public function store(StoreCategoryRequest $request)
    {
        $imagePath = null;

        if ($request->hasFile('image')) {

            $imagePath = $request->file('image')
                ->store('categories', 'public');
        }


        $category = Category::create([

            'name' => $request->name,

            'slug' => $request->slug
                ? Str::slug($request->slug)
                : Str::slug($request->name),

            'type' => $request->type,

            'parent_id' => $request->parent_id,

            'image' => $imagePath,

            'status' => $request->status ?? true,

            'sort_order' => $request->sort_order ?? 0,
        ]);


        return response()->json([

            'success' => true,

            'message' => 'Category created successfully',

            'data' => new CategoryResource(
                $category->load('parent')
            )

        ], 201);
    }


    /*
    |--------------------------------------------------------------------------
    | Show Single Category
    |--------------------------------------------------------------------------
    */

    public function show($id)
    {
        $category = Category::with('parent')->find($id);

        if (!$category) {

            return response()->json([

                'success' => false,

                'message' => 'Category not found'

            ], 404);
        }


        return response()->json([

            'success' => true,

            'data' => new CategoryResource($category)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Update Category
    |--------------------------------------------------------------------------
    */

    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::find($id);

        if (!$category) {

            return response()->json([

                'success' => false,

                'message' => 'Category not found'

            ], 404);
        }


        $imagePath = $category->image;


        if ($request->hasFile('image')) {

            if ($category->image) {

                Storage::disk('public')->delete($category->image);
            }

            $imagePath = $request->file('image')
                ->store('categories', 'public');
        }


        $category->update([

            'name' => $request->name ?? $category->name,

            'slug' => $request->slug
                ? Str::slug($request->slug)
                : $category->slug,

            'type' => $request->type ?? $category->type,

            'parent_id' => $request->parent_id ?? $category->parent_id,

            'image' => $imagePath,

            'status' => $request->status ?? $category->status,

            'sort_order' => $request->sort_order ?? $category->sort_order,
        ]);


        return response()->json([

            'success' => true,

            'message' => 'Category updated successfully',

            'data' => new CategoryResource(
                $category->load('parent')
            )

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Delete Category
    |--------------------------------------------------------------------------
    */

    public function destroy($id)
    {
        $category = Category::find($id);

        if (!$category) {

            return response()->json([

                'success' => false,

                'message' => 'Category not found'

            ], 404);
        }


        if ($category->image) {

            Storage::disk('public')->delete($category->image);
        }


        $category->delete();


        return response()->json([

            'success' => true,

            'message' => 'Category deleted successfully'

        ]);
    }
}