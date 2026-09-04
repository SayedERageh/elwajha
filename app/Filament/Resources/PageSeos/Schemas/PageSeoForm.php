<?php

namespace App\Filament\Resources\PageSeos\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class PageSeoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('page_key')
                    ->label('معرف الصفحة')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->placeholder('مثال: home')
                    ->helperText('اكتب معرف الصفحة مثل: home أو about أو pricing')
                    ->maxLength(255),

                TextInput::make('meta_title')
                    ->label('عنوان الصفحة SEO')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('مثال: شركة تسويق وبرمجة بالشيخ زايد | الواجهة'),

                Textarea::make('meta_description')
                    ->label('Meta Description')
                    ->required()
                    ->rows(4)
                    ->maxLength(500)
                    ->placeholder('اكتب وصف الصفحة الذي سيظهر في نتائج البحث...'),

                Textarea::make('meta_keywords')
                    ->label('Meta Keywords')
                    ->rows(3)
                    ->placeholder('تصميم مواقع, برمجة مواقع, تسويق إلكتروني')
                    ->helperText('افصل بين الكلمات باستخدام فاصلة ,'),

                TextInput::make('og_title')
                    ->label('Open Graph Title')
                    ->maxLength(255)
                    ->placeholder('العنوان الذي يظهر عند مشاركة الصفحة'),

                Textarea::make('og_description')
                    ->label('Open Graph Description')
                    ->rows(3)
                    ->maxLength(500)
                    ->placeholder('الوصف الذي يظهر عند مشاركة الصفحة على فيسبوك وواتساب وغيرها'),

                TextInput::make('og_image')
                    ->label('Open Graph Image')
                    ->maxLength(255)
                    ->placeholder('assets/img/og.jpg')
                    ->helperText('مسار الصورة المستخدمة عند مشاركة الصفحة'),

                TextInput::make('canonical_url')
                    ->label('Canonical URL')
                    ->url()
                    ->maxLength(500)
                    ->placeholder('https://example.com/page')
                    ->helperText('اتركه فارغًا إذا كنت تريد استخدام الرابط الحالي تلقائيًا'),

                Toggle::make('is_active')
                    ->label('تفعيل SEO')
                    ->default(true)
                    ->inline(false),

            ]);
    }
}