@extends('admin.layout.app')
@section('title', 'Newsletter Subscribers')
@section('page-title', 'Newsletter Subscribers')

@section('content')
<div class="page-header">
    <h1>
        Newsletter Subscribers
        <span class="count-pill">{{ $subscribers->total() }} subscribers</span>
    </h1>
    <a href="{{ route('admin.newsletter.export') }}" class="btn btn-outline-secondary" style="border-radius:10px;font-weight:600;font-size:13px;height:42px;display:inline-flex;align-items:center;gap:6px;">
        <i class="bi bi-download"></i> Export CSV
    </a>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <input type="text" name="search" class="form-control" style="width:280px;" placeholder="Search subscriber email..." value="{{ request('search') }}">
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-search"></i> Search
            </button>
            @if(request('search'))
                <a href="{{ route('admin.newsletter.index') }}" class="btn btn-outline-secondary">
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
                    <th>Subscriber Email</th>
                    <th>Subscribed At</th>
                    <th>Status</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($subscribers as $sub)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $sub->id }}</span></td>
                    <td>
                        <div class="fw-bold text-dark" style="font-size:14px;">{{ $sub->email }}</div>
                    </td>
                    <td style="font-size:13px;color:#64748b;">
                        {{ $sub->subscribed_at ? \Carbon\Carbon::parse($sub->subscribed_at)->format('d M Y, h:i A') : $sub->created_at->format('d M Y, h:i A') }}
                    </td>
                    <td>
                        @if($sub->is_active)
                            <span class="badge-status badge-active">
                                <span class="badge-status-dot"></span> Active
                            </span>
                        @else
                            <span class="badge-status badge-rejected">
                                <span class="badge-status-dot"></span> Unsubscribed
                            </span>
                        @endif
                    </td>
                    <td class="text-end">
                        <form method="POST" action="{{ route('admin.newsletter.destroy', $sub) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to remove this subscriber?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Subscriber">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="5" class="text-center text-muted py-5">
                        <i class="bi bi-inbox text-secondary" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                        No subscribers found.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($subscribers->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $subscribers->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
