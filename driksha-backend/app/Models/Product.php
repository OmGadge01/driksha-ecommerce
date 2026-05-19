<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductImage;
class Product extends Model 
{
    protected $fillable = [
        'name', 'description', 'price', 'original_price',
        'stock', 'top_category_id', 'mid_category_id', 'end_category_id',
        'is_featured', 'is_latest', 'is_popular'
    ];

    public function topCategory()
    {
        return $this->belongsTo(Category::class, 'top_category_id');
    }

    public function midCategory()
    {
        return $this->belongsTo(Category::class, 'mid_category_id');
    }

    public function endCategory()
    {
        return $this->belongsTo(Category::class, 'end_category_id');
    }
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