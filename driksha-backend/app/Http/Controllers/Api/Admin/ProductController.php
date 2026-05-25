<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Str;
// use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\ProductResource;

use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;

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
        ->get();

        return response()->json([
            'success' => true,
            'data' => ProductResource::collection($products)
        ]);
    }


    public function store(StoreProductRequest $request)
    {
        $product = Product::create([

            'name' => $request->name,

            'slug' => $request->slug
                ? Str::slug($request->slug)
                : Str::slug($request->name),

            'sku' => $request->sku,

            'brand' => $request->brand,

            'description' => $request->description,

            'price' => $request->price,

            'original_price' => $request->original_price,

            'stock' => $request->stock,

            'top_category_id' => $request->top_category_id,

            'mid_category_id' => $request->mid_category_id,

            'end_category_id' => $request->end_category_id,

            'is_featured' => $request->is_featured ?? false,

            'is_latest' => $request->is_latest ?? false,

            'is_popular' => $request->is_popular ?? false,

            'status' => $request->status ?? true,
        ]);


        if ($request->hasFile('images')) {
            $images = $request->file('images');
            if (!is_array($images)) {
                    $images = [$images]; 
            }

            foreach ($images as $index => $image) {

                $uploaded = cloudinary()->uploadApi()->upload($image->getRealPath(), [
                    'folder' => 'driksha/products'
                ]);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $uploaded['secure_url'],
                    'public_id'  => $uploaded['public_id'],
                    'is_main' => $index === 0,
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => new ProductResource(
                $product->load([
                    'images',
                    'topCategory',
                    'midCategory',
                    'endCategory'
                ])
            )
        ], 201);
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


    public function update(UpdateProductRequest $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {

            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        $product->update([

            'name' => $request->name ?? $product->name,

            'slug' => $request->slug
                ? Str::slug($request->slug)
                : $product->slug,

            'sku' => $request->sku ?? $product->sku,

            'brand' => $request->brand ?? $product->brand,

            'description' => $request->description ?? $product->description,

            'price' => $request->price ?? $product->price,

            'original_price' => $request->original_price ?? $product->original_price,

            'stock' => $request->stock ?? $product->stock,

            'top_category_id' => $request->top_category_id ?? $product->top_category_id,

            'mid_category_id' => $request->mid_category_id ?? $product->mid_category_id,

            'end_category_id' => $request->end_category_id ?? $product->end_category_id,

            'is_featured' => $request->is_featured ?? $product->is_featured,

            'is_latest' => $request->is_latest ?? $product->is_latest,

            'is_popular' => $request->is_popular ?? $product->is_popular,

            'status' => $request->status ?? $product->status,
        ]);


        if ($request->hasFile('images')) {
            $images = $request->file('images');
            if (!is_array($images)) {
                $images = [$images]; 
            }

            foreach ($images as $index => $image) {

                $uploaded = cloudinary()->uploadApi()->upload($image->getRealPath(), [
                    'folder' => 'driksha/products'
                ]);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $uploaded['secure_url'],
                    'public_id'  => $uploaded['public_id'],
                    'is_main' => false,
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => new ProductResource(
                $product->load([
                    'images',
                    'topCategory',
                    'midCategory',
                    'endCategory'
                ])
            )
        ]);
    }


    public function destroy($id)
    {
        $product = Product::with('images')->find($id);

        if (!$product) {

            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }


        foreach ($product->images as $image) {

            if($image->public_id) {
               cloudinary()->uploadApi()->destroy($image->public_id);
            }
            $image->delete();
        }

        $product->delete();

        return response()->json([
            'success' => true,
            'message' => 'Product deleted successfully'
        ]);
    }
}