import React from 'react';
import { HiExclamation, HiRefresh } from 'react-icons/hi';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.autoRecoverTimer = null;
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CRITICAL REACT ERROR CAUGHT BY ERROR BOUNDARY:', error, errorInfo);
    // Auto-attempt instant recovery after 300ms for transient state sync pauses
    if (this.autoRecoverTimer) clearTimeout(this.autoRecoverTimer);
    this.autoRecoverTimer = setTimeout(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false, error: null });
      }
    }, 500);
  }

  componentWillUnmount() {
    if (this.autoRecoverTimer) clearTimeout(this.autoRecoverTimer);
  }

  handleTryRecover = () => {
    if (this.autoRecoverTimer) clearTimeout(this.autoRecoverTimer);
    this.setState({ hasError: false, error: null });
  };

  handleHardRefresh = () => {
    try {
      if (typeof window !== 'undefined') {
        const currentHash = window.location.hash || '';
        const cleanUrl = window.location.origin + window.location.pathname + currentHash;
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
            padding: '40px 32px',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
            border: '2px solid #f2b733'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#fef2f2',
              border: '2px solid #fecaca',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px'
            }}>
              <HiExclamation size={32} />
            </div>

            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 8px 0', color: '#000648' }}>
              Application State Sync Notice
            </h2>

            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '24px' }}>
              A real-time database state sync required a brief pause. You can restore your current view instantly or reload the page.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={this.handleTryRecover}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  background: '#f2b733',
                  color: '#000648',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(242, 183, 51, 0.35)'
                }}
              >
                Restore View Instantly
              </button>

              <button
                type="button"
                onClick={this.handleHardRefresh}
                style={{
                  width: '100%',
                  padding: '11px 20px',
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <HiRefresh size={16} /> Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
