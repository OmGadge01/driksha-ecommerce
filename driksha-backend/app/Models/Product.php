<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductImage;
class Product extends Model 
{
    protected $fillable = [
        'name', 'description', 'price', 'original_price',
        'stock', 'top_category', 'mid_category', 'end_category',
        'is_featured', 'is_latest', 'is_popular'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_latest' => 'boolean',
        'is_popular' => 'boolean',
    ];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
        
    }

    public function mainImage() 
    {
        return $this->hasOne(ProductImage::class)->where('is_main', true);
    }
}