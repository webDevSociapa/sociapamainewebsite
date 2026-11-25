<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CareerApplication;
use Illuminate\Http\Request;

class CareerApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'full_name'     => 'required|string|max:200',
                'email'         => 'required|email|max:255',
                'phone'         => 'required|string|max:20',
                'experience'    => 'required|string|max:100',
                'portfolio_url' => 'nullable|string|max:500',
                'position'      => 'required|string|max:100',
                'resume'        => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            ]);

            $resumePath = null;
            if ($request->hasFile('resume')) {
                $resumePath = $request->file('resume')->store('resumes', 'public');
            }

            CareerApplication::create([
                'full_name'     => $validated['full_name'],
                'email'         => $validated['email'],
                'phone'         => $validated['phone'],
                'experience'    => $validated['experience'],
                'portfolio_url' => $validated['portfolio_url'] ?? null,
                'position'      => $validated['position'],
                'resume_path'   => $resumePath,
            ]);

            // Build full URL to resume if uploaded
            $resumeUrl = $resumePath ? asset('storage/' . $resumePath) : null;
            \App\Services\MailService::notifyCareer($validated, $resumeUrl);

            return response()->json(['success' => true, 'message' => 'Application submitted successfully.']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Validation failed.';
            return response()->json(['success' => false, 'message' => $msg, 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
