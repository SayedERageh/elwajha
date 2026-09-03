<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_post_id',
        'title',
        'content',
        'image',
        'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
    ];

    /**
     * القسم تابع لمقالة
     */
    public function blogPost()
    {
        return $this->belongsTo(BlogPost::class, 'blog_post_id');
    }
}