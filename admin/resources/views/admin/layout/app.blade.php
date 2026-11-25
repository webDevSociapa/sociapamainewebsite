<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Dashboard') — Sociapa Admin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        :root {
            --brand: #E50914;
            --brand-dark: #b80710;
            --brand-light: #ff3348;
            --brand-glow: rgba(229, 9, 20, 0.35);
            --sidebar-w: 265px;
            --sidebar-bg: #0c1017;
            --sidebar-text: rgba(241, 245, 249, 0.75);
            --sidebar-active: #E50914;
            --topbar-h: 70px;
            --bg-canvas: #f8fafc;
            --card-border: rgba(226, 232, 240, 0.9);
            --card-shadow: 0 2px 4px rgba(0,0,0,0.02), 0 10px 24px -4px rgba(15, 23, 42, 0.05);
            --card-hover-shadow: 0 16px 36px -6px rgba(15, 23, 42, 0.09);
        }
        * { box-sizing: border-box; }
        body {
            font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-canvas);
            color: #0f172a;
            margin: 0;
            -webkit-font-smoothing: antialiased;
        }

        /* ── SIDEBAR ── */
        .sidebar {
            position: fixed; top: 0; left: 0; bottom: 0; width: var(--sidebar-w);
            background: linear-gradient(180deg, #0e121a 0%, #080a0f 100%);
            border-right: 1px solid rgba(255, 255, 255, 0.06);
            overflow-y: auto; z-index: 1000;
            display: flex; flex-direction: column; transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 4px 0 24px rgba(0, 0, 0, 0.25);
        }
        .sidebar::-webkit-scrollbar { width: 5px; }
        .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

        .sidebar-logo {
            padding: 22px 24px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            display: flex; align-items: center; gap: 12px;
            position: relative;
        }
        .sidebar-logo::after {
            content: '';
            position: absolute;
            bottom: -1px; left: 24px; right: 24px; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(229, 9, 20, 0.3), transparent);
        }
        .sidebar-logo .logo-icon {
            width: 40px; height: 40px;
            background: linear-gradient(135deg, #ff3348 0%, #D20C0C 100%);
            border-radius: 12px; display: flex; align-items: center; justify-content: center;
            font-size: 20px; color: #fff; font-weight: 800; flex-shrink: 0;
            box-shadow: 0 4px 18px rgba(229, 9, 20, 0.45);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .sidebar-logo .logo-text-wrap { display: flex; flex-direction: column; }
        .sidebar-logo .logo-text {
            color: #fff; font-size: 17px; font-weight: 800; line-height: 1.15;
            letter-spacing: -0.3px; display: flex; align-items: center; gap: 6px;
        }
        .sidebar-logo .logo-badge {
            background: rgba(229, 9, 20, 0.18);
            color: #ff4d5e;
            border: 1px solid rgba(229, 9, 20, 0.3);
            font-size: 9px; font-weight: 800;
            padding: 1px 6px; border-radius: 4px;
            letter-spacing: 0.8px;
        }
        .sidebar-logo .logo-sub {
            font-size: 11px; color: rgba(255, 255, 255, 0.45);
            font-weight: 600; letter-spacing: 0.5px; margin-top: 2px;
        }

        .sidebar-section-title {
            padding: 22px 24px 8px;
            font-size: 10px; font-weight: 700; color: rgba(255, 255, 255, 0.32);
            text-transform: uppercase; letter-spacing: 1.8px;
            display: flex; align-items: center; gap: 8px;
        }
        .sidebar-section-title::after {
            content: ''; flex: 1; height: 1px;
            background: rgba(255, 255, 255, 0.05);
        }

        .sidebar-nav { padding: 0 12px; flex: 1; }
        .nav-item { margin-bottom: 4px; }
        .nav-link {
            display: flex; align-items: center; gap: 12px;
            padding: 10px 14px; border-radius: 10px; color: var(--sidebar-text);
            text-decoration: none; font-size: 13.5px; font-weight: 500;
            transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }
        .nav-link:hover {
            background: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            transform: translateX(3px);
        }
        .nav-link.active {
            background: linear-gradient(135deg, rgba(229, 9, 20, 0.16) 0%, rgba(229, 9, 20, 0.04) 100%);
            border: 1px solid rgba(229, 9, 20, 0.25);
            border-left: 3.5px solid #E50914;
            color: #ffffff;
            font-weight: 600;
            box-shadow: 0 4px 16px -2px rgba(229, 9, 20, 0.25);
        }
        .nav-link i {
            font-size: 16px; width: 22px; flex-shrink: 0;
            color: rgba(255, 255, 255, 0.6);
            transition: color .2s, transform .2s;
        }
        .nav-link:hover i { color: #fff; transform: scale(1.1); }
        .nav-link.active i { color: #ff4d5e; }
        
        .nav-badge {
            margin-left: auto;
            background: linear-gradient(135deg, #E50914 0%, #ff3348 100%);
            color: #fff; font-size: 10.5px; font-weight: 700;
            padding: 2px 8px; border-radius: 20px;
            box-shadow: 0 2px 8px rgba(229, 9, 20, 0.4);
        }
        .nav-link.active .nav-badge {
            box-shadow: 0 2px 10px rgba(229, 9, 20, 0.6);
        }

        .sidebar-footer {
            padding: 16px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            background: rgba(0, 0, 0, 0.2);
            display: flex; align-items: center; justify-content: space-between;
        }
        .sidebar-status {
            display: inline-flex; align-items: center; gap: 6px;
            font-size: 11px; color: rgba(255, 255, 255, 0.5); font-weight: 500;
        }
        .status-dot-live {
            width: 7px; height: 7px; border-radius: 50%;
            background: #10B981;
            box-shadow: 0 0 8px #10B981;
            animation: pulseGlow 2s infinite;
        }
        @keyframes pulseGlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.85); }
        }

        .sidebar-footer form button {
            background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 0.7); font-size: 12px; font-weight: 600;
            cursor: pointer; padding: 6px 12px; border-radius: 8px;
            display: flex; align-items: center; gap: 6px;
            transition: all .2s;
        }
        .sidebar-footer form button:hover {
            background: rgba(229, 9, 20, 0.15); border-color: rgba(229, 9, 20, 0.3);
            color: #ff4d5e;
        }

        /* ── TOPBAR ── */
        .topbar {
            position: fixed; top: 0; left: var(--sidebar-w); right: 0; height: var(--topbar-h);
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.85); z-index: 999;
            display: flex; align-items: center; padding: 0 32px;
            justify-content: space-between; gap: 16px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
        }
        .topbar-left {
            display: flex; align-items: center; gap: 12px;
        }
        .topbar-icon {
            width: 38px; height: 38px; border-radius: 10px;
            background: rgba(229, 9, 20, 0.08);
            color: var(--brand); display: flex; align-items: center; justify-content: center;
            font-size: 18px; font-weight: 600;
        }
        .topbar-title {
            font-size: 18px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px;
        }
        .topbar-sub {
            font-size: 12px; color: #64748b; font-weight: 500;
        }

        .topbar-right {
            display: flex; align-items: center; gap: 14px;
        }
        .btn-live-website {
            display: inline-flex; align-items: center; gap: 7px;
            padding: 7px 14px; border-radius: 8px;
            background: #fff; border: 1px solid #e2e8f0;
            color: #334155; font-size: 12.5px; font-weight: 600;
            text-decoration: none; transition: all .2s;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        .btn-live-website:hover {
            background: #f8fafc; border-color: #cbd5e1;
            color: var(--brand); transform: translateY(-1px);
        }
        .btn-live-website i { font-size: 13px; }

        .topbar-logo-card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px 14px;
            background: #ffffff;
            border: 1.5px solid #e2e8f0;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
            text-decoration: none;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            height: 44px;
        }
        .topbar-logo-card:hover {
            border-color: rgba(229, 9, 20, 0.35);
            box-shadow: 0 4px 14px rgba(229, 9, 20, 0.12);
            transform: translateY(-1px);
        }
        .topbar-brand-logo {
            height: 30px;
            width: auto;
            max-width: 140px;
            object-fit: contain;
            display: block;
        }

        /* ── MAIN CONTENT ── */
        .main-content {
            margin-left: var(--sidebar-w); padding-top: var(--topbar-h);
            min-height: 100vh;
            background: radial-gradient(circle at 10% 8%, rgba(229, 9, 20, 0.02) 0%, transparent 40%), var(--bg-canvas);
        }
        .content-wrap { padding: 32px; max-width: 1400px; margin: 0 auto; }

        /* ── PAGE HEADER ── */
        .page-header {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 26px; flex-wrap: wrap; gap: 16px;
        }
        .page-header h1 {
            font-size: 24px; font-weight: 800; color: #0f172a; margin: 0;
            letter-spacing: -0.5px; display: flex; align-items: center; gap: 10px;
        }
        .count-pill {
            background: #f1f5f9; color: #475569;
            font-size: 12.5px; font-weight: 700;
            padding: 3px 10px; border-radius: 9999px;
            border: 1px solid #e2e8f0;
        }

        /* ── BUTTONS ── */
        .btn-brand {
            background: linear-gradient(135deg, #E50914 0%, #FF2638 100%);
            color: #fff; border: none; font-weight: 600;
            border-radius: 10px; padding: 9px 18px; font-size: 13.5px;
            box-shadow: 0 4px 14px 0 rgba(229, 9, 20, 0.35);
            display: inline-flex; align-items: center; gap: 6px;
            transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
        }
        .btn-brand:hover {
            background: linear-gradient(135deg, #d20712 0%, #e51f30 100%);
            color: #fff; transform: translateY(-2px);
            box-shadow: 0 8px 22px 0 rgba(229, 9, 20, 0.45);
        }
        .btn-brand:active { transform: translateY(0); }

        .btn-sm-icon {
            width: 34px; height: 34px; display: inline-flex;
            align-items: center; justify-content: center;
            border-radius: 8px; border: 1px solid transparent;
            transition: all .2s; font-size: 14px;
        }
        .btn-action-edit {
            background: rgba(59, 130, 246, 0.08); color: #2563eb;
            border-color: rgba(59, 130, 246, 0.15);
        }
        .btn-action-edit:hover {
            background: #2563eb; color: #fff; transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        .btn-action-delete {
            background: rgba(239, 68, 68, 0.08); color: #dc2626;
            border-color: rgba(239, 68, 68, 0.15);
        }
        .btn-action-delete:hover {
            background: #dc2626; color: #fff; transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }
        .btn-action-view {
            background: rgba(100, 116, 139, 0.08); color: #475569;
            border-color: rgba(100, 116, 139, 0.15);
        }
        .btn-action-view:hover {
            background: #475569; color: #fff; transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(71, 85, 105, 0.3);
        }

        /* ── TABLE CARD ── */
        .table-card {
            background: #ffffff; border-radius: 16px;
            border: 1px solid var(--card-border);
            box-shadow: var(--card-shadow);
            overflow: hidden;
            transition: box-shadow .2s;
        }
        .table-card:hover { box-shadow: var(--card-hover-shadow); }
        .table-header {
            padding: 16px 24px; border-bottom: 1px solid #f1f5f9;
            display: flex; align-items: center; justify-content: space-between;
            flex-wrap: wrap; gap: 14px; background: #ffffff;
        }

        /* ── FILTER BARS & SEARCH FORMS (PROPER INLINE ALIGNMENT) ── */
        .table-header form,
        .filter-bar,
        form.filter-bar {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            flex-wrap: wrap !important;
            gap: 12px !important;
            margin: 0 !important;
            width: auto !important;
        }
        .filter-bar .form-control,
        .filter-bar .form-select,
        .table-header .form-control,
        .table-header .form-select {
            display: inline-block !important;
            width: auto !important;
            font-size: 13.5px !important;
            padding: 8px 14px !important;
            height: 42px !important;
            border-radius: 10px !important;
            border: 1.5px solid #e2e8f0 !important;
            background-color: #ffffff !important;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02) !important;
            color: #0f172a !important;
            font-weight: 500 !important;
            line-height: normal !important;
        }
        .filter-bar .form-control:focus,
        .filter-bar .form-select:focus,
        .table-header .form-control:focus,
        .table-header .form-select:focus {
            border-color: var(--brand) !important;
            box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.12) !important;
            outline: none !important;
        }
        .filter-bar .btn,
        .table-header .btn {
            height: 42px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            padding: 0 18px !important;
            border-radius: 10px !important;
            font-size: 13px !important;
            font-weight: 700 !important;
            white-space: nowrap !important;
            line-height: 1 !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
        }
        .filter-bar .btn-brand,
        .table-header .btn-brand {
            background: linear-gradient(135deg, #E50914 0%, #FF2638 100%) !important;
            color: #ffffff !important;
            border: none !important;
            box-shadow: 0 3px 12px rgba(229, 9, 20, 0.3) !important;
        }
        .filter-bar .btn-brand:hover,
        .table-header .btn-brand:hover {
            background: linear-gradient(135deg, #cf0711 0%, #e51f30 100%) !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 6px 16px rgba(229, 9, 20, 0.42) !important;
        }
        .filter-bar .btn-outline-secondary,
        .table-header .btn-outline-secondary {
            background: #ffffff !important;
            border: 1.5px solid #cbd5e1 !important;
            color: #475569 !important;
        }
        .filter-bar .btn-outline-secondary:hover,
        .table-header .btn-outline-secondary:hover {
            background: #f1f5f9 !important;
            color: #0f172a !important;
            border-color: #94a3b8 !important;
        }

        /* ── DETAIL CARDS & ROWS ── */
        .detail-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid var(--card-border);
            box-shadow: var(--card-shadow);
            padding: 32px;
        }
        .detail-row {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 16px 0;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
        }
        .detail-row:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        .detail-row:first-child {
            padding-top: 0;
        }
        .detail-label {
            font-weight: 700;
            color: #334155;
            min-width: 190px;
            flex-shrink: 0;
            font-size: 13.5px;
        }
        .detail-value {
            color: #475569;
            flex: 1;
            line-height: 1.6;
        }
        .detail-value a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
        }
        .detail-value a:hover {
            text-decoration: underline;
        }

        .table-card .table { margin-bottom: 0; }
        .table-card .table thead th {
            background: #f8fafc; font-size: 11px; font-weight: 700;
            color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;
            border-bottom: 1px solid #e2e8f0; padding: 14px 20px;
            white-space: nowrap;
        }
        .table-card .table tbody td {
            padding: 16px 20px; vertical-align: middle;
            font-size: 13.5px; border-bottom: 1px solid #f1f5f9;
            color: #334155;
        }
        .table-card .table tbody tr {
            transition: background .15s ease;
        }
        .table-card .table tbody tr:hover {
            background: #f8fafc;
        }
        .table-card .table tbody tr:last-child td { border-bottom: none; }

        /* ── BADGES & STATUS ── */
        .badge {
            padding: 5px 12px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        .badge-status {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 4px 11px; border-radius: 9999px;
            font-size: 12px; font-weight: 600;
        }
        .badge-status-dot {
            width: 6px; height: 6px; border-radius: 50%;
        }

        .badge-published, .badge-active {
            background: #ecfdf5 !important; color: #059669 !important; border: 1px solid #a7f3d0 !important;
        }
        .badge-published .badge-status-dot, .badge-active .badge-status-dot {
            background: #10b981; box-shadow: 0 0 6px #10b981;
        }

        .badge-draft, .badge-inactive {
            background: #f1f5f9 !important; color: #64748b !important; border: 1px solid #e2e8f0 !important;
        }
        .badge-draft .badge-status-dot, .badge-inactive .badge-status-dot {
            background: #94a3b8;
        }

        .badge-new {
            background: #eff6ff !important; color: #2563eb !important; border: 1px solid #bfdbfe !important;
        }
        .badge-new .badge-status-dot {
            background: #3b82f6; box-shadow: 0 0 6px #3b82f6;
        }

        .badge-replied, .badge-shortlisted, .badge-completed {
            background: #ecfdf5 !important; color: #059669 !important; border: 1px solid #a7f3d0 !important;
        }
        .badge-read, .badge-reviewed {
            background: #f8fafc !important; color: #475569 !important; border: 1px solid #e2e8f0 !important;
        }
        .badge-pending, .badge-in_progress {
            background: #fffbeb !important; color: #d97706 !important; border: 1px solid #fde68a !important;
        }
        .badge-rejected {
            background: #fef2f2 !important; color: #dc2626 !important; border: 1px solid #fecaca !important;
        }

        .pill-tag {
            background: #f1f5f9; color: #334155;
            border: 1px solid #e2e8f0; font-weight: 600;
            border-radius: 7px; padding: 3px 9px; font-size: 11.5px;
            display: inline-block;
        }
        .salary-tag {
            font-weight: 700; color: #0f172a; font-size: 13.5px;
        }

        /* ── ACTION BUTTON RETROFIT ── */
        .btn-outline-primary.btn-sm-icon {
            background: rgba(59, 130, 246, 0.08) !important; color: #2563eb !important;
            border: 1px solid rgba(59, 130, 246, 0.2) !important;
        }
        .btn-outline-primary.btn-sm-icon:hover {
            background: #2563eb !important; color: #fff !important;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3) !important;
            transform: translateY(-1px);
        }
        .btn-outline-danger.btn-sm-icon {
            background: rgba(239, 68, 68, 0.08) !important; color: #dc2626 !important;
            border: 1px solid rgba(239, 68, 68, 0.2) !important;
        }
        .btn-outline-danger.btn-sm-icon:hover {
            background: #dc2626 !important; color: #fff !important;
            box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3) !important;
            transform: translateY(-1px);
        }

        /* ── PAGINATION ── */
        .pagination { margin-bottom: 0; gap: 4px; }
        .page-item .page-link {
            border-radius: 8px !important; border: 1px solid #e2e8f0;
            color: #475569; font-weight: 600; font-size: 13px; padding: 6px 12px;
        }
        .page-item.active .page-link {
            background: #E50914 !important; border-color: #E50914 !important;
            color: #fff !important; box-shadow: 0 2px 8px rgba(229, 9, 20, 0.35);
        }

        /* ── STATS & CARDS ── */
        .stat-card {
            background: #ffffff; border-radius: 16px; padding: 24px;
            border: 1px solid var(--card-border);
            box-shadow: var(--card-shadow);
            transition: all .25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative; overflow: hidden;
        }
        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--card-hover-shadow);
            border-color: #cbd5e1;
        }
        .stat-card .stat-icon {
            width: 48px; height: 48px; border-radius: 13px;
            display: flex; align-items: center; justify-content: center;
            font-size: 22px; flex-shrink: 0;
            box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }
        .stat-card .stat-num {
            font-size: 32px; font-weight: 800; color: #0f172a;
            line-height: 1.1; letter-spacing: -0.5px; margin-top: 10px;
        }
        .stat-card .stat-label {
            font-size: 13px; color: #64748b; margin-top: 4px; font-weight: 600;
        }

        /* ── FORMS & INPUTS ── */
        .form-card {
            background: #ffffff; border-radius: 16px;
            border: 1px solid var(--card-border);
            box-shadow: var(--card-shadow);
            padding: 32px;
        }
        .form-label {
            font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 7px;
        }
        .form-control, .form-select {
            font-size: 14px; border: 1.5px solid #e2e8f0;
            border-radius: 10px; padding: 10px 14px;
            transition: all .2s; background: #ffffff;
        }
        .form-control:focus, .form-select:focus {
            border-color: var(--brand);
            box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.12);
        }

        /* ── ALERTS ── */
        .alert-success-custom {
            background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
            border: 1px solid #bbf7d0; color: #15803d;
            border-radius: 12px; padding: 14px 18px; margin-bottom: 24px;
            display: flex; align-items: center; gap: 12px;
            font-size: 14px; font-weight: 600;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
            .sidebar { transform: translateX(-100%); }
            .topbar, .main-content { left: 0; margin-left: 0; }
            .content-wrap { padding: 20px; }
        }
    </style>
    @stack('styles')
</head>
<body>
    <!-- SIDEBAR -->
    <aside class="sidebar">
        <div class="sidebar-logo">
            <div class="logo-icon">S</div>
            <div class="logo-text-wrap">
                <div class="logo-text">
                    Sociapa
                    <span class="logo-badge">PRO</span>
                </div>
                <div class="logo-sub">Executive Suite</div>
            </div>
        </div>

        <div class="sidebar-nav">
            <div class="sidebar-section-title">Overview</div>
            <div class="nav-item">
                <a href="{{ route('admin.dashboard') }}" class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                    <i class="bi bi-speedometer2"></i> Dashboard
                </a>
            </div>

            <div class="sidebar-section-title">Submissions</div>
            <div class="nav-item">
                <a href="{{ route('admin.contacts.index') }}" class="nav-link {{ request()->routeIs('admin.contacts*') ? 'active' : '' }}">
                    <i class="bi bi-envelope"></i> Contacts
                    @php $nc = \App\Models\Contact::where('status','new')->count() @endphp
                    @if($nc > 0)<span class="nav-badge">{{ $nc }}</span>@endif
                </a>
            </div>
            <div class="nav-item">
                <a href="{{ route('admin.career.index') }}" class="nav-link {{ request()->routeIs('admin.career*') ? 'active' : '' }}">
                    <i class="bi bi-briefcase"></i> Career Applications
                    @php $nj = \App\Models\CareerApplication::where('status','new')->count() @endphp
                    @if($nj > 0)<span class="nav-badge">{{ $nj }}</span>@endif
                </a>
            </div>
            <div class="nav-item">
                <a href="{{ route('admin.audit.index') }}" class="nav-link {{ request()->routeIs('admin.audit*') ? 'active' : '' }}">
                    <i class="bi bi-search"></i> Audit Requests
                    @php $na = \App\Models\AuditRequest::where('status','pending')->count() @endphp
                    @if($na > 0)<span class="nav-badge">{{ $na }}</span>@endif
                </a>
            </div>
            <div class="nav-item">
                <a href="{{ route('admin.influencers.index') }}" class="nav-link {{ request()->routeIs('admin.influencers*') ? 'active' : '' }}">
                    <i class="bi bi-people"></i> Influencers
                </a>
            </div>
            <div class="nav-item">
                <a href="{{ route('admin.newsletter.index') }}" class="nav-link {{ request()->routeIs('admin.newsletter*') ? 'active' : '' }}">
                    <i class="bi bi-newspaper"></i> Newsletter
                </a>
            </div>
            <div class="nav-item">
                <a href="{{ route('admin.case_studies.index') }}" class="nav-link {{ request()->routeIs('admin.case_studies*') ? 'active' : '' }}">
                    <i class="bi bi-file-earmark-arrow-down"></i> Case Study Leads
                    @php $ncs = \App\Models\CaseStudy::where('status','new')->count() @endphp
                    @if($ncs > 0)<span class="nav-badge">{{ $ncs }}</span>@endif
                </a>
            </div>

          
        
        </div>

        <div class="sidebar-footer">
            <div class="sidebar-status">
                <span class="status-dot-live"></span>
                <span>System Active</span>
            </div>
            <form method="POST" action="{{ route('admin.logout') }}">
                @csrf
                <button type="submit" title="Sign Out"><i class="bi bi-box-arrow-left"></i> Logout</button>
            </form>
        </div>
    </aside>

    <!-- TOPBAR -->
    <header class="topbar">
        <div class="topbar-left">
            <div class="topbar-icon">
                <i class="bi bi-grid-fill"></i>
            </div>
            <div>
                <div class="topbar-title">@yield('page-title', 'Dashboard')</div>
                <div class="topbar-sub">Sociapa Management System</div>
            </div>
        </div>
        <div class="topbar-right">
            <a href="/sociapareact/" target="_blank" class="btn-live-website">
                <i class="bi bi-box-arrow-up-right"></i> View Website
            </a>
            <a href="/sociapareact/" target="_blank" class="topbar-logo-card" title="Sociapa — Digital Marketing Agency">
                <img src="/sociapareact/admin/logonew.png" alt="Sociapa" class="topbar-brand-logo">
            </a>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="main-content">
        <div class="content-wrap">
            @if(session('success'))
                <div class="alert-success-custom">
                    <i class="bi bi-check-circle-fill" style="font-size:18px"></i>
                    <span>{{ session('success') }}</span>
                </div>
            @endif
            @yield('content')
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>
</html>
