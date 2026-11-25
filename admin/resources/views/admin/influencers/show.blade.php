@extends('admin.layout.app')
@section('title', 'Influencer Detail')
@section('page-title', 'Influencer Detail')
@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.influencers.index') }}" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left"></i></a>
        <h1>{{ $influencer->full_name }}</h1>
    </div>
    <form method="POST" action="{{ route('admin.influencers.destroy', $influencer) }}" onsubmit="return confirm('Delete?')">
        @csrf @method('DELETE')
        <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash me-1"></i>Delete</button>
    </form>
</div>
<div class="detail-card">
    <div class="detail-row"><div class="detail-label">Full Name</div><div class="detail-value">{{ $influencer->full_name }}</div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:{{ $influencer->email }}">{{ $influencer->email }}</a></div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">{{ $influencer->phone }}</div></div>
    <div class="detail-row"><div class="detail-label">Instagram Handle</div><div class="detail-value">{{ $influencer->instagram_handle ?? '—' }}</div></div>
    <div class="detail-row"><div class="detail-label">Category</div><div class="detail-value">{{ $influencer->category ?? '—' }}</div></div>
    <div class="detail-row"><div class="detail-label">Submitted On</div><div class="detail-value">{{ $influencer->created_at->format('d M Y, h:i A') }}</div></div>
    @if($influencer->message)
    <div class="detail-row"><div class="detail-label">Message</div><div class="detail-value" style="white-space:pre-wrap">{{ $influencer->message }}</div></div>
    @endif
</div>
@endsection
