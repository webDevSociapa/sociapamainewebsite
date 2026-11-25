<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title', 'slug', 'description', 'thumbnail', 'status', 'author', 'read_time', 'category'
    ];

    public function detail()
    {
        return $this->hasOne(BlogDetail::class);
    }
}
