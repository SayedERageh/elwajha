<?php

namespace App\Filament\Resources\BlogCategories\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class BlogCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([

            TextInput::make('name')
                ->label('اسم القسم')
                ->required()
                ->maxLength(255)
                ->live(onBlur: true)
                ->afterStateUpdated(fn ($state, callable $set) =>
                    $set('slug', Str::slug($state))
                ),

            TextInput::make('slug')
                ->label('الرابط (Slug)')
                ->required()
                ->unique(ignoreRecord: true),

            Toggle::make('is_active')
                ->label('مفعل')
                ->default(true),

        ]);
    }
}