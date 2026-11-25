@extends('admin.layout.app')
@section('title', 'Client Logos')
@section('page-title', 'Client Logos')

@section('content')
<div class="page-header">
    <h1>
        Client Logos
        <span class="count-pill">{{ $clients->total() }} clients</span>
    </h1>
    <a href="{{ route('admin.clients.create') }}" class="btn-brand">
        <i class="bi bi-plus-circle-fill"></i> Add Client Logo
    </a>
</div>

<div class="table-card">
    <div class="table-responsive">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th style="width:55px;">#</th>
                    <th style="width:110px;">Logo Preview</th>
                    <th>Client Brand Name</th>
                    <th>Asset Path</th>
                    <th>Sort Order</th>
                    <th>Status</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($clients as $client)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $client->id }}</span></td>
                    <td>
                        <div style="width:68px;height:44px;border-radius:10px;border:1.5px solid #e2e8f0;display:flex;align-items:center;justify-content:center;background:#fff;padding:6px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                            @if($client->img_path)
                                <img src="{{ $client->img_path }}" alt="{{ $client->alt_text }}" style="max-width:100%;max-height:100%;object-fit:contain;" onerror="this.onerror=null;this.parentElement.innerHTML='<i class=\'bi bi-image text-muted\'></i>';">
                            @else
                                <i class="bi bi-image text-muted"></i>
                            @endif
                        </div>
                    </td>
                    <td><div class="fw-bold text-dark" style="font-size:14px;">{{ $client->alt_text }}</div></td>
                    <td><code style="font-size:12px;background:#f1f5f9;color:#475569;padding:3px 8px;border-radius:6px;">{{ Str::limit($client->img_path, 40) }}</code></td>
                    <td><span class="pill-tag">{{ $client->sort_order }}</span></td>
                    <td>
                        @if($client->is_active)
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
                            <a href="{{ route('admin.clients.edit', $client) }}" class="btn-sm-icon btn-action-edit" title="Edit Client">
                                <i class="bi bi-pencil-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.clients.destroy', $client) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to remove this client logo?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Client">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" class="text-center text-muted py-5">
                        <i class="bi bi-building text-secondary" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                        No client logos added yet.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($clients->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $clients->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
