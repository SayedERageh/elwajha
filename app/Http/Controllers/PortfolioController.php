<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Category;

class PortfolioController extends Controller
{
    /**
     * عرض جميع الأعمال
     */
    public function index()
    {
        $portfolios = Portfolio::with('category')
            ->latest()
            ->get();

        return response()->json($portfolios);
    }

    /**
     * عرض التصنيفات
     */
    public function categories()
    {
        $categories = Category::orderBy('name')->get();

        return response()->json($categories);
    }

    /**
     * عرض تفاصيل مشروع
     */
    public function show($id)
    {
        $portfolio = Portfolio::with('category')
            ->findOrFail($id);

        return response()->json($portfolio);
    }
}