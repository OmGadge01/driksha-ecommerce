<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'name' => $this->name,

            'description' => $this->description,

            'price' => $this->price,

            'original_price' => $this->original_price,

            'stock' => $this->stock,

            'is_featured' => $this->is_featured,

            'is_latest' => $this->is_latest,

            'is_popular' => $this->is_popular,

            'top_category' => $this->topCategory?->name,

            'mid_category' => $this->midCategory?->name,

            'end_category' => $this->endCategory?->name,

            'images' => $this->images->map(function ($image) {
                return [
                    'id' => $image->id,
                    'image_path' => asset('storage/' . $image->image_path),
                    'is_main' => $image->is_main,
                ];
            }),

            'created_at' => $this->created_at,
            'slug' => $this->slug,

            'sku' => $this->sku,

            'brand' => $this->brand,

            'status' => $this->status,
        ];
    }
}