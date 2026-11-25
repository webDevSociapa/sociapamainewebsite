@extends('admin.layout.app')
@section('title', 'Audit Requests')
@section('page-title', 'Audit Requests')

@section('content')
<div class="page-header">
    <h1>
        Audit Requests
        <span class="count-pill">{{ $audits->total() }} total</span>
    </h1>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search name, email or website…" style="width:240px;">
            <select name="goals" class="form-select" style="width:150px;">
                <option value="">All Audit Types</option>
                @foreach(['SEO','UI/UX','Social Media','Speed','All'] as $t)
                <option value="{{ $t }}" {{ request('goals')==$t?'selected':'' }}>{{ $t }}</option>
                @endforeach
            </select>
            <select name="status" class="form-select" style="width:150px;">
                <option value="">All Statuses</option>
                <option value="pending" {{ request('status')=='pending'?'selected':'' }}>Pending</option>
                <option value="in_progress" {{ request('status')=='in_progress'?'selected':'' }}>In Progress</option>
                <option value="completed" {{ request('status')=='completed'?'selected':'' }}>Completed</option>
            </select>
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-funnel-fill"></i> Filter
            </button>
            @if(request()->hasAny(['search','goals','status']))
                <a href="{{ route('admin.audit.index') }}" class="btn btn-outline-secondary">
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
                    <th>Client Name</th>
                    <th>Email Address</th>
                    <th>Website URL</th>
                    <th>Audit Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($audits as $a)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $a->id }}</span></td>
                    <td>
                        <a href="{{ route('admin.audit.show', $a) }}" style="font-weight:700;color:#0f172a;text-decoration:none;font-size:14px;">
                            {{ $a->full_name }}
                        </a>
                    </td>
                    <td style="font-size:13px;color:#64748b;">{{ $a->email }}</td>
                    <td style="font-size:13px;">
                        <a href="{{ $a->website_url }}" target="_blank" style="color:#2563eb;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:4px;">
                            {{ Str::limit($a->website_url, 28) }} <i class="bi bi-box-arrow-up-right" style="font-size:11px;"></i>
                        </a>
                    </td>
                    <td><span class="pill-tag">{{ $a->goals }}</span></td>
                    <td>
                        <span class="badge-status badge-{{ $a->status }}">
                            <span class="badge-status-dot"></span> {{ ucfirst(str_replace('_',' ',$a->status)) }}
                        </span>
                    </td>
                    <td style="font-size:12.5px;color:#64748b;white-space:nowrap;">{{ $a->created_at->format('d M Y') }}</td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.audit.show', $a) }}" class="btn-sm-icon btn-action-view" title="View Audit Details">
                                <i class="bi bi-eye-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.audit.destroy', $a) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this audit request?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Audit Request">
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
                        No audit requests found.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($audits->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $audits->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
