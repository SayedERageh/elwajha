<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\BlogCategory;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = BlogPost::with('category')
            ->where('is_active', true)
            ->latest()
            ->get();

        $categories = BlogCategory::where('is_active', true)
            ->get();

        return Inertia::render('Blog', [
            'posts' => $posts,
            'categories' => $categories,
        ]);
    }

    public function show($slug)
    {
        $post = BlogPost::with([
            'category',
            'sections'
        ])
        ->where('slug', $slug)
        ->where('is_active', true)
        ->firstOrFail();

        return Inertia::render('BlogShow', [
            'post' => $post,
        ]);
    }
}