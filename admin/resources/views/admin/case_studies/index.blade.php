@extends('admin.layout.app')
@section('title', 'Case Study Leads')
@section('page-title', 'Case Study Leads')

@section('content')
<div class="page-header">
    <h1>
        Case Study Downloads
        <span class="count-pill">{{ $leads->total() }} total</span>
    </h1>
    <a href="{{ route('admin.case_studies.export') }}" class="btn btn-outline-secondary" style="border-radius:10px;font-weight:600;font-size:13px;height:42px;display:inline-flex;align-items:center;gap:6px;">
        <i class="bi bi-download"></i> Export CSV
    </a>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search name, phone, email..." style="width:230px;">
            <select name="status" class="form-select" style="width:150px;">
                <option value="">All Statuses</option>
                <option value="new" {{ request('status')=='new'?'selected':'' }}>New</option>
                <option value="contacted" {{ request('status')=='contacted'?'selected':'' }}>Contacted</option>
                <option value="closed" {{ request('status')=='closed'?'selected':'' }}>Closed</option>
            </select>
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-funnel-fill"></i> Filter
            </button>
            @if(request()->hasAny(['search','status']))
                <a href="{{ route('admin.case_studies.index') }}" class="btn btn-outline-secondary">
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
                    <th>User Name</th>
                    <th>Mobile</th>
                    <th>Email Address</th>
                    <th>Address / City</th>
                    <th>Case Study</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($leads as $l)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $l->id }}</span></td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <div style="width:34px;height:34px;border-radius:10px;background:#fee2e2;color:#dc2626;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">
                                {{ strtoupper(substr($l->name, 0, 1)) }}
                            </div>
                            <span style="font-weight:700;color:#0f172a;font-size:14px;">{{ $l->name }}</span>
                        </div>
                    </td>
                    <td>
                        <a href="tel:{{ $l->phone }}" style="color:#0f172a;text-decoration:none;font-weight:600;font-size:13.5px;">
                            <i class="bi bi-telephone text-muted me-1"></i>{{ $l->phone }}
                        </a>
                    </td>
                    <td>
                        <a href="mailto:{{ $l->email }}" style="color:#0f172a;text-decoration:none;font-size:13.5px;">
                            <i class="bi bi-envelope text-muted me-1"></i>{{ $l->email }}
                        </a>
                    </td>
                    <td>
                        <span style="color:#475569;font-size:13px;">{{ $l->address }}</span>
                    </td>
                    <td>
                        <span class="badge bg-light text-dark border">
                            {{ $l->case_study_title ?? 'General' }}
                        </span>
                    </td>
                    <td>
                        <form method="POST" action="{{ route('admin.case_studies.status', $l) }}" style="display:inline;">
                            @csrf
                            @method('PATCH')
                            <select name="status" onchange="this.form.submit()" class="form-select form-select-sm" style="width:110px;font-size:12px;">
                                <option value="new" {{ $l->status == 'new' ? 'selected' : '' }}>New</option>
                                <option value="contacted" {{ $l->status == 'contacted' ? 'selected' : '' }}>Contacted</option>
                                <option value="closed" {{ $l->status == 'closed' ? 'selected' : '' }}>Closed</option>
                            </select>
                        </form>
                    </td>
                    <td>
                        <div style="font-size:12.5px;color:#64748b;font-weight:600;">
                            {{ $l->created_at->format('M d, Y') }}
                        </div>
                        <div style="font-size:11px;color:#94a3b8;">
                            {{ $l->created_at->format('h:i A') }}
                        </div>
                    </td>
                    <td class="text-end">
                        <form method="POST" action="{{ route('admin.case_studies.destroy', $l) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this lead?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete">
                                <i class="bi bi-trash"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="9" class="text-center py-5">
                        <div style="color:#94a3b8;font-size:32px;"><i class="bi bi-inbox"></i></div>
                        <p class="text-muted mt-2 mb-0">No case study leads found</p>
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($leads->hasPages())
    <div class="px-4 py-3 border-top d-flex justify-content-end">
        {{ $leads->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
