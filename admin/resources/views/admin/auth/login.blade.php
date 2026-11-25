<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal — Sociapa</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: #06070a;
            background-image: url('{{ asset("images/admin-login-bg.jpg") }}');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex; align-items: center; justify-content: center;
            padding: 24px 20px; margin: 0;
            position: relative; overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* ── ATMOSPHERIC LUXURY BACKDROP & GLOW ── */
        .ambient-mesh {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: 
                radial-gradient(ellipse at 50% 50%, rgba(10, 14, 23, 0.42) 0%, rgba(6, 7, 12, 0.86) 100%),
                linear-gradient(180deg, rgba(6, 7, 12, 0.25) 0%, rgba(6, 7, 12, 0.72) 100%);
            backdrop-filter: blur(1.5px);
            -webkit-backdrop-filter: blur(1.5px);
            pointer-events: none; z-index: 1;
        }
        .ambient-glow-orb {
            position: fixed;
            width: 480px; height: 480px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            filter: blur(100px);
            opacity: 0.25;
        }
        .ambient-glow-1 {
            top: -120px; right: -80px;
            background: #E50914;
        }
        .ambient-glow-2 {
            bottom: -100px; left: -80px;
            background: #ff2b38;
            opacity: 0.18;
        }
        .ambient-grid {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 32px 32px;
            opacity: 0.35;
            pointer-events: none; z-index: 3;
        }

        .login-wrap {
            width: 100%; max-width: 430px;
            position: relative; z-index: 10;
            margin: auto;
        }

        /* ── LUXURY LOGIN CARD ── */
        .login-card {
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 38px 36px 32px;
            box-shadow: 
                0 25px 70px -15px rgba(0, 0, 0, 0.85),
                0 0 0 1px rgba(255, 255, 255, 0.7),
                0 0 45px -5px rgba(229, 9, 20, 0.32);
            position: relative;
            transition: box-shadow 0.3s ease;
        }

        /* ── EMBEDDED BRAND HEADER ── */
        .card-brand-header {
            text-align: center;
            margin-bottom: 26px;
        }
        .brand-pill-badge {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: rgba(229, 9, 20, 0.08);
            color: #E50914;
            border: 1px solid rgba(229, 9, 20, 0.2);
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin-bottom: 12px;
        }
        .live-dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: #E50914;
            box-shadow: 0 0 8px #E50914;
            animation: pulseGlow 2s infinite;
        }
        @keyframes pulseGlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
        }

        .login-title {
            font-size: 24px; font-weight: 800; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.5px;
        }
        .login-subtitle {
            color: #64748b; font-size: 13.5px; margin-bottom: 0; font-weight: 500;
        }

        /* ── INPUT FIELDS ── */
        .form-group-wrap {
            margin-bottom: 18px;
        }
        .form-label-custom {
            font-size: 11.5px; font-weight: 800; color: #475569;
            margin-bottom: 7px; display: block;
            text-transform: uppercase; letter-spacing: 0.06em;
        }
        .input-icon-box {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-icon-box .field-icon {
            position: absolute; left: 15px;
            color: #94a3b8; font-size: 17px;
            pointer-events: none; transition: color 0.2s;
        }
        .input-icon-box .form-control {
            border: 1.5px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px 42px 12px 44px;
            font-size: 14px; font-weight: 500; color: #0f172a;
            height: 48px;
            background: #f8fafc;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
        }
        .input-icon-box .form-control:focus {
            border-color: #E50914;
            box-shadow: 0 0 0 3.5px rgba(229, 9, 20, 0.12);
            background: #ffffff;
            color: #0f172a;
        }
        .input-icon-box .form-control:focus + .field-icon,
        .input-icon-box:focus-within .field-icon {
            color: #E50914;
        }
        .btn-toggle-pwd {
            position: absolute; right: 10px;
            background: none; border: none;
            color: #94a3b8; font-size: 16px;
            padding: 6px 8px; cursor: pointer;
            border-radius: 6px;
            display: flex; align-items: center; justify-content: center;
            transition: color 0.2s;
        }
        .btn-toggle-pwd:hover {
            color: #0f172a;
        }

        /* ── REMEMBER ME ── */
        .login-meta-row {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 22px; font-size: 13px;
        }
        .form-check-input {
            width: 17px; height: 17px; margin-top: 1px;
            border: 1.5px solid #cbd5e1; border-radius: 5px;
            cursor: pointer;
        }
        .form-check-input:checked {
            background-color: #E50914; border-color: #E50914;
        }
        .form-check-label {
            color: #64748b; font-weight: 500; margin-left: 6px; cursor: pointer; user-select: none;
        }

        /* ── PRIMARY BUTTON ── */
        .btn-submit-login {
            background: linear-gradient(135deg, #E50914 0%, #FF2638 100%);
            color: #ffffff; border: none; border-radius: 12px;
            height: 48px; font-size: 14.5px; font-weight: 700;
            width: 100%; cursor: pointer;
            box-shadow: 0 6px 20px rgba(229, 9, 20, 0.38);
            display: flex; align-items: center; justify-content: center; gap: 8px;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            letter-spacing: 0.2px;
        }
        .btn-submit-login i {
            transition: transform 0.2s ease;
        }
        .btn-submit-login:hover {
            background: linear-gradient(135deg, #cf0711 0%, #e51f30 100%);
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(229, 9, 20, 0.5);
            color: #ffffff;
        }
        .btn-submit-login:hover i {
            transform: translateX(4px);
        }
        .btn-submit-login:active {
            transform: translateY(0);
        }

        /* ── SECURITY BADGE ── */
        .security-badge {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #94a3b8;
            display: flex; align-items: center; justify-content: center; gap: 6px;
            font-weight: 600;
        }

        .alert-danger-custom {
            background: #fef2f2; border: 1px solid #fecaca; color: #dc2626;
            border-radius: 12px; padding: 12px 16px; margin-bottom: 20px;
            font-size: 13px; font-weight: 600; display: flex; gap: 8px; align-items: center;
        }
    </style>
</head>
<body>
    <div class="ambient-mesh"></div>
    <div class="ambient-glow-orb ambient-glow-1"></div>
    <div class="ambient-glow-orb ambient-glow-2"></div>
    <div class="ambient-grid"></div>

    <div class="login-wrap">
        <!-- LOGIN FORM CARD -->
        <div class="login-card">
            <!-- EMBEDDED HEADER -->
            <div class="card-brand-header">
                <div class="brand-pill-badge">
                    <span class="live-dot"></span> SOCIAPA &bull; ADMIN CONSOLE
                </div>
                <h1 class="login-title">Welcome Back 👋</h1>
                <p class="login-subtitle">Enter your credentials to access the admin suite</p>
            </div>

            @if($errors->any())
                <div class="alert-danger-custom">
                    <i class="bi bi-exclamation-triangle-fill" style="font-size:15px;flex-shrink:0;"></i>
                    <span>{{ $errors->first() }}</span>
                </div>
            @endif

            <form method="POST" action="{{ route('admin.login.post') }}">
                @csrf

                <!-- Email Input -->
                <div class="form-group-wrap">
                    <label class="form-label-custom">
                        Email Address
                    </label>
                    <div class="input-icon-box">
                        <i class="bi bi-envelope-at-fill field-icon"></i>
                        <input type="email" name="email" class="form-control" value="{{ old('email', 'admin@sociapa.com') }}" placeholder="admin@sociapa.com" required autofocus>
                    </div>
                </div>

                <!-- Password Input -->
                <div class="form-group-wrap" style="margin-bottom:16px;">
                    <label class="form-label-custom">
                        Password
                    </label>
                    <div class="input-icon-box">
                        <i class="bi bi-shield-lock-fill field-icon"></i>
                        <input type="password" name="password" id="adminPasswordInput" class="form-control" placeholder="Enter your password" required>
                        <button type="button" class="btn-toggle-pwd" id="togglePasswordBtn" title="Toggle password visibility">
                            <i class="bi bi-eye-slash-fill" id="toggleIcon"></i>
                        </button>
                    </div>
                </div>

                <!-- Remember Me -->
                <div class="login-meta-row">
                    <div class="form-check d-flex align-items-center m-0 p-0">
                        <input type="checkbox" name="remember" class="form-check-input ms-0" id="remember">
                        <label for="remember" class="form-check-label">Remember me for 30 days</label>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-submit-login">
                    <span>Sign In to Dashboard</span>
                    <i class="bi bi-arrow-right"></i>
                </button>
            </form>

            <div class="security-badge">
                <i class="bi bi-shield-check-fill text-success" style="font-size:15px;"></i>
                <span>256-Bit SSL Encrypted Admin Gateway</span>
            </div>
        </div>
    </div>

    <!-- Toggle Password Visibility Script -->
    <script>
        const pwdInput = document.getElementById('adminPasswordInput');
        const toggleBtn = document.getElementById('togglePasswordBtn');
        const toggleIcon = document.getElementById('toggleIcon');

        if (toggleBtn && pwdInput) {
            toggleBtn.addEventListener('click', function () {
                const isPassword = pwdInput.getAttribute('type') === 'password';
                pwdInput.setAttribute('type', isPassword ? 'text' : 'password');
                toggleIcon.className = isPassword ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill';
            });
        }
    </script>
</body>
</html>
