<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Section::make('إضافة عمل جديد')
                    ->schema([

                        Grid::make(2)
                            ->schema([

                                TextInput::make('title')
                                    ->label('اسم المشروع')
                                    ->required()
                                    ->maxLength(255)
                                    ->columnSpan(1),

                                TextInput::make('slug')
                                    ->label('الرابط')
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true)
                                    ->helperText('اختياري - يمكن تركه فارغًا')
                                    ->columnSpan(1),

                                Select::make('category_id')
                                    ->label('القسم')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->placeholder('اختر القسم - اختياري')
                                    ->columnSpan(1),

                                TextInput::make('demo_url')
                                    ->label('رابط المشروع')
                                    ->url()
                                    ->maxLength(255)
                                    ->placeholder('https://example.com')
                                    ->helperText('اختياري')
                                    ->columnSpan(1),

                                FileUpload::make('image')
                                    ->label('صورة المشروع')
                                    ->image()
                                    ->directory('portfolio')
                                    ->disk('public')
                                    ->imageEditor()
                                    ->columnSpanFull(),

                                Textarea::make('short_description')
                                    ->label('وصف مختصر')
                                    ->rows(3)
                                    ->placeholder('وصف مختصر للمشروع - اختياري')
                                    ->columnSpanFull(),

                                RichEditor::make('description')
                                    ->label('وصف المشروع')
                                    ->placeholder('اكتب تفاصيل المشروع - اختياري')
                                    ->columnSpanFull(),

                            ]),

                    ]),

            ]);
    }
}