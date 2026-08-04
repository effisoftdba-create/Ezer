import React from 'react';
import { HiExclamation, HiRefresh, HiTrash } from 'react-icons/hi';

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

  handleResetData = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {}
    window.location.reload();
  };

  handleReload = () => {
    window.location.reload();
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
            maxWidth: '520px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            textAlign: 'center'
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
              Unexpected Application Error Caught
            </h2>

            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '24px' }}>
              The application encountered a storage or rendering error. You can reload the page or reset stored data to recover immediately.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                type="button"
                onClick={this.handleReload}
                style={{
                  padding: '12px 24px',
                  background: '#000648',
                  color: '#f2b733',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <HiRefresh size={18} /> Reload Application
              </button>

              <button
                type="button"
                onClick={this.handleResetData}
                style={{
                  padding: '10px 24px',
                  background: '#f8fafc',
                  color: '#dc2626',
                  border: '1.5px solid #fecaca',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <HiTrash size={16} /> Reset Storage Cache & Recover
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
