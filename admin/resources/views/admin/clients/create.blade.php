@extends('admin.layout.app')
@section('title', 'Add Client Logo')
@section('page-title', 'Add Client Logo')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.clients.index') }}" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-arrow-left"></i> Back
        </a>
        <h1>Add Client Logo</h1>
    </div>
</div>

<div class="row">
    <div class="col-lg-7">
        <div class="form-card">
            <form method="POST" action="{{ route('admin.clients.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label class="form-label">Client Name / Alt Text <span class="text-danger">*</span></label>
                    <input type="text" name="alt_text" class="form-control @error('alt_text') is-invalid @enderror" value="{{ old('alt_text') }}" required placeholder="e.g. Reliance, Haldirams, etc.">
                    @error('alt_text')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Upload Logo File</label>
                    <input type="file" name="logo" class="form-control @error('logo') is-invalid @enderror" accept="image/*">
                    <small class="text-muted">Supports PNG, SVG, JPG, WebP (max 2MB)</small>
                    @error('logo')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Or External Image URL / Asset Path</label>
                    <input type="text" name="img_path" class="form-control @error('img_path') is-invalid @enderror" value="{{ old('img_path') }}" placeholder="e.g. /assets/images/clients/brand.png">
                    <small class="text-muted">Used if no file is uploaded above</small>
                    @error('img_path')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label">Sort Order</label>
                        <input type="number" name="sort_order" class="form-control" value="{{ old('sort_order', 0) }}">
                    </div>
                    <div class="col-md-6 d-flex align-items-center pt-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" name="is_active" id="isActive" value="1" {{ old('is_active', true) ? 'checked' : '' }}>
                            <label class="form-check-label fw-semibold" for="isActive">Display on Website</label>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-brand px-4">Add Client</button>
                    <a href="{{ route('admin.clients.index') }}" class="btn btn-outline-secondary px-3">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
