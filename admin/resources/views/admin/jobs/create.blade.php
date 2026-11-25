@extends('admin.layout.app')
@section('title', 'Add Job Opening')
@section('page-title', 'Add Job Opening')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-arrow-left"></i> Back
        </a>
        <h1>Create Job Opening</h1>
    </div>
</div>

<div class="row">
    <div class="col-lg-8">
        <div class="form-card">
            <form method="POST" action="{{ route('admin.jobs.store') }}">
                @csrf

                <div class="mb-3">
                    <label class="form-label">Job Title <span class="text-danger">*</span></label>
                    <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title') }}" required placeholder="e.g. Senior Social Media Strategist">
                    @error('title')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Experience Required <span class="text-danger">*</span></label>
                        <input type="text" name="experience" class="form-control @error('experience') is-invalid @enderror" value="{{ old('experience') }}" required placeholder="e.g. 2-4 Years">
                        @error('experience')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Job Type <span class="text-danger">*</span></label>
                        <select name="type" class="form-select @error('type') is-invalid @enderror" required>
                            <option value="Full Time" {{ old('type') === 'Full Time' ? 'selected' : '' }}>Full Time</option>
                            <option value="Part Time" {{ old('type') === 'Part Time' ? 'selected' : '' }}>Part Time</option>
                            <option value="Contract" {{ old('type') === 'Contract' ? 'selected' : '' }}>Contract</option>
                            <option value="Internship" {{ old('type') === 'Internship' ? 'selected' : '' }}>Internship</option>
                        </select>
                        @error('type')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Salary Range / Compensation <span class="text-danger">*</span></label>
                        <input type="text" name="salary" class="form-control @error('salary') is-invalid @enderror" value="{{ old('salary', 'Best in Industry') }}" required placeholder="e.g. ₹5 - 8 LPA or Best in Industry">
                        @error('salary')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Location <span class="text-danger">*</span></label>
                        <input type="text" name="location" class="form-control @error('location') is-invalid @enderror" value="{{ old('location', 'Noida / Delhi NCR') }}" required placeholder="e.g. Noida / Hybrid / Remote">
                        @error('location')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label">Icon Slug <span class="text-danger">*</span></label>
                        <select name="icon_slug" class="form-select @error('icon_slug') is-invalid @enderror" required>
                            <option value="briefcase" {{ old('icon_slug') === 'briefcase' ? 'selected' : '' }}>Briefcase (Management)</option>
                            <option value="megaphone" {{ old('icon_slug') === 'megaphone' ? 'selected' : '' }}>Megaphone (Marketing / Social)</option>
                            <option value="pencil" {{ old('icon_slug') === 'pencil' ? 'selected' : '' }}>Pencil / Palette (Design / UI)</option>
                            <option value="code" {{ old('icon_slug') === 'code' ? 'selected' : '' }}>Code (Development / Tech)</option>
                            <option value="camera" {{ old('icon_slug') === 'camera' ? 'selected' : '' }}>Camera (Video / Media)</option>
                            <option value="chart" {{ old('icon_slug') === 'chart' ? 'selected' : '' }}>Chart (SEO / Analytics)</option>
                        </select>
                        @error('icon_slug')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6 d-flex align-items-center pt-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" name="is_active" id="isActive" value="1" {{ old('is_active', true) ? 'checked' : '' }}>
                            <label class="form-check-label fw-semibold" for="isActive">Publish on Career page</label>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-brand px-4">Create Opening</button>
                    <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-secondary px-3">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
