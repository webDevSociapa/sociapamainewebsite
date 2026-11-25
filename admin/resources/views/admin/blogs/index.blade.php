@extends('admin.layout.app')
@section('title', 'Blog Posts')
@section('page-title', 'Blog Posts')

@section('content')
<div class="page-header">
    <h1>Blog Posts <span class="count-pill">{{ $blogs->total() }} posts</span></h1>
    <a href="{{ route('admin.blogs.create') }}" class="btn-brand">
        <i class="bi bi-plus-circle-fill"></i> Add New Blog
    </a>
</div>

<div class="table-card">
    <div class="table-header">
        <form method="GET" class="filter-bar d-flex align-items-center gap-2 flex-wrap">
            <input type="text" name="search" class="form-control" style="width:240px;" placeholder="Search title or slug..." value="{{ request('search') }}">
            <select name="status" class="form-select" style="width:150px;" onchange="this.form.submit()">
                <option value="">All Statuses</option>
                <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
                <option value="draft" {{ request('status') === 'draft' ? 'selected' : '' }}>Draft</option>
            </select>
            <button type="submit" class="btn btn-brand px-3 py-2" style="font-size:13px;">Filter</button>
            @if(request('search') || request('status'))
                <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary btn-sm px-3" style="border-radius:8px;">Clear</a>
            @endif
        </form>
    </div>

    <div class="table-responsive">
        <table class="table mb-0 align-middle">
            <thead>
                <tr>
                    <th style="width:60px;">#</th>
                    <th>Article Title & Slug</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Published Date</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($blogs as $blog)
                <tr>
                    <td><span class="text-muted fw-bold" style="font-size:12px;">#{{ $blog->id }}</span></td>
                    <td>
                        <div class="fw-bold text-dark" style="font-size:14px;">{{ $blog->title }}</div>
                        <small class="text-muted">/blog/{{ $blog->slug }}</small>
                    </td>
                    <td>
                        <span class="pill-tag">{{ str_replace('_', ' ', $blog->category) }}</span>
                    </td>
                    <td>
                        <span class="fw-semibold text-secondary" style="font-size:13px;">{{ $blog->author ?? 'Sociapa Team' }}</span>
                    </td>
                    <td>
                        @if($blog->status === 'published')
                            <span class="badge-status badge-published">
                                <span class="badge-status-dot"></span> Published
                            </span>
                        @else
                            <span class="badge-status badge-draft">
                                <span class="badge-status-dot"></span> Draft
                            </span>
                        @endif
                    </td>
                    <td style="color:#64748b;font-size:13px;">{{ $blog->created_at->format('d M Y') }}</td>
                    <td class="text-end">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <a href="{{ route('admin.blogs.edit', $blog) }}" class="btn-sm-icon btn-action-edit" title="Edit Blog">
                                <i class="bi bi-pencil-fill"></i>
                            </a>
                            <form method="POST" action="{{ route('admin.blogs.destroy', $blog) }}" style="display:inline" onsubmit="return confirm('Are you sure you want to delete this blog post?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn-sm-icon btn-action-delete" title="Delete Blog">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" class="text-center text-muted py-5">
                        <i class="bi bi-file-earmark-text text-secondary" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                        No blog posts found.
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($blogs->hasPages())
    <div class="p-3 border-top d-flex justify-content-end bg-light">
        {{ $blogs->links('pagination::bootstrap-5') }}
    </div>
    @endif
</div>
@endsection
