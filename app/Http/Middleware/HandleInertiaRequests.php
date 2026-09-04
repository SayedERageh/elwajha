<?php

namespace App\Http\Middleware;

use App\Models\PageSeo;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * الحصول على SEO الصفحة الحالية
     */
    protected function getSeo(Request $request): ?array
    {
        $routeName = $request->route()?->getName();

        $pageKey = match ($routeName) {
            'home'           => 'home',
            'about'          => 'about',
            'pricing'        => 'pricing',
            'contact'        => 'contact',
            'services.index' => 'services',
            'portfolio'      => 'portfolio',

            default => null,
        };

        if (!$pageKey) {
            return null;
        }

        $seo = PageSeo::query()
            ->where('page_key', $pageKey)
            ->where('is_active', true)
            ->first();

        if (!$seo) {
            return null;
        }

        return [
            'page_key'         => $seo->page_key,
            'meta_title'       => $seo->meta_title,
            'meta_description' => $seo->meta_description,
            'meta_keywords'    => $seo->meta_keywords,
            'og_title'         => $seo->og_title,
            'og_description'   => $seo->og_description,
            'og_image'         => $seo->og_image,
            'canonical_url'    => $seo->canonical_url,
        ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),

            /*
            |--------------------------------------------------------------------------
            | أقسام الخدمات
            |--------------------------------------------------------------------------
            */

            'serviceCategories' => ServiceCategory::query()
                ->where('status', true)
                ->with([
                    'services' => function ($query) {
                        $query
                            ->where('status', true)
                            ->orderBy('sort_order');
                    }
                ])
                ->orderBy('sort_order')
                ->get(),

            /*
            |--------------------------------------------------------------------------
            | SEO
            |--------------------------------------------------------------------------
            */

            'seo' => fn () => $this->getSeo($request),
        ];
    }
}