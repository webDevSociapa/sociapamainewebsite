<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\CareerApplication;
use App\Models\AuditRequest;
use App\Models\InfluencerRegistration;
use App\Models\NewsletterSubscriber;
use App\Models\Blog;
use App\Models\Job;
use App\Models\Client;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'contacts'    => Contact::count(),
            'career'      => CareerApplication::count(),
            'audit'       => AuditRequest::count(),
            'influencers' => InfluencerRegistration::count(),
            'newsletter'  => NewsletterSubscriber::where('is_active', true)->count(),
            'blogs'       => Blog::where('status', 'published')->count(),
            'jobs'        => Job::where('is_active', true)->count(),
            'clients'     => Client::where('is_active', true)->count(),
        ];

        $recentContacts    = Contact::latest()->take(5)->get();
        $recentCareer      = CareerApplication::latest()->take(5)->get();
        $recentAudit       = AuditRequest::latest()->take(5)->get();
        $recentInfluencers = InfluencerRegistration::latest()->take(5)->get();

        $newContacts = Contact::where('status', 'new')->count();
        $newCareer   = CareerApplication::where('status', 'new')->count();
        $pendingAudit = AuditRequest::where('status', 'pending')->count();

        return view('admin.dashboard.index', compact(
            'stats', 'recentContacts', 'recentCareer',
            'recentAudit', 'recentInfluencers',
            'newContacts', 'newCareer', 'pendingAudit'
        ));
    }
}
