<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
 Schema::create('blog_posts', function (Blueprint $table) {
    $table->id();

    $table->foreignId('blog_category_id')
        ->constrained()
        ->cascadeOnDelete();

    $table->string('title');
    $table->string('slug')->unique();

    $table->longText('short_description')->nullable();
    $table->longText('content')->nullable();

    $table->string('image')->nullable();

    // SEO
    $table->string('meta_title')->nullable();
    $table->longText('meta_description')->nullable();
    $table->json('meta_keywords')->nullable();

    $table->boolean('is_active')->default(true);

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
