import React from 'react';
import { HiExclamation, HiRefresh } from 'react-icons/hi';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CRITICAL REACT ERROR CAUGHT BY ERROR BOUNDARY:', error, errorInfo);
  }

  handleHardRefresh = () => {
    try {
      if (typeof window !== 'undefined') {
        const cleanUrl = window.location.origin + window.location.pathname + '?t=' + Date.now();
        window.location.href = cleanUrl;
      }
    } catch (e) {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000648 0%, #0a1478 100%)',
          color: '#ffffff',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            background: '#ffffff',
            color: '#000648',
            borderRadius: '20px',
            padding: '44px 36px',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
            border: '2px solid #f2b733'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#fef2f2',
              border: '2px solid #fecaca',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <HiExclamation size={36} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px 0', color: '#000648' }}>
              Application Refresh Required
            </h2>

            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '28px' }}>
              A browser display or rendering state requires a quick refresh. Click the button below to reload immediately.
            </p>

            <button
              type="button"
              onClick={this.handleHardRefresh}
              style={{
                width: '100%',
                padding: '14px 24px',
                background: '#000648',
                color: '#f2b733',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(0, 6, 72, 0.25)',
                transition: 'transform 0.15s ease'
              }}
            >
              <HiRefresh size={20} /> Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
