<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'status' => $this->status,

            'subtotal' => $this->subtotal,

            'shipping' => $this->shipping,

            'tax' => $this->tax,

            'total' => $this->total,

            'customer' => [

                'first_name' => $this->first_name,

                'last_name' => $this->last_name,

                'email' => $this->email,

                'address' => $this->address,

                'city' => $this->city,

                'postal_code' => $this->postal_code,
            ],

            'items' => $this->items->map(function ($item) {

                return [

                    'id' => $item->id,

                    'name' => $item->name,

                    'price' => $item->price,

                    'quantity' => $item->quantity,

                    'subtotal' => $item->price * $item->quantity,

                    'product' => [

                        'id' => $item->product?->id,

                        'slug' => $item->product?->slug,
                    ]
                ];
            }),

            'created_at' => $this->created_at,
        ];
    }
}