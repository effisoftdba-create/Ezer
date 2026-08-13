import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineShieldCheck,
  HiOutlineExternalLink,
  HiOutlineRefresh,
  HiOutlineLogout,
  HiOutlineMenu
} from 'react-icons/hi';
import './AdminHeaderNav.css';

export default function AdminHeaderNav({ handleReset, handleLogout, onMenuClick }) {
  return (
    <header className="admin-header">
      <button
        type="button"
        className="admin-menu-btn"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <HiOutlineMenu size={20} />
      </button>

      {/* Brand & Status Mark */}
      <div className="admin-header-brand">
        <div className="admin-header-logo">EZ</div>
        <div className="admin-header-text">
          <h1 className="admin-header-title">Admin Control Panel</h1>
          <div className="admin-header-subtitle">
            <HiOutlineShieldCheck color="#22c55e" size={15} />
            <span>Session Active • Protected Management Console</span>
          </div>
        </div>
      </div>

      {/* Header Actions Toolbar - Positioned strictly to Far Right */}
      <div className="admin-header-actions">
        <Link to="/" target="_blank" rel="noreferrer" className="admin-header-btn">
          <span className="btn-label">View Live Site</span>
          <HiOutlineExternalLink size={15} />
        </Link>

        <button
          type="button"
          onClick={() => window.location.reload()}
          title="Refresh current page"
          aria-label="Refresh current page"
          className="admin-header-btn"
        >
          <HiOutlineRefresh size={15} />
          <span className="btn-label">Refresh</span>
        </button>

        <button
          type="button"
          onClick={handleLogout}
          aria-label="Logout from admin panel"
          className="admin-header-btn admin-header-btn--danger"
        >
          <HiOutlineLogout size={15} />
          <span className="btn-label">Logout</span>
        </button>
      </div>
    </header>
  );
}
