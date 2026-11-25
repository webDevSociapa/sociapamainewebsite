<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('thumbnail')->nullable();
            $table->enum('status', ['published', 'draft'])->default('draft');
            $table->string('author')->default('Sociapa Research Desk');
            $table->string('read_time')->nullable();
            $table->string('category')->default('BRAND_SEO');
            $table->timestamps();
        });

        Schema::create('blog_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_id')->constrained('blogs')->onDelete('cascade');
            $table->longText('content_html');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_details');
        Schema::dropIfExists('blogs');
    }
};
