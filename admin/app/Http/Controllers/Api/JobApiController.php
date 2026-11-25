<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;

class JobApiController extends Controller
{
    public function index()
    {
        $jobs = Job::where('is_active', true)->orderBy('created_at', 'desc')->get()
            ->map(function ($job) {
                return [
                    'title'    => $job->title,
                    'exp'      => $job->experience,
                    'type'     => $job->type,
                    'icon'     => $job->icon_slug,
                    'salary'   => $job->salary,
                    'location' => $job->location,
                ];
            });
        return response()->json($jobs);
    }
}
