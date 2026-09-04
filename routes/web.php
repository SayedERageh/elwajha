<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ServiceController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PortfolioController;

// ==========================================
// الصفحات الرئيسية
// ==========================================

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/services', [
    ServiceController::class,
    'index'
])->name('services.index');

Route::get('/services/{slug}', [
    ServiceController::class,
    'show'
])->name('services.show');

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
})->name('portfolio');


// ==========================================
// Blog
// ==========================================

Route::get('/blog', [
    BlogController::class,
    'index'
])->name('blog.index');

Route::get('/blog/{slug}', [
    BlogController::class,
    'show'
])->name('blog.show');


// ==========================================
// Portfolio
// ==========================================

Route::get('/api/categories', [
    PortfolioController::class,
    'categories'
]);

Route::get('/api/portfolios', [
    PortfolioController::class,
    'index'
]);

Route::get('/api/portfolios/{id}', [
    PortfolioController::class,
    'show'
]);

Route::get('/portfolio/{slug}', function ($slug) {

    return Inertia::render('PortfolioShow', [
        'slug' => $slug
    ]);

})->name('portfolio.show');