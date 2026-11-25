<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuditRequest extends Model
{
    protected $fillable = [
        'full_name', 'email', 'website_url', 'phone', 'goals', 'file_path', 'status'
    ];
}
