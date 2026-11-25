<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\AuditRequest;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    public function index(Request $request)
    {
        $query = AuditRequest::query();
        if ($request->filled('search')) {
            $query->where(function($q) use ($request) {
                $q->where('full_name', 'like', '%'.$request->search.'%')
                  ->orWhere('email', 'like', '%'.$request->search.'%')
                  ->orWhere('website_url', 'like', '%'.$request->search.'%');
            });
        }
        if ($request->filled('goals')) {
            $query->where('goals', $request->goals);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        $audits = $query->latest()->paginate(20)->withQueryString();
        return view('admin.audit.index', compact('audits'));
    }

    public function show(AuditRequest $audit)
    {
        return view('admin.audit.show', compact('audit'));
    }

    public function updateStatus(AuditRequest $audit, Request $request)
    {
        $request->validate(['status' => 'required|in:pending,in_progress,completed']);
        $audit->update(['status' => $request->status]);
        return back()->with('success', 'Status updated.');
    }

    public function destroy(AuditRequest $audit)
    {
        $audit->delete();
        return redirect()->route('admin.audit.index')->with('success', 'Audit request deleted.');
    }
}
