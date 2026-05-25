<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [

        'user_id'
    ];

 // cart 

    public function user()
    {
        return $this->belongsTo(User::class);
    }


   //cart items

    public function items()
    {
        return $this->hasMany(CartItem::class);
    }
}