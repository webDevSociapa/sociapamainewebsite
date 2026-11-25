@extends('admin.layout.app')
@section('title', 'Add Blog Post')
@section('page-title', 'Add Blog Post')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-arrow-left"></i> Back
        </a>
        <h1>Create New Blog Post</h1>
    </div>
</div>

<div class="row">
    <div class="col-lg-10">
        <div class="form-card">
            <form method="POST" action="{{ route('admin.blogs.store') }}">
                @csrf

                <div class="row g-3 mb-3">
                    <div class="col-md-8">
                        <label class="form-label">Blog Title <span class="text-danger">*</span></label>
                        <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title') }}" required placeholder="e.g. 10 AI Tools Transforming Modern Marketing">
                        @error('title')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Slug (URL identifier)</label>
                        <input type="text" name="slug" class="form-control @error('slug') is-invalid @enderror" value="{{ old('slug') }}" placeholder="auto-generated from title">
                        <small class="text-muted">Leave blank to auto-generate</small>
                        @error('slug')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-4">
                        <label class="form-label">Category <span class="text-danger">*</span></label>
                        <select name="category" class="form-select @error('category') is-invalid @enderror" required>
                            <option value="AI_TRENDS" {{ old('category') === 'AI_TRENDS' ? 'selected' : '' }}>AI Trends</option>
                            <option value="ADS_PERFORMANCE" {{ old('category') === 'ADS_PERFORMANCE' ? 'selected' : '' }}>Ads & Performance</option>
                            <option value="BRAND_SEO" {{ old('category') === 'BRAND_SEO' ? 'selected' : '' }}>Brand & SEO</option>
                        </select>
                        @error('category')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Status <span class="text-danger">*</span></label>
                        <select name="status" class="form-select @error('status') is-invalid @enderror" required>
                            <option value="published" {{ old('status', 'published') === 'published' ? 'selected' : '' }}>Published</option>
                            <option value="draft" {{ old('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                        </select>
                        @error('status')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Author</label>
                        <input type="text" name="author" class="form-control" value="{{ old('author', 'Sociapa Team') }}">
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Read Time</label>
                        <input type="text" name="read_time" class="form-control" value="{{ old('read_time', '5 min read') }}">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Thumbnail Image Path / URL</label>
                        <input type="text" name="thumbnail" class="form-control" value="{{ old('thumbnail') }}" placeholder="/assets/images/blog/blog-1.jpg">
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Short Description / Excerpt <span class="text-danger">*</span></label>
                    <textarea name="description" rows="3" class="form-control @error('description') is-invalid @enderror" required placeholder="Brief summary of the article for blog listings...">{{ old('description') }}</textarea>
                    @error('description')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="mb-4">
                    <label class="form-label">Blog Detail Content (HTML)</label>
                    <textarea name="content_html" class="form-control html-editor" rows="12" placeholder="Full rich HTML content for the blog post...">{{ old('content_html') }}</textarea>
                    <small class="text-muted">You can write standard HTML elements (&lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;img&gt; etc.) or full rich content.</small>
                </div>

                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-brand px-4">Publish Blog</button>
                    <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-secondary px-3">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
