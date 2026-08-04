import React from 'react';
import { HiDeviceMobile, HiCheck, HiClipboardCopy, HiCode } from 'react-icons/hi';

export default function AdminSyncModal({
  showSyncModal,
  setShowSyncModal,
  buildSyncUrl,
  handleCopySyncLink,
  copiedSyncLink,
  currentExportData,
  handleCopyJson,
  copiedJson
}) {
  if (!showSyncModal) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', maxWidth: '650px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiDeviceMobile color="#115DFC" size={24} /> Mobile Sync & Production Deployment Hub
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 20px 0' }}>
          Synchronize your PC admin updates directly to mobile devices or copy updated codebase configuration.
        </p>

        {/* METHOD 1: INSTANT MOBILE SYNC LINK */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
            Method 1: Instant Mobile Device Sync (1-Click Link)
          </span>
          <p style={{ fontSize: '0.78rem', color: '#475569', margin: '0 0 10px 0' }}>
            Copy this sync URL and open or send it to your 4 to 5 mobile phones. Opening the link on any mobile phone instantly imports all updated admin images & settings!
          </p>

          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              aria-label="Generated mobile sync link URL"
              readOnly
              value={buildSyncUrl()}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.78rem', background: '#fff' }}
            />
            <button
              type="button"
              aria-label="Copy mobile sync URL button"
              onClick={handleCopySyncLink}
              style={{ padding: '8px 16px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {copiedSyncLink ? <HiCheck size={16} /> : <HiClipboardCopy size={16} />}
              {copiedSyncLink ? 'Link Copied!' : 'Copy Sync Link'}
            </button>
          </div>
        </div>

        {/* METHOD 2: GLOBAL CODEBASE JSON */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
            Method 2: Global GitHub Deployment Config JSON
          </span>
          <p style={{ fontSize: '0.78rem', color: '#475569', margin: '0 0 10px 0' }}>
            Copy this configuration JSON to update <code>src/data/productionData.json</code> in the codebase.
          </p>

          <textarea
            readOnly
            aria-label="Production configuration JSON text"
            rows={8}
            value={JSON.stringify(currentExportData, null, 2)}
            style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.75rem', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', marginBottom: '8px' }}
          />

          <button
            type="button"
            aria-label="Copy production configuration JSON button"
            onClick={handleCopyJson}
            style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            {copiedJson ? <HiCheck size={16} /> : <HiCode size={16} />}
            {copiedJson ? 'JSON Copied!' : 'Copy Production JSON'}
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            aria-label="Close mobile sync hub modal button"
            onClick={() => setShowSyncModal(false)}
            style={{ padding: '10px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
          >
            Close Hub
          </button>
        </div>
      </div>
    </div>
  );
}
