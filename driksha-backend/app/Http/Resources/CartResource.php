<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'user_id' => $this->user_id,

            'items' => CartItemResource::collection(
                $this->whenLoaded('items')
            ),

            'total_items' => $this->items->sum('quantity'),

            'total_price' => $this->items->sum(function ($item) {

                return $item->product->price * $item->quantity;
            }),

            'created_at' => $this->created_at,
        ];
    }
}