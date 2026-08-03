import React, { useState } from 'react';
import UIStateDisplay, { STATE_TYPES } from '../../components/UIStateDisplay';

export default function UIStatePreviewManager() {
  const [activeState, setActiveState] = useState(STATE_TYPES.EMPTY);

  const stateButtons = [
    { type: STATE_TYPES.EMPTY, label: 'Empty State' },
    { type: STATE_TYPES.LOADING, label: 'Loading State' },
    { type: STATE_TYPES.ERROR, label: 'Error State' },
    { type: STATE_TYPES.NO_INTERNET, label: 'No Internet' },
    { type: STATE_TYPES.SLOW_NETWORK, label: 'Slow Network' },
    { type: STATE_TYPES.NO_SEARCH_RESULTS, label: 'No Search Results' },
    { type: STATE_TYPES.PERMISSION_DENIED, label: 'Permission Denied' },
    { type: STATE_TYPES.SESSION_EXPIRED, label: 'Session Expired' },
    { type: STATE_TYPES.FORM_VALIDATION, label: 'Form Validation' },
    { type: STATE_TYPES.SUCCESS, label: 'Success State' }
  ];

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            System UI Feedback & Error States
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Preview and test all 10 standardized application UI feedback states (Empty, Loading, Errors, Network, Validation).
          </p>
        </div>
      </div>

      {/* State Selector Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {stateButtons.map((btn) => (
          <button
            key={btn.type}
            type="button"
            onClick={() => setActiveState(btn.type)}
            aria-label={`Preview ${btn.label}`}
            style={{
              padding: '8px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1',
              background: activeState === btn.type ? '#000648' : '#ffffff',
              color: activeState === btn.type ? '#f2b733' : '#334155',
              fontWeight: activeState === btn.type ? 800 : 600,
              fontSize: '0.825rem', cursor: 'pointer'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Live State Display Sandbox */}
      <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '16px', padding: '32px 20px' }}>
        <UIStateDisplay
          type={activeState}
          onRetry={() => alert(`Simulated Retry action for ${activeState}`)}
        />
      </div>
    </div>
  );
}
