@extends('admin.layout.app')
@section('title', 'Contact Inquiries')
@section('page-title', 'Contact Inquiries')

@section('content')
<div class="page-header">
    <h1>
        Contact Inquiries
        <span class="count-pill">{{ $contacts->total() }} total</span>
    </h1>
    <a href="{{ route('admin.contacts.export') }}" class="btn btn-outline-secondary" style="border-radius:10px;font-weight:600;font-size:13px;height:42px;display:inline-flex;align-items:center;gap:6px;">
        <i class="bi bi-download"></i> Export CSV
    </a>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search name or email…" style="width:230px;">
            <select name="status" class="form-select" style="width:150px;">
                <option value="">All Statuses</option>
                <option value="new" {{ request('status')=='new'?'selected':'' }}>New</option>
                <option value="read" {{ request('status')=='read'?'selected':'' }}>Read</option>
                <option value="replied" {{ request('status')=='replied'?'selected':'' }}>Replied</option>
            </select>
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-funnel-fill"></i> Filter
            </button>
            @if(request()->hasAny(['search','status']))
                <a href="{{ route('admin.contacts.index') }}" class="btn btn-outline-secondary">
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
                    <th>Contact Name</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>Inquiry Message</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($contacts as $c)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $c->id }}</span></td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <div style="width:34px;height:34px;border-radius:10px;background:#f1f5f9;color:#334155;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">
                                {{ strtoupper(substr($c->first_name, 0, 1)) }}
                            </div>
                            <a href="{{ route('admin.contacts.show', $c) }}" style="font-weight:700;color:#0f172a;text-decoration:none;font-size:14px;">
                                {{ $c->first_name }} {{ $c->last_name }}
                            </a>
                        </div>
                    </td>
                    <td style="font-size:13px;color:#64748b;">{{ $c->email }}</td>
                    <td style="font-size:13px;color:#64748b;">{{ $c->phone ?? '—' }}</td>
                    <td style="max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;color:#64748b;">
                        {{ Str::limit($c->message, 55) }}
                    </td>
                    <td>
                        <span class="badge-status badge-{{ $c->status }}">
                            <span class="badge-status-dot"></span> {{ ucfirst($c->status) }}
                        </span>
                    </td>
                    <td style="font-size:12.5px;color:#64748b;white-space:nowrap;">{{ $c->created_at->format('d M Y') }}</td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.contacts.show', $c) }}" class="btn-sm-icon btn-action-view" title="View Details">
                                <i class="bi bi-eye-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.contacts.destroy', $c) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this contact?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Contact">
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
                        No contact inquiries found.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($contacts->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $contacts->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
