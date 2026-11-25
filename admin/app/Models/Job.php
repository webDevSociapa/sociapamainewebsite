<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title', 'experience', 'type', 'salary', 'location', 'icon_slug', 'is_active'
    ];

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }
}
