<?php

use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CareerController;
use App\Http\Controllers\Admin\AuditController;
use App\Http\Controllers\Admin\InfluencerController;
use App\Http\Controllers\Admin\NewsletterController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\CaseStudyController;
use Illuminate\Support\Facades\Route;

// Auth Routes
Route::get('/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.login');
Route::post('/login', [AdminLoginController::class, 'login'])->name('admin.login.post');
Route::post('/logout', [AdminLoginController::class, 'logout'])->name('admin.logout');

// Protected Admin Routes
Route::middleware('admin.auth')->group(function () {

    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');

    // Contacts
    Route::get('/contacts', [ContactController::class, 'index'])->name('admin.contacts.index');
    Route::get('/contacts/{contact}', [ContactController::class, 'show'])->name('admin.contacts.show');
    Route::patch('/contacts/{contact}/status', [ContactController::class, 'updateStatus'])->name('admin.contacts.status');
    Route::delete('/contacts/{contact}', [ContactController::class, 'destroy'])->name('admin.contacts.destroy');
    Route::get('/contacts/export/csv', [ContactController::class, 'exportCsv'])->name('admin.contacts.export');

    // Career Applications
    Route::get('/career', [CareerController::class, 'index'])->name('admin.career.index');
    Route::get('/career/{application}', [CareerController::class, 'show'])->name('admin.career.show');
    Route::patch('/career/{application}/status', [CareerController::class, 'updateStatus'])->name('admin.career.status');
    Route::delete('/career/{application}', [CareerController::class, 'destroy'])->name('admin.career.destroy');
    Route::get('/career/{application}/resume', [CareerController::class, 'downloadResume'])->name('admin.career.resume');

    // Audit Requests
    Route::get('/audit', [AuditController::class, 'index'])->name('admin.audit.index');
    Route::get('/audit/{audit}', [AuditController::class, 'show'])->name('admin.audit.show');
    Route::patch('/audit/{audit}/status', [AuditController::class, 'updateStatus'])->name('admin.audit.status');
    Route::delete('/audit/{audit}', [AuditController::class, 'destroy'])->name('admin.audit.destroy');

    // Influencer Registrations
    Route::get('/influencers', [InfluencerController::class, 'index'])->name('admin.influencers.index');
    Route::get('/influencers/{influencer}', [InfluencerController::class, 'show'])->name('admin.influencers.show');
    Route::delete('/influencers/{influencer}', [InfluencerController::class, 'destroy'])->name('admin.influencers.destroy');

    // Newsletter
    Route::get('/newsletter', [NewsletterController::class, 'index'])->name('admin.newsletter.index');
    Route::delete('/newsletter/{subscriber}', [NewsletterController::class, 'destroy'])->name('admin.newsletter.destroy');
    Route::get('/newsletter/export/csv', [NewsletterController::class, 'exportCsv'])->name('admin.newsletter.export');

    // Case Study Leads
    Route::get('/case-studies', [CaseStudyController::class, 'index'])->name('admin.case_studies.index');
    Route::patch('/case-studies/{caseStudy}/status', [CaseStudyController::class, 'updateStatus'])->name('admin.case_studies.status');
    Route::delete('/case-studies/{caseStudy}', [CaseStudyController::class, 'destroy'])->name('admin.case_studies.destroy');
    Route::get('/case-studies/export/csv', [CaseStudyController::class, 'exportCsv'])->name('admin.case_studies.export');

    // Blogs
    Route::get('/blogs', [BlogController::class, 'index'])->name('admin.blogs.index');
    Route::get('/blogs/create', [BlogController::class, 'create'])->name('admin.blogs.create');
    Route::post('/blogs', [BlogController::class, 'store'])->name('admin.blogs.store');
    Route::get('/blogs/{blog}/edit', [BlogController::class, 'edit'])->name('admin.blogs.edit');
    Route::put('/blogs/{blog}', [BlogController::class, 'update'])->name('admin.blogs.update');
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy'])->name('admin.blogs.destroy');

    // Jobs
    Route::get('/jobs', [JobController::class, 'index'])->name('admin.jobs.index');
    Route::get('/jobs/create', [JobController::class, 'create'])->name('admin.jobs.create');
    Route::post('/jobs', [JobController::class, 'store'])->name('admin.jobs.store');
    Route::get('/jobs/{job}/edit', [JobController::class, 'edit'])->name('admin.jobs.edit');
    Route::put('/jobs/{job}', [JobController::class, 'update'])->name('admin.jobs.update');
    Route::delete('/jobs/{job}', [JobController::class, 'destroy'])->name('admin.jobs.destroy');

    // Clients
    Route::get('/clients', [ClientController::class, 'index'])->name('admin.clients.index');
    Route::get('/clients/create', [ClientController::class, 'create'])->name('admin.clients.create');
    Route::post('/clients', [ClientController::class, 'store'])->name('admin.clients.store');
    Route::get('/clients/{client}/edit', [ClientController::class, 'edit'])->name('admin.clients.edit');
    Route::put('/clients/{client}', [ClientController::class, 'update'])->name('admin.clients.update');
    Route::delete('/clients/{client}', [ClientController::class, 'destroy'])->name('admin.clients.destroy');
});
