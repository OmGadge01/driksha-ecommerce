<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model 
{
    protected $fillable = [
        'site_name', 'tagline', 'logo', 'logo_public_id','email',
        'phone', 'address', 'facebook', 'instagram',
        'twitter', 'youtube'
    ];
}