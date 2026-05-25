<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'sometimes|string|max:255',

            'description' => 'nullable|string',

            'price' => 'sometimes|numeric|min:0',

            'original_price' => 'nullable|numeric|min:0',

            'stock' => 'sometimes|integer|min:0',

            'top_category_id' => 'nullable|exists:categories,id',

            'mid_category_id' => 'nullable|exists:categories,id',

            'end_category_id' => 'nullable|exists:categories,id',

            'is_featured' => 'boolean',

            'is_latest' => 'boolean',

            'is_popular' => 'boolean',

            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048',
            'slug' => 'sometimes|string|max:255',

            'sku' => 'nullable|string|max:255',

            'brand' => 'nullable|string|max:255',

            'status' => 'boolean',
        ];
    }
}