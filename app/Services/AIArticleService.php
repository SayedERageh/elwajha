<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Http;

class AIArticleService
{
    public function generate(array $data): array
    {
        $prompt = <<<PROMPT
اكتب مقال SEO عربي احترافي.

الموضوع: {$data['topic']}
التصنيف: {$data['category']}
الكلمة المفتاحية: {$data['keyword']}

اكتب مقالًا حوالي 500 كلمة فقط.

أرجع JSON فقط، بدون ``` وبدون أي كلام خارجه:

{
    "title": "عنوان جذاب",
    "short_description": "وصف مختصر",
    "content": "المقال كاملًا",
    "meta_title": "عنوان SEO",
    "meta_description": "وصف SEO",
    "meta_keywords": ["كلمة1", "كلمة2", "كلمة3"],
    "slug": "english-slug"
}

اجعل المحتوى طبيعيًا ومفيدًا ومتوافقًا مع SEO.
PROMPT;

        $response = Http::connectTimeout(10)
            ->timeout(50)
            ->withToken(config('services.openrouter.key'))
            ->withHeaders([
                'HTTP-Referer' => config('app.url'),
                'X-Title' => 'Alwajha',
            ])
            ->post(
                config('services.openrouter.url') . '/chat/completions',
                [
                    'model' => 'openrouter/free',

                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => 'أنت كاتب محتوى عربي محترف. أرجع JSON فقط.',
                        ],
                        [
                            'role' => 'user',
                            'content' => $prompt,
                        ],
                    ],

                    'temperature' => 0.4,

                    // نقلل حجم الرد حتى يكون أسرع
                    'max_tokens' => 1800,
                ]
            );

        if ($response->failed()) {
            throw new Exception(
                'حدث خطأ من OpenRouter: ' . $response->body()
            );
        }

        $content = $response->json('choices.0.message.content');

        if (!$content) {
            throw new Exception(
                'لم يتم استلام المقال من الذكاء الاصطناعي.'
            );
        }

        $content = trim($content);

        // إزالة ```json إذا أضافها الموديل
        $content = preg_replace('/^```json\s*/i', '', $content);
        $content = preg_replace('/\s*```$/', '', $content);

        $article = json_decode($content, true);

        if (!is_array($article)) {
            throw new Exception(
                'الذكاء الاصطناعي أرجع JSON غير صحيح: ' . $content
            );
        }

        return [
            'title' => $article['title'] ?? $data['topic'],

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

            'slug' =>
                $article['slug']
                ?? str()->slug($data['topic']),
        ];
    }
}