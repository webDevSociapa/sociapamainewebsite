@extends('admin.layout.app')
@section('title', 'Career Applications')
@section('page-title', 'Career Applications')

@section('content')
<div class="page-header">
    <h1>
        Career Applications
        <span class="count-pill">{{ $applications->total() }} applications</span>
    </h1>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <div class="input-group" style="width:230px;">
                <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search applicant or email…">
            </div>
            <select name="position" class="form-select" style="width:190px;">
                <option value="">All Positions</option>
                @foreach($positions as $pos)
                <option value="{{ $pos }}" {{ request('position')==$pos?'selected':'' }}>{{ $pos }}</option>
                @endforeach
            </select>
            <select name="status" class="form-select" style="width:150px;">
                <option value="">All Statuses</option>
                <option value="new" {{ request('status')=='new'?'selected':'' }}>New</option>
                <option value="reviewed" {{ request('status')=='reviewed'?'selected':'' }}>Reviewed</option>
                <option value="shortlisted" {{ request('status')=='shortlisted'?'selected':'' }}>Shortlisted</option>
                <option value="rejected" {{ request('status')=='rejected'?'selected':'' }}>Rejected</option>
            </select>
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-funnel-fill"></i> Filter
            </button>
            @if(request()->hasAny(['search','position','status']))
                <a href="{{ route('admin.career.index') }}" class="btn btn-outline-secondary">
                    <i class="bi bi-x-circle"></i> Clear
                </a>
            @endif
        </form>
    </div>

    <div class="table-responsive">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th style="width:55px;">#</th>
                    <th>Applicant</th>
                    <th>Position Applied</th>
                    <th>Experience</th>
                    <th>Resume</th>
                    <th>Review Status</th>
                    <th>Applied Date</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($applications as $a)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $a->id }}</span></td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <div style="width:34px;height:34px;border-radius:10px;background:#f1f5f9;color:#334155;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">
                                {{ strtoupper(substr($a->full_name, 0, 1)) }}
                            </div>
                            <div>
                                <a href="{{ route('admin.career.show', $a) }}" style="font-weight:700;color:#0f172a;text-decoration:none;font-size:14px;">
                                    {{ $a->full_name }}
                                </a>
                                <div style="font-size:12px;color:#64748b;">{{ $a->email }}</div>
                            </div>
                        </div>
                    </td>
                    <td><span class="pill-tag">{{ $a->position }}</span></td>
                    <td><span class="fw-semibold text-secondary" style="font-size:13px;">{{ $a->experience }}</span></td>
                    <td>
                        @if($a->resume_path)
                            <a href="{{ route('admin.career.resume', $a) }}" class="btn-sm-icon btn-action-edit" title="Download Resume">
                                <i class="bi bi-file-earmark-arrow-down-fill"></i>
                            </a>
                        @else
                            <span class="text-muted" style="font-size:12px;">None</span>
                        @endif
                    </td>
                    <td>
                        <span class="badge-status badge-{{ $a->status }}">
                            <span class="badge-status-dot"></span> {{ ucfirst($a->status) }}
                        </span>
                    </td>
                    <td style="font-size:12.5px;color:#64748b;white-space:nowrap;">{{ $a->created_at->format('d M Y') }}</td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.career.show', $a) }}" class="btn-sm-icon btn-action-view" title="View Application Details">
                                <i class="bi bi-eye-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.career.destroy', $a) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this application?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Application">
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
                        No job applications received yet.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($applications->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $applications->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
