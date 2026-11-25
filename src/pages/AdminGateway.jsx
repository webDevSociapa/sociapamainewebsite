import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './AdminGateway.css';

export default function AdminGateway() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adminUrl = `${import.meta.env.BASE_URL}admin/login`;
  const launchAdmin = () => {
    window.open(adminUrl, '_blank') || (window.location.href = adminUrl);
  };

  return (
    <>
      <Helmet>
        <title>Sociapa Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-gateway-container">
        <div className="admin-gateway-card">
          <div className="admin-badge">🔐 SECURED LARAVEL ADMIN PANEL</div>
          <h1>Sociapa <span>Official Laravel Admin Panel</span></h1>
          <p className="admin-desc">
            Official backend dashboard for managing contact inquiries, career resumes, free audit requests, influencer registrations, newsletter subscribers, and blogs.
          </p>

          <div className="creds-box">
            <div className="creds-title">🔑 Admin Login Credentials</div>
            <div className="creds-row">
              <span>Email:</span> <code>admin@sociapa.com</code>
            </div>
            <div className="creds-row">
              <span>Password:</span> <code>Admin@1234</code>
            </div>
          </div>

          <div className="action-box">
            <button onClick={launchAdmin} className="btn-primary admin-btn">
              Launch Laravel Admin Panel 🚀
            </button>
            <p className="note">
              Admin panel URL: <code>{adminUrl}</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
