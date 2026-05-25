<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'name' => 'sometimes|string|max:255',

            'slug' => 'sometimes|string|max:255',

            'type' => 'sometimes|in:top,mid,end',

            'parent_id' => 'nullable|exists:categories,id',

            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'status' => 'boolean',

            'sort_order' => 'nullable|integer|min:0',
        ];
    }
}