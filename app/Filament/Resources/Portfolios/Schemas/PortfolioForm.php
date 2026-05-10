<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;

use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Tabs::make('portfolio_tabs')
                    ->id('portfolio-tabs')
                    ->persistTab()
                    ->persistTabInQueryString('portfolio-tab')

                    ->tabs([

                        // 🟢 Tab 1: بيانات المشروع الأساسية
                        Tab::make('بيانات المشروع')
                            ->schema([

                                Section::make()
                                    ->schema([

                                        Grid::make(2)
                                            ->schema([

                                                TextInput::make('title')
                                                    ->label('اسم المشروع')
                                                    ->required()
                                                    ->maxLength(255),

                                                TextInput::make('slug')
                                                    ->label('الرابط')
                                                    ->required()
                                                    ->unique(ignoreRecord: true),

                                                Select::make('category_id')
                                                    ->label('الصنف')
                                                    ->relationship('category', 'name')
                                                    ->searchable()
                                                    ->preload()
                                                    ->required(),

                                                TextInput::make('demo_url')
                                                    ->label('رابط الديمو')
                                                    ->url()
                                                    ->maxLength(255),

                                            ]),

                                    ]),
                            ]),

                        // 🟡 Tab 2: الوصف
                        Tab::make('الوصف')
                            ->schema([

                                Section::make()
                                    ->schema([

                                        Textarea::make('short_description')
                                            ->label('وصف مختصر')
                                            ->rows(3)
                                            ->columnSpanFull(),

                                        RichEditor::make('description')
                                            ->label('الوصف الكامل')
                                            ->columnSpanFull(),

                                    ]),
                            ]),

                        // 🔵 Tab 3: الوسائط
                        Tab::make('الوسائط')
                            ->schema([

                                Section::make()
                                    ->schema([

                                        FileUpload::make('image')
                                            ->label('صورة المشروع')
                                            ->image()
                                            ->directory('portfolio')
                                            ->disk('public')
                                            ->imageEditor(),

                                    ]),
                            ]),

                    ]),
            ]);
    }
}