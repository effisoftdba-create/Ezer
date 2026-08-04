import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateAdmin, isAuthenticated, getLockoutState } from '../utils/authService';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import './AdminLogin.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lockoutState, setLockoutState] = useState({ isLocked: false, remainingMinutes: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      if (typeof window !== 'undefined' && window.location.search.includes('admin')) {
        window.location.href = window.location.origin + window.location.pathname + '?/admin/dashboard';
      } else {
        navigate('/admin/dashboard');
      }
    }
    const state = getLockoutState();
    setLockoutState(state);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await authenticateAdmin(email, password);
      if (result.success) {
        if (typeof window !== 'undefined' && window.location.search.includes('admin')) {
          window.location.href = window.location.origin + window.location.pathname + '?/admin/dashboard';
        } else {
          navigate('/admin/dashboard');
        }
      } else {
        setError(result.error);
        if (result.isLocked) {
          setLockoutState({ isLocked: true, remainingMinutes: result.remainingMinutes });
        } else {
          const currentLock = getLockoutState();
          setLockoutState(currentLock);
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin_login_page">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="logo_container">
          <div style={{
            width: '48px', height: '48px', borderRadius: '10px',
            background: '#000648', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#f2b733', fontWeight: 900,
            fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,6,72,0.2)'
          }}>
            EZ
          </div>
        </div>

        <div className="title_container">
          <h2 className="title">Admin Portal Login</h2>
          <p className="subtitle">
            Secure administrative console to control EZER website content, hero banner images, and course catalogs.
          </p>
        </div>

        {error && <div className="auth_error_box">{error}</div>}

        {lockoutState.isLocked && (
          <div className="auth_error_box" style={{ background: '#fff7ed', borderColor: '#fdba74', color: '#c2410c' }}>
            <HiOutlineShieldCheck size={18} style={{ display: 'inline', marginRight: '4px' }} />
            Security Lockout Active. Try again in {lockoutState.remainingMinutes} minute(s).
          </div>
        )}

        <div className="input_container">
          <label className="input_label" htmlFor="email_field">Email Address</label>
          <div className="icon">
            <HiOutlineMail size={18} />
          </div>
          <input
            placeholder="admin@ezer.com"
            title="Email Address"
            name="email"
            type="email"
            className="input_field"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || lockoutState.isLocked}
            required
          />
        </div>

        <div className="input_container">
          <label className="input_label" htmlFor="password_field">Password</label>
          <div className="icon">
            <HiOutlineLockClosed size={18} />
          </div>
          <input
            placeholder="••••••••••••"
            title="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="input_field"
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading || lockoutState.isLocked}
            style={{ paddingRight: '40px' }}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            style={{
              position: 'absolute',
              right: '12px',
              bottom: '9px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8B8E98',
              display: 'flex',
              alignItems: 'center',
              zIndex: 99
            }}
          >
            {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
          </button>
        </div>

        <button
          className="sign-in_btn"
          type="submit"
          disabled={isLoading || lockoutState.isLocked}
        >
          {isLoading ? 'Authenticating...' : 'Sign In to Admin Panel'}
        </button>

        <div className="separator">
          <span className="line"></span>
          <span>PROTECTED ACCESS</span>
          <span className="line"></span>
        </div>


        <button
          type="button"
          className="note"
          onClick={() => alert('For security resets, contact system administrator.')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Need help accessing your admin account?
        </button>
      </form>
    </div>
  );
}
