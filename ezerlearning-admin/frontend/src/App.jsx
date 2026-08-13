import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SiteProvider from './context/SiteContext';
import UIStateDisplay, { STATE_TYPES } from './components/UIStateDisplay';
import UIToastNotifier from './components/UIToastNotifier';
import EzerBrandPreloader from './components/EzerBrandPreloader';

// Helper to handle dynamic import chunk 404 errors after new deployments
function lazyRetry(componentImport) {
  return lazy(async () => {
    const pageHasBeenRefreshed = JSON.parse(
      window.sessionStorage.getItem('page-has-been-refreshed') || 'false'
    );
    try {
      const mod = await componentImport();
      window.sessionStorage.setItem('page-has-been-refreshed', 'false');

      if (mod && mod.default) {
        return mod;
      }

      const exportedComponent = mod?.default || (mod && Object.values(mod).find(v => typeof v === 'function' || (v && typeof v === 'object' && v.$$typeof)));
      if (exportedComponent) {
        return { default: exportedComponent };
      }
      return mod;
    } catch (error) {
      const isChunkError = error && (
        String(error?.message || '').includes('Failed to fetch dynamically imported module') ||
        String(error?.message || '').includes('Importing a module script failed') ||
        error.name === 'ChunkLoadError'
      );
      if (isChunkError && !pageHasBeenRefreshed) {
        window.sessionStorage.setItem('page-has-been-refreshed', 'true');
        window.location.reload();
      }
      throw error;
    }
  });
}

// Dedicated Admin Portal Pages
const AdminLogin = lazyRetry(() => import('./pages/AdminLogin'));
const AdminDashboard = lazyRetry(() => import('./pages/AdminDashboard'));

// Page Loading Fallback Spinner
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      width: '100%',
      gap: '16px',
    }}>
      <div style={{
        width: '44px',
        height: '44px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #000648',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', letterSpacing: '0.04em' }}>
        Loading EZER Admin Portal...
      </span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const location = useLocation();

  // Network Online / Offline Detection
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Clean up temporary cache-busting query parameter
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('?t=')) {
      try {
        const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <SiteProvider>
      <EzerBrandPreloader />
      <UIToastNotifier />
      <div className="admin-app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {isOffline && (
          <div style={{ position: 'sticky', top: 0, zIndex: 10000 }}>
            <UIStateDisplay
              type={STATE_TYPES.NO_INTERNET}
              onRetry={() => setIsOffline(!navigator.onLine)}
              actionLabel="Check Network Again"
            />
          </div>
        )}

        <main style={{ flexGrow: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Dedicated Admin Portal Navigation Routes */}
              <Route path="/" element={<AdminLogin />} />
              <Route path="/login" element={<AdminLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/dashboard/*" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </SiteProvider>
  );
}
