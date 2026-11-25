<?php

namespace App\Http\Controllers\Admin; 
use App\Http\Controllers\Controller;
use App\Models\CareerApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CareerController extends Controller
{
    public function index(Request $request)
    {
        $query = CareerApplication::query();
        if ($request->filled('search')) {
            $query->where(function($q) use ($request) {
                $q->where('full_name', 'like', '%'.$request->search.'%')
                  ->orWhere('email', 'like', '%'.$request->search.'%');
            });
        }
        if ($request->filled('position')) {
            $query->where('position', $request->position);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        $applications = $query->latest()->paginate(20)->withQueryString();
        $positions = CareerApplication::distinct()->pluck('position');
        return view('admin.career.index', compact('applications', 'positions'));
    }

    public function show(CareerApplication $application)
    {
        if ($application->status === 'new') {
            $application->update(['status' => 'reviewed']);
        }
        return view('admin.career.show', compact('application'));
    }

    public function updateStatus(CareerApplication $application, Request $request)
    {
        $request->validate(['status' => 'required|in:new,reviewed,shortlisted,rejected']);
        $application->update(['status' => $request->status]);
        return back()->with('success', 'Status updated.');
    }

    public function destroy(CareerApplication $application)
    {
        if ($application->resume_path) {
            Storage::disk('public')->delete($application->resume_path);
        }
        $application->delete();
        return redirect()->route('admin.career.index')->with('success', 'Application deleted.');
    }

    public function downloadResume(CareerApplication $application)
    {
        if (!$application->resume_path || !Storage::disk('public')->exists($application->resume_path)) {
            abort(404, 'Resume file not found.');
        }
        return Storage::disk('public')->download($application->resume_path);
    }
}
