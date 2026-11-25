<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use Illuminate\Http\Request;

class CaseStudyApiController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name'             => 'required|string|max:255',
                'phone'            => 'required|string|max:50',
                'email'            => 'required|string|max:255',
                'address'          => 'nullable|string|max:1000',
                'case_study_title' => 'nullable|string|max:255',
                'case_study_file'  => 'nullable|string|max:255',
            ]);

            $validated['address'] = $validated['address'] ?? '';
            $validated['ip_address'] = $request->ip();
            $validated['status'] = 'new';

            $record = CaseStudy::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Case study download lead recorded successfully.',
                'data'    => $record
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $msg = collect($e->errors())->flatten()->first() ?? 'Validation failed.';
            return response()->json(['success' => false, 'message' => $msg, 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Server error: ' . $e->getMessage()], 500);
        }
    }
}
