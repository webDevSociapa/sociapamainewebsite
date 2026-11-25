<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    use HasFactory;

    protected $table = 'case_studies';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'address',
        'case_study_title',
        'case_study_file',
        'ip_address',
        'status',
    ];
}
