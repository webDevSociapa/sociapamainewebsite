@extends('admin.layout.app')
@section('title', 'Audit Request Detail')
@section('page-title', 'Audit Request Detail')
@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.audit.index') }}" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left"></i></a>
        <h1>{{ $audit->full_name }}</h1>
    </div>
    <div class="d-flex gap-2">
        <form method="POST" action="{{ route('admin.audit.status', $audit) }}">
            @csrf @method('PATCH')
            <select name="status" onchange="this.form.submit()" class="form-select form-select-sm" style="width:150px">
                <option value="pending" {{ $audit->status=='pending'?'selected':'' }}>Pending</option>
                <option value="in_progress" {{ $audit->status=='in_progress'?'selected':'' }}>In Progress</option>
                <option value="completed" {{ $audit->status=='completed'?'selected':'' }}>Completed</option>
            </select>
        </form>
        <form method="POST" action="{{ route('admin.audit.destroy', $audit) }}" onsubmit="return confirm('Delete?')">
            @csrf @method('DELETE')
            <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash me-1"></i>Delete</button>
        </form>
    </div>
</div>
<div class="detail-card">
    <div class="detail-row"><div class="detail-label">Full Name</div><div class="detail-value">{{ $audit->full_name }}</div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:{{ $audit->email }}">{{ $audit->email }}</a></div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">{{ $audit->phone ?? '—' }}</div></div>
    <div class="detail-row"><div class="detail-label">Website URL</div><div class="detail-value"><a href="{{ $audit->website_url }}" target="_blank">{{ $audit->website_url }}</a></div></div>
    <div class="detail-row"><div class="detail-label">Audit Type (Goals)</div><div class="detail-value">{{ $audit->goals }}</div></div>
    @if(!empty($audit->file_path))
    <div class="detail-row">
        <div class="detail-label">Attached Document / PDF</div>
        <div class="detail-value">
            <a href="{{ asset('storage/' . $audit->file_path) }}" target="_blank" class="btn btn-sm btn-outline-danger">
                <i class="bi bi-file-earmark-pdf me-1"></i>View / Download PDF
            </a>
        </div>
    </div>
    @endif
    <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-{{ $audit->status }}">{{ ucfirst(str_replace('_',' ',$audit->status)) }}</span></div></div>
    <div class="detail-row"><div class="detail-label">Submitted On</div><div class="detail-value">{{ $audit->created_at->format('d M Y, h:i A') }}</div></div>
</div>
@endsection
