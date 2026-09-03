<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceCategory;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * جميع الخدمات
     */
    public function index()
    {
        $categories = ServiceCategory::query()
            ->where('status', true)
            ->with([
                'services' => function ($query) {
                    $query
                        ->where('status', true)
                        ->orderBy('sort_order');
                }
            ])
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Services', [
            'categories' => $categories,
        ]);
    }

    /**
     * صفحة خدمة واحدة
     */
    public function show(string $slug)
    {
        $service = Service::query()
            ->where('slug', $slug)
            ->where('status', true)
            ->with([
                'category' => function ($query) {
                    $query->where('status', true);
                }
            ])
            ->firstOrFail();

        return Inertia::render('ServiceShow', [
            'service' => $service,
        ]);
    }
}