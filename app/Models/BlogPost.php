<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_category_id',

        'title',
        'slug',

        'short_description',
        'content',

        'image',

        'meta_title',
        'meta_description',
        'meta_keywords',

        'is_active',
    ];

    protected $casts = [
        'meta_keywords' => 'array',
        'is_active' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    public function sections()
    {
        return $this->hasMany(PostSection::class, 'blog_post_id')
            ->orderBy('sort_order');
    }
}