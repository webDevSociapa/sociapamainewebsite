<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AuditRequest;
use Illuminate\Http\Request;

class AuditApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'full_name'   => 'required|string|max:200',
                'email'       => 'required|email|max:255',
                'website_url' => 'required|string|max:500',
                'phone'       => 'nullable|string|max:20',
                'goals'       => 'nullable|string|max:200',
                'file'        => 'nullable|file|mimes:pdf,doc,docx,ppt,pptx,zip|max:15360',
            ]);

            $filePath = null;
            if ($request->hasFile('file')) {
                $filePath = $request->file('file')->store('audits', 'public');
            }

            $auditData = [
                'full_name'   => $validated['full_name'],
                'email'       => $validated['email'],
                'website_url' => $validated['website_url'],
                'phone'       => $validated['phone'] ?? null,
                'goals'       => $validated['goals'] ?? 'General Audit',
                'file_path'   => $filePath,
            ];
            AuditRequest::create($auditData);

            // Build full public URL to file if uploaded
            $fileUrl = $filePath ? asset('storage/' . $filePath) : null;

            // Send notification email to admin via SMTP
            \App\Services\MailService::notifyAudit($validated, $fileUrl);

            return response()->json(['success' => true, 'message' => 'Audit request submitted.']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Validation failed.';
            return response()->json(['success' => false, 'message' => $msg, 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
