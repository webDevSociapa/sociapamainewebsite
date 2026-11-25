@extends('admin.layout.app')
@section('title', 'Application Detail')
@section('page-title', 'Application Detail')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.career.index') }}" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left"></i></a>
        <h1>{{ $application->full_name }}</h1>
    </div>
    <div class="d-flex gap-2">
        <form method="POST" action="{{ route('admin.career.status', $application) }}">
            @csrf @method('PATCH')
            <select name="status" onchange="this.form.submit()" class="form-select form-select-sm" style="width:150px">
                <option value="new" {{ $application->status=='new'?'selected':'' }}>New</option>
                <option value="reviewed" {{ $application->status=='reviewed'?'selected':'' }}>Reviewed</option>
                <option value="shortlisted" {{ $application->status=='shortlisted'?'selected':'' }}>Shortlisted</option>
                <option value="rejected" {{ $application->status=='rejected'?'selected':'' }}>Rejected</option>
            </select>
        </form>
        @if($application->resume_path)
        <a href="{{ route('admin.career.resume', $application) }}" class="btn btn-brand btn-sm"><i class="bi bi-download me-1"></i>Download Resume</a>
        @endif
        <form method="POST" action="{{ route('admin.career.destroy', $application) }}" onsubmit="return confirm('Delete?')">
            @csrf @method('DELETE')
            <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash me-1"></i>Delete</button>
        </form>
    </div>
</div>

<div class="detail-card">
    <div class="detail-row"><div class="detail-label">Full Name</div><div class="detail-value">{{ $application->full_name }}</div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:{{ $application->email }}">{{ $application->email }}</a></div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">{{ $application->phone }}</div></div>
    <div class="detail-row"><div class="detail-label">Position Applied</div><div class="detail-value"><strong>{{ $application->position }}</strong></div></div>
    <div class="detail-row"><div class="detail-label">Experience</div><div class="detail-value">{{ $application->experience }}</div></div>
    <div class="detail-row"><div class="detail-label">Portfolio / LinkedIn</div><div class="detail-value">{{ $application->portfolio_url ? '<a href="'.$application->portfolio_url.'" target="_blank">'.$application->portfolio_url.'</a>' : '—' }}</div></div>
    <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-{{ $application->status }}">{{ ucfirst($application->status) }}</span></div></div>
    <div class="detail-row"><div class="detail-label">Submitted On</div><div class="detail-value">{{ $application->created_at->format('d M Y, h:i A') }}</div></div>
    <div class="detail-row">
        <div class="detail-label">Resume</div>
        <div class="detail-value">
            @if($application->resume_path)
                <a href="{{ route('admin.career.resume', $application) }}" class="btn btn-brand btn-sm"><i class="bi bi-file-earmark-pdf me-1"></i>Download Resume</a>
            @else
                <span class="text-muted">No resume uploaded</span>
            @endif
        </div>
    </div>
</div>
@endsection
