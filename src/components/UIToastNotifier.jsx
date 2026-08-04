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
  empty: { icon: HiOutlineFolderOpen, color: '#64748b', bg: '#f8fafc', border: '#cbd5e1', defaultTitle: 'Empty State' },
  loading: { icon: HiOutlineRefresh, color: '#115DFC', bg: '#eff6ff', border: '#bfdbfe', spin: true, defaultTitle: 'Loading State' },
  error: { icon: HiOutlineExclamationCircle, color: '#dc2626', bg: '#fef2f2', border: '#fecaca', defaultTitle: 'Error State' },
  no_internet: { icon: HiOutlineWifi, color: '#d97706', bg: '#fffbeb', border: '#fde68a', defaultTitle: 'No Internet Connection' },
  slow_network: { icon: HiOutlineCloudUpload, color: '#d97706', bg: '#fffbeb', border: '#fde68a', defaultTitle: 'Slow Network Latency' },
  no_search_results: { icon: HiOutlineSearch, color: '#64748b', bg: '#f8fafc', border: '#cbd5e1', defaultTitle: 'No Search Results' },
  permission_denied: { icon: HiOutlineLockClosed, color: '#dc2626', bg: '#fef2f2', border: '#fecaca', defaultTitle: 'Permission Denied' },
  session_expired: { icon: HiOutlineClock, color: '#c2410c', bg: '#fff7ed', border: '#ffedd5', defaultTitle: 'Session Expired' },
  form_validation: { icon: HiOutlineShieldExclamation, color: '#dc2626', bg: '#fef2f2', border: '#fecaca', defaultTitle: 'Form Validation Warning' },
  success: { icon: HiOutlineCheckCircle, color: '#166534', bg: '#f0fdf4', border: '#bbf7d0', defaultTitle: 'Success State' }
};

export default function UIToastNotifier() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeStateToast((toast) => {
      setToasts((prev) => [toast, ...prev].slice(0, 4));
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 4500);
    });

    // Automatic Network Listeners for No Internet & Slow Network
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

  return (
    <div
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '380px',
        width: 'calc(100% - 48px)',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((t) => {
        const cfg = STATE_ICONS[t.type] || STATE_ICONS.success;
        const IconComponent = cfg.icon;

        return (
          <div
            key={t.id}
            className="uipro-fade-in"
            style={{
              pointerEvents: 'auto',
              background: cfg.bg,
              border: `1.5px solid ${cfg.border}`,
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 10px 30px rgba(0, 6, 72, 0.18)',
              display: 'flex',
              alignItems: 'start',
              gap: '12px',
              backdropFilter: 'blur(8px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                color: cfg.color,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                paddingTop: '2px',
                animation: cfg.spin ? 'spin 1s linear infinite' : 'none'
              }}
            >
              <IconComponent size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', marginBottom: '2px' }}>
                {t.title || cfg.defaultTitle}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.4 }}>
                {t.message || 'Operation status updated in real-time.'}
              </div>
            </div>

            <button
              type="button"
              aria-label="Dismiss state notification"
              onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex'
              }}
            >
              <HiX size={16} />
            </button>
          </div>
        );
      })}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
