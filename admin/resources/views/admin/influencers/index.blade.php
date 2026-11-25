@extends('admin.layout.app')
@section('title', 'Influencer Registrations')
@section('page-title', 'Influencer Registrations')

@section('content')
<div class="page-header">
    <h1>
        Influencer Registrations
        <span class="count-pill">{{ $influencers->total() }} total</span>
    </h1>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar">
            <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search name, email or Instagram…" style="width:250px;">
            @if($categories->count())
            <select name="category" class="form-select" style="width:170px;">
                <option value="">All Categories</option>
                @foreach($categories as $cat)
                <option value="{{ $cat }}" {{ request('category')==$cat?'selected':'' }}>{{ $cat }}</option>
                @endforeach
            </select>
            @endif
            <button type="submit" class="btn btn-brand">
                <i class="bi bi-funnel-fill"></i> Filter
            </button>
            @if(request()->hasAny(['search','category']))
                <a href="{{ route('admin.influencers.index') }}" class="btn btn-outline-secondary">
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
                    <th>Influencer Name</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>Instagram Handle</th>
                    <th>Category</th>
                    <th>Registered</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($influencers as $inf)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $inf->id }}</span></td>
                    <td>
                        <a href="{{ route('admin.influencers.show', $inf) }}" style="font-weight:700;color:#0f172a;text-decoration:none;font-size:14px;">
                            {{ $inf->full_name }}
                        </a>
                    </td>
                    <td style="font-size:13px;color:#64748b;">{{ $inf->email }}</td>
                    <td style="font-size:13px;color:#64748b;">{{ $inf->phone }}</td>
                    <td>
                        @if($inf->instagram_handle)
                            <span class="text-danger fw-semibold d-inline-flex align-items-center gap-1" style="font-size:13px;">
                                <i class="bi bi-instagram"></i> {{ $inf->instagram_handle }}
                            </span>
                        @else
                            <span class="text-muted" style="font-size:12px;">—</span>
                        @endif
                    </td>
                    <td><span class="pill-tag">{{ $inf->category ?? 'General' }}</span></td>
                    <td style="font-size:12.5px;color:#64748b;white-space:nowrap;">{{ $inf->created_at->format('d M Y') }}</td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.influencers.show', $inf) }}" class="btn-sm-icon btn-action-view" title="View Profile">
                                <i class="bi bi-eye-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.influencers.destroy', $inf) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this influencer?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Influencer">
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
                        No influencer registrations found.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($influencers->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $influencers->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
