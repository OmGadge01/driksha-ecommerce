<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with([
            'images',
            'topCategory',
            'midCategory',
            'endCategory'
        ])
        ->latest()
        ->paginate(12);

        return response()->json([
            'success' => true,
            'data' => ProductResource::collection($products),
        ]);
    }

    public function show($id)
    {
        $product = Product::with([
            'images',
            'topCategory',
            'midCategory',
            'endCategory'
        ])->find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => new ProductResource($product)
        ]);
    }

    public function featuredProducts()
    {
        $products = Product::with('images')
            ->where('is_featured', true)
            ->latest()
            ->take(8)
            ->get();

        return response()->json([
            'success' => true,
            'data' => ProductResource::collection($products)
        ]);
    }

    public function latestProducts()
    {
        $products = Product::with('images')
            ->where('is_latest', true)
            ->latest()
            ->take(8)
            ->get();

        return response()->json([
            'success' => true,
            'data' => ProductResource::collection($products)
        ]);
    }
}