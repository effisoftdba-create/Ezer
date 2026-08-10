import React from 'react';
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
  HiOutlineCheckCircle
} from 'react-icons/hi';

import { STATE_TYPES } from '../constants/uiStateTypes';
export { STATE_TYPES };

const STATE_CONFIGS = {
  empty: {
    title: 'No Data Found',
    message: 'There are currently no items available in this section.',
    icon: HiOutlineFolderOpen,
    color: '#64748b',
    bg: '#f8fafc',
    border: '#cbd5e1'
  },
  loading: {
    title: 'Loading Content...',
    message: 'Please wait while we fetch the latest information for you.',
    icon: HiOutlineRefresh,
    color: '#115DFC',
    bg: '#eff6ff',
    border: '#bfdbfe',
    spin: true
  },
  error: {
    title: 'Unable to Load Data',
    message: 'An unexpected error occurred while processing your request.',
    icon: HiOutlineExclamationCircle,
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca'
  },
  no_internet: {
    title: 'No Internet Connection',
    message: 'Please check your network cables or Wi-Fi connection and try again.',
    icon: HiOutlineWifi,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a'
  },
  slow_network: {
    title: 'Slow Network Connection',
    message: 'Response from server is taking longer than usual. Please stay on page.',
    icon: HiOutlineCloudUpload,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a'
  },
  no_search_results: {
    title: 'No Search Results Match',
    message: 'We could not find any matching items for your search keywords.',
    icon: HiOutlineSearch,
    color: '#64748b',
    bg: '#f8fafc',
    border: '#cbd5e1'
  },
  permission_denied: {
    title: 'Access Permission Denied',
    message: 'You do not have administrative privileges to view or edit this resource.',
    icon: HiOutlineLockClosed,
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca'
  },
  session_expired: {
    title: 'Admin Session Expired',
    message: 'Your authentication token has expired. Please log in again to continue.',
    icon: HiOutlineClock,
    color: '#c2410c',
    bg: '#fff7ed',
    border: '#ffedd5'
  },
  form_validation: {
    title: 'Form Validation Error',
    message: 'Please check the highlighted fields and correct input errors before submitting.',
    icon: HiOutlineShieldExclamation,
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca'
  },
  success: {
    title: 'Action Completed Successfully',
    message: 'Your changes have been saved and synchronized in real-time.',
    icon: HiOutlineCheckCircle,
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0'
  }
};

export default function UIStateDisplay({ type = 'empty', title, message, onRetry, actionLabel }) {
  const config = STATE_CONFIGS[type] || STATE_CONFIGS.empty;
  const Icon = config.icon || HiOutlineFolderOpen;

  const displayTitle = title || config.title;
  const displayMessage = message || config.message;

  return (
    <div style={{
      padding: '36px 24px',
      background: config.bg,
      border: `1.5px solid ${config.border}`,
      borderRadius: '16px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '540px',
      margin: '20px auto'
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#ffffff',
        border: `2px solid ${config.color}`,
        color: config.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.6rem',
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
      }}>
        <Icon className={config.spin ? 'spin-icon' : ''} style={{ animation: config.spin ? 'spin 1.5s linear infinite' : 'none' }} />
      </div>

      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000648', margin: '0 0 8px 0' }}>
        {displayTitle}
      </h3>

      <p style={{ fontSize: '0.875rem', color: '#475569', margin: '0 0 20px 0', lineHeight: 1.55 }}>
        {displayMessage}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          aria-label={actionLabel || 'Retry Action'}
          style={{
            padding: '10px 22px',
            background: '#000648',
            color: '#f2b733',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,6,72,0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {actionLabel || 'Retry'}
        </button>
      )}
    </div>
  );
}
