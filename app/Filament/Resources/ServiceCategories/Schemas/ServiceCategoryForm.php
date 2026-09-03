<?php

namespace App\Filament\Resources\ServiceCategories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

use Filament\Schemas\Schema;

use Illuminate\Support\Str;

class ServiceCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('name')
                    ->label('اسم القسم')
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

                Textarea::make('description')
                    ->label('الوصف')
                    ->rows(5),

                FileUpload::make('image')
                    ->label('صورة القسم')
                    ->image()
                    ->disk('public')
                    ->directory('service-categories')
                    ->multiple(false)
                    ->maxFiles(1),

                TextInput::make('meta_title')
                    ->label('عنوان الميتا')
                    ->maxLength(255),

                Textarea::make('meta_description')
                    ->label('وصف الميتا')
                    ->rows(4),

                TextInput::make('meta_keywords')
                    ->label('الكلمات المفتاحية'),

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