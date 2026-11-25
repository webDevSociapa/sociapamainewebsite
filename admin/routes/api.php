<?php

use App\Http\Controllers\Api\ContactApiController;
use App\Http\Controllers\Api\CareerApiController;
use App\Http\Controllers\Api\AuditApiController;
use App\Http\Controllers\Api\InfluencerApiController;
use App\Http\Controllers\Api\NewsletterApiController;
use App\Http\Controllers\Api\BlogApiController;
use App\Http\Controllers\Api\JobApiController;
use App\Http\Controllers\Api\CaseStudyApiController;
use Illuminate\Support\Facades\Route;

// Public API endpoints for React frontend
Route::prefix('v1')->group(function () {
    Route::post('/contact', [ContactApiController::class, 'store']);
    Route::post('/career', [CareerApiController::class, 'store']);
    Route::post('/audit', [AuditApiController::class, 'store']);
    Route::post('/influencer', [InfluencerApiController::class, 'store']);
    Route::post('/newsletter', [NewsletterApiController::class, 'store']);
    Route::post('/case-studies', [CaseStudyApiController::class, 'store']);
    Route::post('/case-study-lead', [CaseStudyApiController::class, 'store']);
    Route::get('/blogs', [BlogApiController::class, 'index']);
    Route::get('/blogs/{slug}', [BlogApiController::class, 'show']);
    Route::get('/jobs', [JobApiController::class, 'index']);
});
