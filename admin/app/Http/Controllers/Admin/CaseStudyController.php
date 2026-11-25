<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use Illuminate\Http\Request;

class CaseStudyController extends Controller
{
    public function index(Request $request)
    {
        $query = CaseStudy::query();
        if ($request->filled('search')) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', '%'.$request->search.'%')
                  ->orWhere('email', 'like', '%'.$request->search.'%')
                  ->orWhere('phone', 'like', '%'.$request->search.'%')
                  ->orWhere('case_study_title', 'like', '%'.$request->search.'%');
            });
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        $leads = $query->latest()->paginate(20)->withQueryString();
        return view('admin.case_studies.index', compact('leads'));
    }

    public function updateStatus(CaseStudy $caseStudy, Request $request)
    {
        $request->validate(['status' => 'required|in:new,contacted,closed']);
        $caseStudy->update(['status' => $request->status]);
        return back()->with('success', 'Status updated.');
    }

    public function destroy(CaseStudy $caseStudy)
    {
        $caseStudy->delete();
        return redirect()->route('admin.case_studies.index')->with('success', 'Case study lead deleted.');
    }

    public function exportCsv()
    {
        $leads = CaseStudy::latest()->get();
        $filename = "case_study_leads_" . date('Y-m-d') . ".csv";
        $handle = fopen('php://memory', 'w');
        fputcsv($handle, ['ID', 'Name', 'Phone', 'Email', 'Address', 'Case Study', 'File', 'Status', 'IP', 'Date']);
        foreach ($leads as $l) {
            fputcsv($handle, [
                $l->id,
                $l->name,
                $l->phone,
                $l->email,
                $l->address,
                $l->case_study_title,
                $l->case_study_file,
                $l->status,
                $l->ip_address,
                $l->created_at->format('Y-m-d H:i:s')
            ]);
        }
        fseek($handle, 0);
        return response(stream_get_contents($handle), 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ]);
    }
}
