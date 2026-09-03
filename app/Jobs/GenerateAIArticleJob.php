<?php

namespace App\Jobs;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Services\AIArticleService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Str;

class GenerateAIArticleJob implements ShouldQueue
{
    use Queueable;

    public int $timeout = 180;

    public function __construct(
        public array $data
    ) {}

    public function handle(AIArticleService $ai): void
    {
        $article = $ai->generate($this->data);

        $categoryId = $this->data['category'];

        BlogPost::create([
            'blog_category_id' => $categoryId,

            'title' => $article['title']
                ?? $this->data['topic'],

            'slug' => $article['slug']
                ?? Str::slug($article['title'] ?? $this->data['topic']),

            'short_description' =>
                $article['short_description'] ?? '',

            'content' =>
                $article['content'] ?? '',

            'meta_title' =>
                $article['meta_title']
                ?? $article['title']
                ?? $this->data['topic'],

            'meta_description' =>
                $article['meta_description'] ?? '',

            'meta_keywords' =>
                $article['meta_keywords']
                ?? [$this->data['keyword']],

            // مسودة
            'is_active' => false,
        ]);
    }
}