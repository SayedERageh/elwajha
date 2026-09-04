<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $this->call([
            ServiceSeeder::class,

            BlogSeeder::class,
            BlogDesignSeeder::class,
            BlogDesignSecondSeeder::class,
            BlogDesignThirdSeeder::class,
            BlogDesignFourthSeeder::class,
            PageSeoSeeder::class,

            ServiceExpansionSeeder::class,
        ]);
    }
}