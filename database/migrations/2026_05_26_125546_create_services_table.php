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
       Schema::create('services', function (Blueprint $table) {
    $table->id();

    // القسم
    $table->foreignId('service_category_id')
        ->constrained()
        ->cascadeOnDelete();

    $table->string('name');

    $table->string('slug')->unique();

    // وصف مختصر
    $table->text('short_description')->nullable();

    // المحتوى الكامل
    $table->longText('description')->nullable();

    // SEO
    $table->string('meta_title')->nullable();

    $table->text('meta_description')->nullable();

    $table->text('meta_keywords')->nullable();

   
    // صورة الخدمة
    $table->string('image')->nullable();

    // بانر
    $table->string('banner')->nullable();

    // مميز؟
    $table->boolean('featured')->default(false);

    // الحالة
    $table->boolean('status')->default(true);

    // ترتيب
    $table->integer('sort_order')->default(0);

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
