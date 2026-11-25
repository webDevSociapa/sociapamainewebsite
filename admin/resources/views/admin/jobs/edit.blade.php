@extends('admin.layout.app')
@section('title', 'Edit Job Opening')
@section('page-title', 'Edit Job Opening')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-arrow-left"></i> Back
        </a>
        <h1>Edit Job Opening</h1>
    </div>
</div>

<div class="row">
    <div class="col-lg-8">
        <div class="form-card">
            <form method="POST" action="{{ route('admin.jobs.update', $job) }}">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label class="form-label">Job Title <span class="text-danger">*</span></label>
                    <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title', $job->title) }}" required>
                    @error('title')<div class="invalid-feedback">{{ $message }}</div>@enderror
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Experience Required <span class="text-danger">*</span></label>
                        <input type="text" name="experience" class="form-control @error('experience') is-invalid @enderror" value="{{ old('experience', $job->experience) }}" required>
                        @error('experience')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Job Type <span class="text-danger">*</span></label>
                        <select name="type" class="form-select @error('type') is-invalid @enderror" required>
                            <option value="Full Time" {{ old('type', $job->type) === 'Full Time' ? 'selected' : '' }}>Full Time</option>
                            <option value="Part Time" {{ old('type', $job->type) === 'Part Time' ? 'selected' : '' }}>Part Time</option>
                            <option value="Contract" {{ old('type', $job->type) === 'Contract' ? 'selected' : '' }}>Contract</option>
                            <option value="Internship" {{ old('type', $job->type) === 'Internship' ? 'selected' : '' }}>Internship</option>
                        </select>
                        @error('type')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Salary Range / Compensation <span class="text-danger">*</span></label>
                        <input type="text" name="salary" class="form-control @error('salary') is-invalid @enderror" value="{{ old('salary', $job->salary) }}" required>
                        @error('salary')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Location <span class="text-danger">*</span></label>
                        <input type="text" name="location" class="form-control @error('location') is-invalid @enderror" value="{{ old('location', $job->location) }}" required>
                        @error('location')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label">Icon Slug <span class="text-danger">*</span></label>
                        <select name="icon_slug" class="form-select @error('icon_slug') is-invalid @enderror" required>
                            <option value="briefcase" {{ old('icon_slug', $job->icon_slug) === 'briefcase' ? 'selected' : '' }}>Briefcase (Management)</option>
                            <option value="megaphone" {{ old('icon_slug', $job->icon_slug) === 'megaphone' ? 'selected' : '' }}>Megaphone (Marketing / Social)</option>
                            <option value="pencil" {{ old('icon_slug', $job->icon_slug) === 'pencil' ? 'selected' : '' }}>Pencil / Palette (Design / UI)</option>
                            <option value="code" {{ old('icon_slug', $job->icon_slug) === 'code' ? 'selected' : '' }}>Code (Development / Tech)</option>
                            <option value="camera" {{ old('icon_slug', $job->icon_slug) === 'camera' ? 'selected' : '' }}>Camera (Video / Media)</option>
                            <option value="chart" {{ old('icon_slug', $job->icon_slug) === 'chart' ? 'selected' : '' }}>Chart (SEO / Analytics)</option>
                        </select>
                        @error('icon_slug')<div class="invalid-feedback">{{ $message }}</div>@enderror
                    </div>
                    <div class="col-md-6 d-flex align-items-center pt-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" name="is_active" id="isActive" value="1" {{ old('is_active', $job->is_active) ? 'checked' : '' }}>
                            <label class="form-check-label fw-semibold" for="isActive">Publish on Career page</label>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-brand px-4">Update Opening</button>
                    <a href="{{ route('admin.jobs.index') }}" class="btn btn-outline-secondary px-3">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
