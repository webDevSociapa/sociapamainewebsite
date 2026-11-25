<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate(['email' => 'required|email|max:255']);
            NewsletterSubscriber::firstOrCreate(
                ['email' => $request->email],
                ['is_active' => true, 'subscribed_at' => now()]
            );

            // Send notification email to admin & welcome email to subscriber
            \App\Services\MailService::notifyNewsletter(['email' => $request->email]);

            return response()->json(['success' => true, 'message' => 'Subscribed successfully.']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Invalid email address.';
            return response()->json(['success' => false, 'message' => $msg], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
