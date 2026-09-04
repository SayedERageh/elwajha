<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageSeo;

class PageSeoSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [

            [
                'page_key' => 'home',
                'meta_title' => 'شركة تسويق وبرمجة بالشيخ زايد | الواجهة',
                'meta_description' => 'شركة الواجهة في الشيخ زايد متخصصة في تصميم المواقع الإلكترونية والمتاجر الإلكترونية والبرمجة والتسويق الإلكتروني والدعاية والإعلان.',
                'meta_keywords' => 'تصميم مواقع, شركة تصميم مواقع, شركة برمجة, تسويق إلكتروني, الشيخ زايد, دعاية وإعلان',
                'og_title' => 'الواجهة | شركة تسويق وبرمجة بالشيخ زايد',
                'og_description' => 'تصميم مواقع وبرمجة وتسويق إلكتروني وحلول رقمية متكاملة للشركات.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

            [
                'page_key' => 'about',
                'meta_title' => 'من نحن | الواجهة للتسويق والبرمجة',
                'meta_description' => 'تعرف على شركة الواجهة وخدماتنا في تصميم المواقع والبرمجة والتسويق الإلكتروني والدعاية والإعلان.',
                'meta_keywords' => 'من نحن, الواجهة, شركة تصميم مواقع, شركة برمجة, تسويق إلكتروني',
                'og_title' => 'من نحن | الواجهة',
                'og_description' => 'تعرف على شركة الواجهة وخبرتنا في الحلول الرقمية والتسويق والبرمجة.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

            [
                'page_key' => 'pricing',
                'meta_title' => 'أسعار تصميم المواقع والبرمجة | الواجهة',
                'meta_description' => 'تعرف على أسعار وخطط تصميم المواقع والبرمجة والخدمات الرقمية التي تقدمها شركة الواجهة.',
                'meta_keywords' => 'أسعار تصميم مواقع, أسعار برمجة المواقع, أسعار المواقع, شركة تصميم مواقع',
                'og_title' => 'أسعار الخدمات | الواجهة',
                'og_description' => 'تعرف على خطط وأسعار خدمات تصميم المواقع والبرمجة.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

            [
                'page_key' => 'contact',
                'meta_title' => 'تواصل معنا | الواجهة للتسويق والبرمجة',
                'meta_description' => 'تواصل مع شركة الواجهة للحصول على خدمات تصميم المواقع والبرمجة والتسويق الإلكتروني والدعاية والإعلان.',
                'meta_keywords' => 'تواصل معنا, شركة تصميم مواقع, شركة برمجة, الشيخ زايد',
                'og_title' => 'تواصل معنا | الواجهة',
                'og_description' => 'تواصل مع فريق الواجهة لتنفيذ مشروعك الرقمي.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

            [
                'page_key' => 'services',
                'meta_title' => 'خدمات تصميم المواقع والبرمجة والتسويق | الواجهة',
                'meta_description' => 'اكتشف خدمات الواجهة في تصميم المواقع والمتاجر الإلكترونية والبرمجة والتسويق الإلكتروني والهوية البصرية.',
                'meta_keywords' => 'خدمات تصميم مواقع, برمجة مواقع, متجر إلكتروني, تسويق إلكتروني, هوية بصرية',
                'og_title' => 'خدمات الواجهة',
                'og_description' => 'حلول رقمية متكاملة تشمل تصميم المواقع والبرمجة والتسويق الإلكتروني.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

            [
                'page_key' => 'portfolio',
                'meta_title' => 'أعمالنا | تصميم مواقع وبرمجة | الواجهة',
                'meta_description' => 'شاهد نماذج من أعمال شركة الواجهة في تصميم المواقع والمتاجر الإلكترونية والبرمجة والحلول الرقمية.',
                'meta_keywords' => 'أعمال تصميم مواقع, سابقة أعمال, تصميم مواقع, برمجة مواقع',
                'og_title' => 'سابقة أعمال الواجهة',
                'og_description' => 'شاهد مجموعة من مشاريع وأعمال الواجهة في التصميم والبرمجة.',
                'og_image' => 'assets/img/og.jpg',
                'canonical_url' => null,
                'is_active' => true,
            ],

        ];

        foreach ($pages as $page) {
            PageSeo::updateOrCreate(
                [
                    'page_key' => $page['page_key'],
                ],
                $page
            );
        }
    }
}