<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    protected $fillable = [
        'user_id', 'subtotal', 'shipping', 'tax', 'total', 
        'status', 'first_name', 'last_name', 'email',
        'address', 'city', 'postal_code'
    ];

    public function items() {
        return $this->hasMany(OrderItem::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}