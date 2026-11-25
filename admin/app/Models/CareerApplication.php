<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerApplication extends Model
{
    protected $fillable = [
        'full_name', 'email', 'phone', 'experience',
        'portfolio_url', 'position', 'resume_path', 'status'
    ];
}
