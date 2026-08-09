import React, { useState, useEffect } from 'react';
import {
  HiOutlineFolderOpen,
  HiOutlineRefresh,
  HiOutlineExclamationCircle,
  HiOutlineWifi,
  HiOutlineCloudUpload,
  HiOutlineSearch,
  HiOutlineLockClosed,
  HiOutlineClock,
  HiOutlineShieldExclamation,
  HiOutlineCheckCircle,
  HiX
} from 'react-icons/hi';
import { subscribeStateToast, triggerStateToast } from '../utils/toastService';

const STATE_ICONS = {
  empty: { icon: HiOutlineFolderOpen, color: '#64748b', bg: '#ffffff', border: '#cbd5e1', accent: '#64748b', defaultTitle: 'Empty State' },
  loading: { icon: HiOutlineRefresh, color: '#115DFC', bg: '#ffffff', border: '#bfdbfe', accent: '#115DFC', spin: true, defaultTitle: 'Processing Request...' },
  error: { icon: HiOutlineExclamationCircle, color: '#dc2626', bg: '#ffffff', border: '#fecaca', accent: '#dc2626', defaultTitle: 'Action Failed' },
  no_internet: { icon: HiOutlineWifi, color: '#d97706', bg: '#ffffff', border: '#fde68a', accent: '#d97706', defaultTitle: 'No Internet Connection' },
  slow_network: { icon: HiOutlineCloudUpload, color: '#d97706', bg: '#ffffff', border: '#fde68a', accent: '#d97706', defaultTitle: 'Slow Network Latency' },
  no_search_results: { icon: HiOutlineSearch, color: '#64748b', bg: '#ffffff', border: '#cbd5e1', accent: '#64748b', defaultTitle: 'No Search Results' },
  permission_denied: { icon: HiOutlineLockClosed, color: '#dc2626', bg: '#ffffff', border: '#fecaca', accent: '#dc2626', defaultTitle: 'Permission Denied' },
  session_expired: { icon: HiOutlineClock, color: '#c2410c', bg: '#ffffff', border: '#ffedd5', accent: '#c2410c', defaultTitle: 'Session Expired' },
  form_validation: { icon: HiOutlineShieldExclamation, color: '#dc2626', bg: '#ffffff', border: '#fecaca', accent: '#dc2626', defaultTitle: 'Validation Warning' },
  success: { icon: HiOutlineCheckCircle, color: '#166534', bg: '#ffffff', border: '#bbf7d0', accent: '#166534', defaultTitle: 'Success!' }
};

export default function UIToastNotifier() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeStateToast((toast) => {
      setToasts((prev) => [toast, ...prev].slice(0, 2));
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3500);
    });

    const handleOffline = () => triggerStateToast('no_internet', 'No Internet Connection', 'Offline mode active. Admin edits will persist locally in browser storage.');
    const handleOnline = () => triggerStateToast('success', 'Back Online', 'Internet connection restored. Real-time syncing active.');

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      unsubscribe();
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (toasts.length === 0) return null;

  const currentToast = toasts[0];
  const cfg = STATE_ICONS[currentToast.type] || STATE_ICONS.success;
  const IconComponent = cfg.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 6, 72, 0.45)',
        backdropFilter: 'blur(4px)',
        padding: '20px',
        pointerEvents: 'auto',
        animation: 'toastBackdropFade 0.25s ease-out'
      }}
      onClick={() => setToasts((prev) => prev.filter((item) => item.id !== currentToast.id))}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
          setToasts((prev) => prev.filter((item) => item.id !== currentToast.id));
        }
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '24px 28px',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0, 6, 72, 0.35)',
          border: `2px solid ${cfg.accent}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          animation: 'toastPopModal 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <button
          type="button"
          aria-label="Dismiss state notification"
          onClick={() => setToasts((prev) => prev.filter((item) => item.id !== currentToast.id))}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#f1f5f9',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <HiX size={16} />
        </button>

        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: `${cfg.accent}15`,
            color: cfg.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '14px',
            animation: cfg.spin ? 'toastSpin 1s linear infinite' : 'toastIconPulse 0.4s ease'
          }}
        >
          <IconComponent size={32} />
        </div>

        <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000648', margin: '0 0 6px 0' }}>
          {currentToast.title || cfg.defaultTitle}
        </h4>

        <p style={{ fontSize: '0.875rem', color: '#475569', margin: '0 0 16px 0', lineHeight: 1.5 }}>
          {currentToast.message || 'Operation completed successfully.'}
        </p>

        <button
          type="button"
          onClick={() => setToasts((prev) => prev.filter((item) => item.id !== currentToast.id))}
          style={{
            padding: '8px 24px',
            background: '#000648',
            color: '#f2b733',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '0.825rem',
            cursor: 'pointer'
          }}
        >
          OK
        </button>
      </div>

      <style>{`
        @keyframes toastBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes toastPopModal {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes toastSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes toastIconPulse {
          0% { transform: scale(0.6); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
