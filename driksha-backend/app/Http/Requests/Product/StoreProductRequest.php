<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',

            'description' => 'nullable|string',

            'price' => 'required|numeric|min:0',

            'original_price' => 'nullable|numeric|min:0',

            'stock' => 'required|integer|min:0',

            'top_category_id' => 'nullable|exists:categories,id',

            'mid_category_id' => 'nullable|exists:categories,id',

            'end_category_id' => 'nullable|exists:categories,id',

            'is_featured' => 'boolean',

            'is_latest' => 'boolean',

            'is_popular' => 'boolean',

            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048',
            'slug' => 'required|string|max:255|unique:products,slug',

            'sku' => 'nullable|string|max:255|unique:products,sku',

            'brand' => 'nullable|string|max:255',

            'status' => 'boolean',
        ];
    }
}