import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineShieldCheck,
  HiOutlineExternalLink,
  HiOutlineRefresh,
  HiOutlineLogout
} from 'react-icons/hi';

export default function AdminHeaderNav({ handleReset, handleLogout }) {
  return (
    <header
      style={{
        background: 'linear-gradient(135deg, #000648 0%, #000c66 50%, #001280 100%)',
        color: '#ffffff',
        padding: '14px 28px',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0, 6, 72, 0.35)',
        borderBottom: '2px solid #f2b733',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Brand & Status Mark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #f2b733 0%, #ffd700 100%)',
            color: '#000648',
            fontWeight: 900,
            padding: '6px 14px',
            borderRadius: '10px',
            fontSize: '1.15rem',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 14px rgba(242, 183, 51, 0.45)'
          }}
        >
          EZ
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
            Admin Control Panel
          </h1>
          <div style={{ fontSize: '0.725rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <HiOutlineShieldCheck color="#22c55e" size={15} />
            <span>Session Active • Protected Management Console</span>
          </div>
        </div>
      </div>

      {/* Header Actions Toolbar - Positioned strictly to Far Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.825rem',
            fontWeight: 700,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(4px)',
            transition: 'background-color 0.2s ease, transform 0.15s ease'
          }}
        >
          <span>View Live Site</span>
          <HiOutlineExternalLink size={15} />
        </Link>

        <button
          type="button"
          onClick={() => window.location.reload()}
          title="Refresh current page"
          aria-label="Refresh current page"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            background: 'rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            fontSize: '0.825rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          <HiOutlineRefresh size={15} />
          <span>Refresh</span>
        </button>

        <button
          type="button"
          onClick={handleLogout}
          aria-label="Logout from admin panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            color: '#ffffff',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.825rem',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)'
          }}
        >
          <HiOutlineLogout size={15} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
