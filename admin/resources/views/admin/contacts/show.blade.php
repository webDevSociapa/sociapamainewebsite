@extends('admin.layout.app')
@section('title', 'Contact Detail')
@section('page-title', 'Contact Detail')

@section('content')
<div class="page-header">
    <div class="d-flex align-items-center gap-3">
        <a href="{{ route('admin.contacts.index') }}" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left"></i></a>
        <h1>Contact: {{ $contact->first_name }} {{ $contact->last_name }}</h1>
    </div>
    <div class="d-flex gap-2">
        <form method="POST" action="{{ route('admin.contacts.status', $contact) }}">
            @csrf @method('PATCH')8
            <select name="status" onchange="this.form.submit()" class="form-select form-select-sm" style="width:140px">
                <option value="new" {{ $contact->status=='new'?'selected':'' }}>New</option>
                <option value="read" {{ $contact->status=='read'?'selected':'' }}>Read</option>
                <option value="replied" {{ $contact->status=='replied'?'selected':'' }}>Replied</option>
            </select>
        </form>
        <form method="POST" action="{{ route('admin.contacts.destroy', $contact) }}" onsubmit="return confirm('Delete?')">
            @csrf @method('DELETE')
            <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash me-1"></i>Delete</button>
        </form>
    </div>
</div>

<div class="detail-card">
    <div class="detail-row"><div class="detail-label">Full Name</div><div class="detail-value">{{ $contact->first_name }} {{ $contact->last_name }}</div></div>
    <div class="detail-row"><div class="detail-label">Email Address</div><div class="detail-value"><a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a></div></div>
    <div class="detail-row"><div class="detail-label">Phone Number</div><div class="detail-value">{{ $contact->phone ?? '—' }}</div></div>
    <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-{{ $contact->status }}">{{ ucfirst($contact->status) }}</span></div></div>
    <div class="detail-row"><div class="detail-label">Submitted On</div><div class="detail-value">{{ $contact->created_at->format('d M Y, h:i A') }}</div></div>
    <div class="detail-row">
        <div class="detail-label">Message</div>
        <div class="detail-value" style="line-height:1.7;white-space:pre-wrap">{{ $contact->message }}</div>
    </div>
</div>
@endsection
