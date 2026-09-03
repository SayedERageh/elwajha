<?php

namespace App\Filament\Resources\BlogPosts\Pages;

use App\Filament\Resources\BlogPosts\BlogPostResource;
use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Services\AIArticleService;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

class ListBlogPosts extends ListRecords
{
    protected static string $resource = BlogPostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('generate_ai')
                ->label('إنشاء مقال AI')
                ->icon('heroicon-o-sparkles')
                ->color('success')
                ->modalHeading('✨ إنشاء مقال بالذكاء الاصطناعي')
                ->modalDescription(
                    'اكتب موضوع المقال وسيقوم الذكاء الاصطناعي بإنشاء المقال وبيانات SEO.'
                )
                ->schema([

                    TextInput::make('topic')
                        ->label('موضوع المقال')
                        ->placeholder('مثال: أهمية الموقع الإلكتروني للشركات')
                        ->required(),

                    Select::make('category')
                        ->label('التصنيف')
                        ->options(
                            BlogCategory::where('is_active', true)
                                ->pluck('name', 'name')
                                ->toArray()
                        )
                        ->searchable()
                        ->required(),

                    TextInput::make('keyword')
                        ->label('الكلمة المفتاحية الرئيسية')
                        ->placeholder('مثال: تصميم مواقع إلكترونية')
                        ->required(),

                    TextInput::make('word_count')
                        ->label('عدد الكلمات')
                        ->numeric()
                        ->default(1200)
                        ->minValue(500)
                        ->maxValue(3000)
                        ->required(),

                ])
                ->action(function (array $data) {

                    try {

                        $article = app(AIArticleService::class)
                            ->generate($data);

                        $categoryId = BlogCategory::where(
                            'name',
                            $data['category']
                        )->value('id');

                        BlogPost::create([
                            'blog_category_id' => $categoryId,

                            'title' => $article['title'] ?? $data['topic'],

                            'slug' => $article['slug']
                                ?? str()->slug($data['topic']),

                            'short_description' =>
                                $article['short_description'] ?? '',

                            'content' =>
                                $article['content'] ?? '',

                            'meta_title' =>
                                $article['meta_title']
                                ?? $article['title']
                                ?? $data['topic'],

                            'meta_description' =>
                                $article['meta_description'] ?? '',

                            'meta_keywords' =>
                                $article['meta_keywords']
                                ?? [$data['keyword']],

                            'is_active' => false,
                        ]);

                        Notification::make()
                            ->title('تم إنشاء المقال بنجاح 🎉')
                            ->body('تم حفظ المقال كمسودة.')
                            ->success()
                            ->send();

                    } catch (\Throwable $e) {

                        Notification::make()
                            ->title('حدث خطأ ❌')
                            ->body($e->getMessage())
                            ->danger()
                            ->send();
                    }
                }),

            CreateAction::make(),
        ];
    }
}