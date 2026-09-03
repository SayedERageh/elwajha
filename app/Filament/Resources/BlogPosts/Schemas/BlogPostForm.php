<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\FileUpload;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            
            Select::make('blog_category_id')
                ->label('Category')
                ->relationship('category', 'name')
                ->searchable()
                ->preload()
                ->required(),

            TextInput::make('title')
                ->label('Title')
                ->required()
                ->maxLength(255)
                ->live(onBlur: true)
                ->afterStateUpdated(fn ($state, callable $set) =>
                    $set('slug', str($state)->slug())
                ),

            TextInput::make('slug')
                ->label('Slug')
                ->required()
                ->maxLength(255)
                ->unique(ignoreRecord: true),

            Textarea::make('short_description')
                ->label('Short Description')
                ->rows(3)
                ->columnSpanFull(),

            RichEditor::make('content')
                ->label('Content')
                ->columnSpanFull()
                ->required(),

            FileUpload::make('image')
                ->label('Image')
                ->image()
                ->disk('public')
                ->directory('blog-posts')
                ->columnSpanFull(),

            TextInput::make('meta_title')
                ->label('Meta Title')
                ->maxLength(255),

            Textarea::make('meta_description')
                ->label('Meta Description')
                ->rows(2),

            TextInput::make('meta_keywords')
                ->label('Meta Keywords (comma separated)')
                ->helperText('Example: seo, marketing, blog')
                ->afterStateHydrated(function ($component, $state, $set) {
                    // لو مخزن array نحوله string للعرض
                    if (is_array($state)) {
                        $set('meta_keywords', implode(',', $state));
                    }
                })
                ->dehydrateStateUsing(fn ($state) =>
                    array_map('trim', explode(',', $state))
                ),

            Toggle::make('is_active')
                ->label('Active')
                ->default(true),

        ]);
    }
}