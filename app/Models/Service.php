<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_category_id',

        'name',
        'slug',

        'short_description',
        'description',

        // SEO
        'meta_title',
        'meta_description',
        'meta_keywords',


        // Images
        'image',
        'banner',

        // Options
        'featured',
        'status',
        'sort_order',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'status' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'service_category_id');
    }
}