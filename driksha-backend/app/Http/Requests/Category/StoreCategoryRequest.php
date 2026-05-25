<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'name' => 'required|string|max:255',

            'slug' => 'required|string|max:255|unique:categories,slug',

            'type' => 'required|in:top,mid,end',

            'parent_id' => 'nullable|exists:categories,id',

            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'status' => 'boolean',

            'sort_order' => 'nullable|integer|min:0',
        ];
    }
}