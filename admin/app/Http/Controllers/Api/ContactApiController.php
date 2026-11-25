<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'first_name' => 'required|string|max:100',
                'last_name'  => 'required|string|max:100',
                'email'      => 'required|email|max:255',
                'phone'      => 'nullable|string|max:20',
                'message'    => 'required|string|max:5000',
            ]);
            Contact::create($validated);

            // Send notification email to admin & confirmation to user via SMTP
            \App\Services\MailService::notifyContact($validated);

            return response()->json(['success' => true, 'message' => 'Message sent successfully.']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Validation failed.';
            return response()->json(['success' => false, 'message' => $msg, 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
