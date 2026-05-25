<?php

namespace App\Http\Controllers\Api\Customer;

use App\Models\Category;
use App\Models\Product;

use App\Http\Controllers\Controller;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;

class CategoryController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Get Nested Categories (Mega Menu)
    |--------------------------------------------------------------------------
    */

    public function index()
    {
        $categories = Category::with([
            'children.children'
        ])
        ->where('type', 'top')
        ->where('status', true)
        ->orderBy('sort_order')
        ->get();


        return response()->json([

            'success' => true,

            'data' => CategoryResource::collection($categories)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Get Products By Category
    |--------------------------------------------------------------------------
    */

    public function products($slug)
    {
        $category = Category::where('slug', $slug)
            ->where('status', true)
            ->first();


        if (!$category) {

            return response()->json([

                'success' => false,

                'message' => 'Category not found'

            ], 404);
        }


        $products = Product::with([
            'images',
            'topCategory',
            'midCategory',
            'endCategory'
        ])
        ->where('status', true)
        ->where(function ($query) use ($category) {

            $query->where('top_category_id', $category->id)
                ->orWhere('mid_category_id', $category->id)
                ->orWhere('end_category_id', $category->id);

        })
        ->latest()
        ->paginate(12);


        return response()->json([

            'success' => true,

            'category' => new CategoryResource($category),

            'products' => ProductResource::collection($products),

            'pagination' => [

                'current_page' => $products->currentPage(),

                'last_page' => $products->lastPage(),

                'per_page' => $products->perPage(),

                'total' => $products->total(),
            ]
        ]);
    }
}