<?php

namespace App\Filament\Resources\PageSeos\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;

class PageSeosTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('page_key')
                    ->label('الصفحة')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('meta_title')
                    ->label('عنوان SEO')
                    ->searchable()
                    ->limit(50),

                TextColumn::make('meta_description')
                    ->label('وصف SEO')
                    ->limit(70)
                    ->wrap(),

                IconColumn::make('is_active')
                    ->label('الحالة')
                    ->boolean(),

                TextColumn::make('updated_at')
                    ->label('آخر تعديل')
                    ->dateTime('Y-m-d H:i')
                    ->sortable(),

            ])

            ->filters([
                //

            ])

            ->recordActions([
                EditAction::make(),
            ])

            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}