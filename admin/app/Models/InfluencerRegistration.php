<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfluencerRegistration extends Model
{
    protected $fillable = [
        'full_name', 'email', 'phone', 'instagram_handle', 'category', 'message'
    ];
}
