<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Job;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Seed Admin User
        Admin::firstOrCreate(
            ['email' => 'admin@sociapa.com'],
            [
                'name'     => 'Sociapa Admin',
                'password' => Hash::make('Admin@1234'),
            ]
        );

        // Seed Job Openings from Career.jsx data
        $jobs = [
            ['title' => 'Graphic Designer',  'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹20,000 - ₹33,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'graphic'],
            ['title' => 'Content Writer',     'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹15,000 - ₹25,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'content'],
            ['title' => 'UI Developer',       'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹25,000 - ₹40,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'ui'],
            ['title' => 'PHP Developer',      'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹15,000 - ₹30,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'php'],
            ['title' => 'Account Manager',    'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹25,000 - ₹45,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'account'],
            ['title' => 'Brand Manager',      'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹33,000 - ₹45,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'brand'],
            ['title' => 'SEO Executive',      'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹16,500 - ₹25,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'seo'],
            ['title' => 'BD Manager',         'experience' => '2-5 Years', 'type' => 'Full Time', 'salary' => '₹16,500 - ₹45,000/m', 'location' => 'Sector 116, Noida', 'icon_slug' => 'bd'],
        ];

        foreach ($jobs as $job) {
            Job::firstOrCreate(['title' => $job['title']], array_merge($job, ['is_active' => true]));
        }
    }
}
