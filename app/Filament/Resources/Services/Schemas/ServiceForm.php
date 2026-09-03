<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;

use Filament\Schemas\Schema;

use Illuminate\Support\Str;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                /*
                |--------------------------------------------------------------------------
                | Category
                |--------------------------------------------------------------------------
                */

                Select::make('service_category_id')
                    ->label('القسم')
                    ->relationship('category', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                /*
                |--------------------------------------------------------------------------
                | Main Info
                |--------------------------------------------------------------------------
                */

                TextInput::make('name')
                    ->label('اسم الخدمة')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) =>
                        $set('slug', Str::slug($state))
                    ),

                TextInput::make('slug')
                    ->label('الرابط المختصر (Slug)')
                    ->required()
                    ->unique(ignoreRecord: true),

                Textarea::make('short_description')
                    ->label('وصف مختصر')
                    ->rows(3),

                RichEditor::make('description')
                    ->label('وصف الخدمة')
                    ->columnSpanFull(),

                /*
                |--------------------------------------------------------------------------
                | Images
                |--------------------------------------------------------------------------
                */

                FileUpload::make('image')
                    ->label('صورة الخدمة')
                    ->image()
                    ->disk('public')
                    ->directory('services')
                    ->multiple(false)
                    ->maxFiles(1),

                FileUpload::make('banner')
                    ->label('البانر')
                    ->image()
                        ->disk('public')
                    ->directory('services/banners')
                    ->multiple(false)
                    ->maxFiles(1),

                /*
                |--------------------------------------------------------------------------
                | SEO
                |--------------------------------------------------------------------------
                */

                TextInput::make('meta_title')
                    ->label('عنوان الميتا')
                    ->maxLength(255),

                Textarea::make('meta_description')
                    ->label('وصف الميتا')
                    ->rows(4),

                TextInput::make('meta_keywords')
                    ->label('الكلمات المفتاحية'),

                /*
                |--------------------------------------------------------------------------
                | Settings
                |--------------------------------------------------------------------------
                */

                Toggle::make('featured')
                    ->label('خدمة مميزة')
                    ->default(false),

                Toggle::make('status')
                    ->label('مفعل')
                    ->default(true),

                TextInput::make('sort_order')
                    ->label('الترتيب')
                    ->numeric()
                    ->default(0),

            ]);
    }
}