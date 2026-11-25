@extends('admin.layout.app')
@section('title', 'Dashboard')
@section('page-title', 'Dashboard')

@section('content')
<style>
    .welcome-card {
        background: linear-gradient(135deg, #ffffff 0%, #fdf2f2 100%);
        border: 1px solid rgba(229, 9, 20, 0.15);
        border-radius: 18px; padding: 26px 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        margin-bottom: 28px; position: relative; overflow: hidden;
    }
    .welcome-card::after {
        content: ''; position: absolute; right: -20px; top: -30px;
        width: 160px; height: 160px; border-radius: 50%;
        background: radial-gradient(circle, rgba(229, 9, 20, 0.08) 0%, transparent 70%);
        pointer-events: none;
    }
    .welcome-title {
        font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.4px;
    }
    .welcome-sub {
        font-size: 13.5px; color: #64748b; margin-bottom: 0; font-weight: 500;
    }
    .user-avatar-initial {
        width: 34px; height: 34px; border-radius: 10px;
        background: #f1f5f9; color: #334155; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        font-size: 13px; flex-shrink: 0;
    }
</style>

<!-- WELCOME BANNER -->
<div class="welcome-card">
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div>
            <h2 class="welcome-title">Welcome back, {{ auth('admin')->user()->name ?? 'Administrator' }} 👋</h2>
            <p class="welcome-sub">Here is your live overview of submissions, applications, and website content.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
            <span class="badge bg-white text-dark shadow-sm px-3 py-2 border" style="border-radius:10px;font-size:12.5px;font-weight:600;">
                <i class="bi bi-calendar-event me-1 text-danger"></i> {{ now()->format('l, d M Y') }}
            </span>
        </div>
    </div>
</div>

<!-- STATS GRID -->
<div class="row g-3 mb-4">
    @php
    $statItems = [
        ['label'=>'Total Contacts', 'value'=>$stats['contacts'], 'new'=>$newContacts, 'icon'=>'bi-envelope-fill', 'color'=>'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 'icolor'=>'#1d4ed8', 'route'=>'admin.contacts.index'],
        ['label'=>'Career Applications', 'value'=>$stats['career'], 'new'=>$newCareer, 'icon'=>'bi-briefcase-fill', 'color'=>'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 'icolor'=>'#b45309', 'route'=>'admin.career.index'],
        ['label'=>'Audit Requests', 'value'=>$stats['audit'], 'new'=>$pendingAudit, 'icon'=>'bi-search', 'color'=>'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', 'icolor'=>'#7c3aed', 'route'=>'admin.audit.index'],
        ['label'=>'Influencer Submissions', 'value'=>$stats['influencers'], 'new'=>0, 'icon'=>'bi-people-fill', 'color'=>'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', 'icolor'=>'#be185d', 'route'=>'admin.influencers.index'],
        ['label'=>'Newsletter Subscribers', 'value'=>$stats['newsletter'], 'new'=>0, 'icon'=>'bi-newspaper', 'color'=>'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', 'icolor'=>'#15803d', 'route'=>'admin.newsletter.index'],
    ];
    @endphp

    @foreach($statItems as $s)
    <div class="col-sm-6 col-md-4 col-xl">
        <a href="{{ route($s['route']) }}" style="text-decoration:none">
        <div class="stat-card h-100">
            <div class="d-flex align-items-start justify-content-between mb-2">
                <div class="stat-icon" style="background:{{ $s['color'] }}; color:{{ $s['icolor'] }}">
                    <i class="bi {{ $s['icon'] }}"></i>
                </div>
                @if($s['new'] > 0)
                <span class="badge-status badge-new">
                    <span class="badge-status-dot"></span> {{ $s['new'] }} New
                </span>
                @endif
            </div>
            <div class="stat-num">{{ number_format($s['value']) }}</div>
            <div class="stat-label">{{ $s['label'] }}</div>
        </div>
        </a>
    </div>
    @endforeach
</div>

<!-- RECENT ENTRIES GRID -->
<div class="row g-4">
    <!-- Recent Contacts -->
    <div class="col-lg-6">
        <div class="table-card h-100">
            <div class="table-header">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-envelope-check-fill text-primary"></i>
                    <strong style="font-size:14px;color:#0f172a;">Recent Contact Inquiries</strong>
                </div>
                <a href="{{ route('admin.contacts.index') }}" class="btn btn-sm btn-outline-secondary" style="font-size:12px;border-radius:8px;">View All</a>
            </div>
            <div class="table-responsive">
                <table class="table mb-0 align-middle">
                    <thead><tr><th>Contact</th><th>Status</th><th>Submitted</th></tr></thead>
                    <tbody>
                        @forelse($recentContacts as $c)
                        <tr>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="user-avatar-initial">{{ strtoupper(substr($c->first_name, 0, 1)) }}</div>
                                    <div>
                                        <a href="{{ route('admin.contacts.show', $c) }}" style="color:#0f172a;text-decoration:none;font-weight:700;font-size:13.5px">{{ $c->first_name }} {{ $c->last_name }}</a>
                                        <div style="color:#64748b;font-size:12px">{{ $c->email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="badge-status badge-{{ $c->status }}">
                                    <span class="badge-status-dot"></span> {{ ucfirst($c->status) }}
                                </span>
                            </td>
                            <td style="color:#94a3b8;font-size:12px;white-space:nowrap">{{ $c->created_at->diffForHumans() }}</td>
                        </tr>
                        @empty
                        <tr><td colspan="3" class="text-center text-muted py-4">No recent contacts</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Recent Applications -->
    <div class="col-lg-6">
        <div class="table-card h-100">
            <div class="table-header">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-briefcase-fill text-warning"></i>
                    <strong style="font-size:14px;color:#0f172a;">Recent Career Applications</strong>
                </div>
                <a href="{{ route('admin.career.index') }}" class="btn btn-sm btn-outline-secondary" style="font-size:12px;border-radius:8px;">View All</a>
            </div>
            <div class="table-responsive">
                <table class="table mb-0 align-middle">
                    <thead><tr><th>Applicant</th><th>Position</th><th>Status</th><th>Submitted</th></tr></thead>
                    <tbody>
                        @forelse($recentCareer as $c)
                        <tr>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="user-avatar-initial">{{ strtoupper(substr($c->full_name, 0, 1)) }}</div>
                                    <div>
                                        <a href="{{ route('admin.career.show', $c) }}" style="color:#0f172a;text-decoration:none;font-weight:700;font-size:13.5px">{{ $c->full_name }}</a>
                                        <div style="color:#64748b;font-size:12px">{{ $c->email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td><span class="pill-tag">{{ $c->position }}</span></td>
                            <td>
                                <span class="badge-status badge-{{ $c->status }}">
                                    <span class="badge-status-dot"></span> {{ ucfirst($c->status) }}
                                </span>
                            </td>
                            <td style="color:#94a3b8;font-size:12px;white-space:nowrap">{{ $c->created_at->diffForHumans() }}</td>
                        </tr>
                        @empty
                        <tr><td colspan="4" class="text-center text-muted py-4">No recent applications</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Recent Audit Requests -->
    <div class="col-lg-6">
        <div class="table-card h-100">
            <div class="table-header">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-search text-purple" style="color:#7c3aed"></i>
                    <strong style="font-size:14px;color:#0f172a;">Recent Website Audit Requests</strong>
                </div>
                <a href="{{ route('admin.audit.index') }}" class="btn btn-sm btn-outline-secondary" style="font-size:12px;border-radius:8px;">View All</a>
            </div>
            <div class="table-responsive">
                <table class="table mb-0 align-middle">
                    <thead><tr><th>Client / Website</th><th>Status</th><th>Submitted</th></tr></thead>
                    <tbody>
                        @forelse($recentAudit as $a)
                        <tr>
                            <td>
                                <a href="{{ route('admin.audit.show', $a) }}" style="color:#0f172a;text-decoration:none;font-weight:700;font-size:13.5px">{{ $a->full_name }}</a>
                                <div style="color:#64748b;font-size:12px">{{ $a->website_url ?? $a->email }}</div>
                            </td>
                            <td>
                                <span class="badge-status badge-{{ $a->status }}">
                                    <span class="badge-status-dot"></span> {{ ucfirst(str_replace('_',' ',$a->status)) }}
                                </span>
                            </td>
                            <td style="color:#94a3b8;font-size:12px;white-space:nowrap">{{ $a->created_at->diffForHumans() }}</td>
                        </tr>
                        @empty
                        <tr><td colspan="3" class="text-center text-muted py-4">No recent audit requests</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Recent Influencers -->
    <div class="col-lg-6">
        <div class="table-card h-100">
            <div class="table-header">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-instagram text-danger"></i>
                    <strong style="font-size:14px;color:#0f172a;">Recent Influencer Registrations</strong>
                </div>
                <a href="{{ route('admin.influencers.index') }}" class="btn btn-sm btn-outline-secondary" style="font-size:12px;border-radius:8px;">View All</a>
            </div>
            <div class="table-responsive">
                <table class="table mb-0 align-middle">
                    <thead><tr><th>Influencer</th><th>Category</th><th>Instagram</th><th>Registered</th></tr></thead>
                    <tbody>
                        @forelse($recentInfluencers as $inf)
                        <tr>
                            <td>
                                <a href="{{ route('admin.influencers.show', $inf) }}" style="color:#0f172a;text-decoration:none;font-weight:700;font-size:13.5px">{{ $inf->full_name }}</a>
                                <div style="color:#64748b;font-size:12px">{{ $inf->city ?? 'India' }}</div>
                            </td>
                            <td><span class="pill-tag">{{ $inf->category ?? 'General' }}</span></td>
                            <td><span class="text-danger fw-semibold" style="font-size:12.5px">{{ $inf->instagram_handle ?? '—' }}</span></td>
                            <td style="color:#94a3b8;font-size:12px;white-space:nowrap">{{ $inf->created_at->diffForHumans() }}</td>
                        </tr>
                        @empty
                        <tr><td colspan="4" class="text-center text-muted py-4">No recent registrations</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
