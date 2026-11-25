@extends('admin.layout.app')
@section('title', 'Job Openings')
@section('page-title', 'Job Openings')

@section('content')
<style>
    .job-icon-sq {
        width: 38px; height: 38px; border-radius: 10px;
        background: linear-gradient(135deg, rgba(229, 9, 20, 0.08) 0%, rgba(229, 9, 20, 0.02) 100%);
        border: 1px solid rgba(229, 9, 20, 0.15);
        color: #E50914; display: flex; align-items: center; justify-content: center;
        font-size: 16px; flex-shrink: 0;
    }
</style>

<div class="page-header">
    <h1>
        Job Openings
        <span class="count-pill">{{ $jobs->total() }} openings</span>
    </h1>
    <a href="{{ route('admin.jobs.create') }}" class="btn-brand">
        <i class="bi bi-plus-circle-fill"></i> Add New Opening
    </a>
</div>

<div class="table-card">
    <div class="table-responsive">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th style="width:60px;">#</th>
                    <th>Position Title</th>
                    <th>Experience</th>
                    <th>Employment Type</th>
                    <th>Salary Range</th>
                    <th>Work Location</th>
                    <th>Status</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($jobs as $job)
                <tr>
                    <td>
                        <span class="text-muted fw-bold" style="font-size:12px;">#{{ $job->id }}</span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center gap-3">
                            <div class="job-icon-sq">
                                <i class="bi bi-briefcase-fill"></i>
                            </div>
                            <div>
                                <div class="fw-bold text-dark" style="font-size:14px;">{{ $job->title }}</div>
                                <div class="text-muted d-flex align-items-center gap-1 mt-1" style="font-size:11px;">
                                    <span class="badge bg-light text-secondary border px-2 py-1" style="font-size:10.5px;border-radius:5px;">
                                        Icon: {{ $job->icon_slug }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="pill-tag">
                            <i class="bi bi-clock-history me-1 text-muted"></i>{{ $job->experience }}
                        </span>
                    </td>
                    <td>
                        <span class="pill-tag" style="background:#f0fdf4;color:#166534;border-color:#bbf7d0;">
                            <i class="bi bi-check2-circle me-1"></i>{{ $job->type }}
                        </span>
                    </td>
                    <td>
                        <span class="salary-tag">{{ $job->salary }}</span>
                    </td>
                    <td>
                        <span class="text-secondary d-flex align-items-center gap-1" style="font-size:13px;">
                            <i class="bi bi-geo-alt-fill text-danger" style="font-size:13px;"></i> {{ $job->location }}
                        </span>
                    </td>
                    <td>
                        @if($job->is_active)
                            <span class="badge-status badge-active">
                                <span class="badge-status-dot"></span> Active
                            </span>
                        @else
                            <span class="badge-status badge-inactive">
                                <span class="badge-status-dot"></span> Inactive
                            </span>
                        @endif
                    </td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.jobs.edit', $job) }}" class="btn-sm-icon btn-action-edit" title="Edit Opening">
                                <i class="bi bi-pencil-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.jobs.destroy', $job) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this job opening?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Opening">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="8" class="text-center text-muted py-5">
                        <i class="bi bi-inbox text-secondary" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                        No job openings found. Click "+ Add New Opening" to post one.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($jobs->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $jobs->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
