<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller 
{
    public function index()
    {
        $products = Product::with('images')->latest()->get();

        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer'
        ]);

        $product = Product::create([
            'name'           => $request->name,
            'description'    => $request->description,
            'price'          => $request->price,
            'original_price' => $request->original_price,
            'stock'          => $request->stock,
            'top_category'   => $request->top_category,
            'mid_category'   => $request->mid_category,
            'end_category'   => $request->end_category,
            'is_featured'    => $request->is_featured ?? false,
            'is_latest'      => $request->is_latest ?? false,
            'is_popular'     => $request->is_popular ?? false,
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                $path = $image->store('products', 'public');

                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $path,
                    'is_main' => $index === 0,
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => $product->load('images')
        ], 201);
    }

    public function show($id) {
        $product = Product::with('images')->find($id);

        if(!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $product
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if(!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        $product->update([
            'name'           => $request->name ?? $product->name,
            'description'    => $request->description ?? $product->description,
            'price'          => $request->price ?? $product->price,
            'original_price' => $request->original_price ?? $product->original_price,
            'stock'          => $request->stock ?? $product->stock,
            'top_category'   => $request->top_category ?? $product->top_category,
            'mid_category'   => $request->mid_category ?? $product->mid_category,
            'end_category'   => $request->end_category ?? $product->end_category,
            'is_featured'    => $request->is_featured ?? $product->is_featured,
            'is_latest'      => $request->is_latest ?? $product->is_latest,
            'is_popular'     => $request->is_popular ?? $product->is_popular,
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products' , 'public');

                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $path,
                    'is_main' => false,
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => $product->load('images')
        ]);
    }

    public function destroy($id) {
        $product = Product::find($id);

        if(!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        foreach ($product->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }
        $product->delete();

        return response()->json([
            'success' => true,
            'message' => 'Product deleted successfully'
        ]);
    }
}