<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});


Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
});
use App\Models\Category;
use App\Models\Portfolio;

Route::get('/categories', function () {

    return Category::all();

});

Route::get('/portfolios', function () {

    return Portfolio::with('category')->get();

});

Route::get('/portfolio/{slug}', function ($slug) {

    return Portfolio::with('category')
        ->where('slug', $slug)
        ->firstOrFail();

});