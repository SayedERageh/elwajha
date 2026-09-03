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
   Schema::create('service_categories', function (Blueprint $table) {
    $table->id();

    $table->string('name');
    $table->string('slug')->unique();

    $table->text('description')->nullable();

    // SEO
    $table->string('meta_title')->nullable();
    $table->text('meta_description')->nullable();
    $table->text('meta_keywords')->nullable();

    // Image
    $table->string('image')->nullable();

    // Status
    $table->boolean('status')->default(1);

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
        Schema::dropIfExists('service_categories');
    }
};
