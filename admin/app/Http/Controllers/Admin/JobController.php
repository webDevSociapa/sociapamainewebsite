<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::latest()->paginate(20);
        return view('admin.jobs.index', compact('jobs'));
    }

    public function create()
    {
        return view('admin.jobs.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'experience' => 'required|string|max:100',
            'type'       => 'required|string|max:50',
            'salary'     => 'required|string|max:100',
            'location'   => 'required|string|max:200',
            'icon_slug'  => 'required|string|max:50',
            'is_active'  => 'boolean',
        ]);
        $validated['is_active'] = $request->boolean('is_active');
        Job::create($validated);
        return redirect()->route('admin.jobs.index')->with('success', 'Job created.');
    }

    public function edit(Job $job)
    {
        return view('admin.jobs.edit', compact('job'));
    }

    public function update(Job $job, Request $request)
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'experience' => 'required|string|max:100',
            'type'       => 'required|string|max:50',
            'salary'     => 'required|string|max:100',
            'location'   => 'required|string|max:200',
            'icon_slug'  => 'required|string|max:50',
            'is_active'  => 'boolean',
        ]);
        $validated['is_active'] = $request->boolean('is_active');
        $job->update($validated);
        return redirect()->route('admin.jobs.index')->with('success', 'Job updated.');
    }

    public function destroy(Job $job)
    {
        $job->delete();
        return redirect()->route('admin.jobs.index')->with('success', 'Job deleted.');
    }
}
