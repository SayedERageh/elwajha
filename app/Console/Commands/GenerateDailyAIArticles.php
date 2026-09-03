<?php

namespace App\Console\Commands;

use App\Jobs\GenerateAIArticleJob;
use App\Models\BlogCategory;
use Illuminate\Console\Command;

class GenerateDailyAIArticles extends Command
{
    protected $signature = 'ai:generate-daily';

    protected $description = 'Generate daily AI blog articles';

    public function handle()
    {
        $count = (int) config('services.ai_articles.daily', 3);

        $category = BlogCategory::where('is_active', true)->first();

        if (!$category) {
            $this->error('لا يوجد تصنيف فعال.');
            return self::FAILURE;
        }

        for ($i = 1; $i <= $count; $i++) {

            GenerateAIArticleJob::dispatch([
                'topic' => 'أهمية المواقع الإلكترونية للشركات والأعمال',
                'category' => $category->id,
                'keyword' => 'تصميم مواقع إلكترونية',
                'word_count' => 500,
            ]);
        }

        $this->info("تم إرسال {$count} مقالات إلى Queue.");

        return self::SUCCESS;
    }
}