<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   public function index() 
   {
    $top = Category::where('type', 'top')->get();
    $mid = Category::where('type', 'mid')->get();
    $end = Category::where('type', 'end')->get();

    return response()->json([
        'success' => true,
        'data' => [
            'top' => $top,
            'mid' => $mid,
            'end' => $end,
        ]
    ]);
   }

   public function store(Request $request) 
   {
    $request->validate([
        'name' => 'required|string',
        'type' => 'required|in:top,mid,end',
        'parent_id' => 'nullable|exists:categories,id'
    ]);

    $category = Category::create([
        'name' => $request->name,
        'type' => $request->type,
        'parent_id' => $request->parent_id,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Category created successfully',
        'data' => $category
    ], 201);
   }

   public function show($id) 
   {
        $category = Category::find($id);

        if(!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $category
        ]);
   }

   public function update(Request $request , $id) 
   {
    $category = Category::find($id);

    if(!$category) {
        return response()->json([
            'success' => false,
            'message' => 'Category not found'
        ], 404);
    }

    $category->update([
        'name' => $request->name ?? $category->name,
        'type' => $request->type ?? $category->type,
        'parent_id' => $request->parent_id ?? $category->parent_id,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Category updated successfully',
        'data' => $category
    ]);
   }

   public function destroy($id) {
    $category = Category::find($id);

    if (!$category) {
        return response()->json([
            'success' => false,
            'message' => 'Category not found'
        ], 404);
    }

    $category->delete();

    return response()->json([
        'success' => true,
        'message' => 'Category deleted successfully'
    ]);
   }
}
