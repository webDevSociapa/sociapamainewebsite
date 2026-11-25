<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InfluencerRegistration;
use Illuminate\Http\Request;

class InfluencerApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'full_name' => 'required|string|max:200',
                'email'     => 'required|email|max:255',
                'phone'     => 'required|string|max:20',
                'instagram' => 'nullable|string|max:200',
                'category'  => 'nullable|string|max:100',
                'message'   => 'nullable|string|max:2000',
            ]);
            InfluencerRegistration::create([
                'full_name'        => $validated['full_name'],
                'email'            => $validated['email'],
                'phone'            => $validated['phone'],
                'instagram_handle' => $validated['instagram'] ?? null,
                'category'         => $validated['category'] ?? null,
                'message'          => $validated['message'] ?? null,
            ]);

            // Send notification email to admin & confirmation to creator
            \App\Services\MailService::notifyInfluencer($validated);

            return response()->json(['success' => true, 'message' => 'Registration submitted.']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Validation failed.';
            return response()->json(['success' => false, 'message' => $msg, 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
