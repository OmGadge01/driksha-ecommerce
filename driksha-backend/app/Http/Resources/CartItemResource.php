<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'quantity' => $this->quantity,

            'subtotal' => $this->product->price * $this->quantity,

            'product' => [

                'id' => $this->product->id,

                'name' => $this->product->name,

                'slug' => $this->product->slug,

                'price' => $this->product->price,

                'brand' => $this->product->brand,

                'stock' => $this->product->stock,

                'image' => $this->product->mainImage
                    ? $this->product->mainImage->image_path
                    : null,
            ]
        ];
    }
}