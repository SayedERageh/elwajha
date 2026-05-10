<?php

use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Portfolio;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// 🔹 كل الأصناف
Route::get('/categories', function () {
    return Category::select('id', 'name', 'slug')->get();
});


// 🔹 كل المشاريع
Route::get('/portfolios', function () {
    return Portfolio::with('category')
        ->latest()
        ->get();
});


// 🔹 مشروع واحد بالتفاصيل
Route::get('/portfolios/{slug}', function ($slug) {
    return Portfolio::with('category')
        ->where('slug', $slug)
        ->firstOrFail();
});