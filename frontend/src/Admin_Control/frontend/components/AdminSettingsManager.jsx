import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { getCurrentAdminUser } from '../utils/authService';
import {
  HiOutlineUserAdd,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineKey,
  HiOutlineLockClosed,
  HiOutlineTrash,
  HiOutlineCheck,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineSparkles,
  HiCheck
} from 'react-icons/hi';

const MODULE_OPTIONS = [
  { id: 'leads', label: 'Lead Submissions', category: 'Financial & Leads' },
  { id: 'payments-received', label: 'Payments Received', category: 'Financial & Leads' },
  { id: 'payment', label: 'Course Fees & Gateway Config', category: 'Financial & Leads' },
  { id: 'courses', label: 'Course Catalog', category: 'Catalog & Curriculum' },
  { id: 'hero', label: 'Hero Slider', category: 'Homepage & Branding' },
  { id: 'partners', label: 'Hiring Partners & Logos', category: 'Homepage & Branding' },
  { id: 'platform', label: 'Empowering Switchers', category: 'Homepage & Branding' },
  { id: 'about-videos', label: 'About Us Brand Videos', category: 'Homepage & Branding' },
  { id: 'support', label: 'Why EZER Support', category: 'Homepage & Branding' },
  { id: 'executive', label: 'Executive Board (CEO / Leaders)', category: 'Corporate & Editorial' },
  { id: 'blog', label: 'Blog & Magazine Articles', category: 'Corporate & Editorial' },
  { id: 'achievements', label: 'EZER Awards & Honors', category: 'Corporate & Editorial' },
  { id: 'outcomes', label: 'Graduate Outcomes', category: 'Reviews & Social Proof' },
  { id: 'mentors', label: 'Senior Mentors', category: 'Reviews & Social Proof' },
  { id: 'videos', label: 'Video Reviews', category: 'Reviews & Social Proof' },
  { id: 'testimonials', label: 'Testimonials Page', category: 'Reviews & Social Proof' },
  { id: 'popup', label: 'Lead Popup Modal', category: 'System & Utilities' },
  { id: 'faq', label: 'FAQ Manager', category: 'System & Utilities' },
  { id: 'contact', label: 'Contact Details', category: 'System & Utilities' },
  { id: 'settings', label: 'Admin Settings & RBAC Users', category: 'System & Utilities' }
];

export default function AdminSettingsManager() {
  const { adminUsers, addAdminUser, updateAdminUser, deleteAdminUser } = useSiteData();
  const currentLoggedUser = getCurrentAdminUser();

  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    allowedTabs: ['leads', 'courses', 'blog']
  });

  const [showPassword, setShowPassword] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [resetPassUser, setResetPassUser] = useState(null);
  const [newPasswordInput, setNewPasswordInput] = useState('');

  const userList = Array.isArray(adminUsers) ? adminUsers : [];

  const handleToggleModule = (moduleId) => {
    setForm((prev) => {
      const current = Array.isArray(prev.allowedTabs) ? prev.allowedTabs : [];
      if (current.includes(moduleId)) {
        return { ...prev, allowedTabs: current.filter((id) => id !== moduleId) };
      } else {
        return { ...prev, allowedTabs: [...current, moduleId] };
      }
    });
  };

  const handleSelectAll = () => {
    setForm((prev) => ({ ...prev, allowedTabs: MODULE_OPTIONS.map((m) => m.id) }));
  };

  const handleClearAll = () => {
    setForm((prev) => ({ ...prev, allowedTabs: [] }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.password) {
      alert('Please fill out User ID / Email, Full Name, and Password.');
      return;
    }

    const emailClean = form.email.trim().toLowerCase();
    const isDup = userList.some((u) => u.email.trim().toLowerCase() === emailClean);
    if (isDup || emailClean === 'effisoftdba@gmail.com') {
      alert(`User ID "${emailClean}" already exists. Please enter a unique email address.`);
      return;
    }

    addAdminUser({
      email: emailClean,
      name: form.name.trim(),
      password: form.password.trim(),
      role: 'SUB_ADMIN',
      allowedTabs: form.allowedTabs,
      status: 'ACTIVE'
    });

    setForm({
      email: '',
      name: '',
      password: '',
      allowedTabs: ['leads', 'courses', 'blog']
    });
    alert(`Admin account created for "${form.name.trim()}"!`);
  };

  const handleToggleStatus = (user) => {
    if (user.email === 'effisoftdba@gmail.com') {
      alert('Super Admin account cannot be disabled.');
      return;
    }
    const nextStatus = user.status === 'DISABLED' ? 'ACTIVE' : 'DISABLED';
    if (window.confirm(`Set status of "${user.name}" to ${nextStatus}?`)) {
      updateAdminUser(user.id, { status: nextStatus });
    }
  };

  const handleDeleteUser = (user) => {
    if (user.email === 'effisoftdba@gmail.com') {
      alert('Super Admin account cannot be deleted.');
      return;
    }
    if (window.confirm(`Permanently delete admin account for "${user.name}" (${user.email})?`)) {
      deleteAdminUser(user.id);
    }
  };

  const handleSaveEditPermissions = (e) => {
    e.preventDefault();
    if (!editingUser) return;
    updateAdminUser(editingUser.id, { allowedTabs: editingUser.allowedTabs });
    setEditingUser(null);
    alert(`Access permissions updated for "${editingUser.name}"!`);
  };

  const handleSaveResetPassword = (e) => {
    e.preventDefault();
    if (!resetPassUser || !newPasswordInput) return;
    updateAdminUser(resetPassUser.id, { password: newPasswordInput.trim() });
    setResetPassUser(null);
    setNewPasswordInput('');
    alert(`Password reset successfully for "${resetPassUser.name}"!`);
  };

  return (
    <div>
      {/* Header Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '20px', paddingBottom: '14px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiOutlineUserGroup size={24} color="#115DFC" />
            Admin Account & Role-Based Access Control (RBAC)
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Create custom admin login IDs, set individual module access permissions, and manage active administrator credentials securely.
          </p>
        </div>
      </div>

      {/* Metrics Header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px', marginBottom: '22px' }}>
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '12px 16px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Total Admin Accounts
          </span>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>
            {userList.length} User(s)
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '12px 16px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Active Accounts
          </span>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#15803d', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiOutlineShieldCheck size={20} />
            {userList.filter((u) => u.status !== 'DISABLED').length} Active
          </div>
        </div>

        <div style={{ background: '#f0f4ff', border: '1.5px solid #c7d2fe', borderRadius: '12px', padding: '12px 16px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#3730a3', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Database Security
          </span>
          <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#312e81', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            🔒 Dual Sync & Encrypted Vault
          </div>
        </div>
      </div>

      {/* CREATE NEW ADMIN ACCOUNT FORM */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '28px', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000648', marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiOutlineUserAdd size={22} color="#000648" /> Create New Admin User Account
        </h3>

        <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            <div>
              <label htmlFor="new_admin_email" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                User ID / Login Email *
              </label>
              <input
                id="new_admin_email"
                type="email"
                required
                placeholder="e.g. counselor1@ezer.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>

            <div>
              <label htmlFor="new_admin_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                Full Name / Username *
              </label>
              <input
                id="new_admin_name"
                type="text"
                required
                placeholder="e.g. Ananya Sharma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>

            <div>
              <label htmlFor="new_admin_password" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                Login Password *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="new_admin_password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Set initial password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  style={{ width: '100%', padding: '10px 36px 10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem', outline: 'none' }}
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
                >
                  {showPassword ? <HiOutlineEyeOff size={16} /> : <HiOutlineEye size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Module Permission Checkboxes Matrix */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#000648' }}>
                Select Accessible Admin Modules (Tick checkboxes to grant access) *
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handleSelectAll}
                  style={{ background: '#e0e7ff', color: '#3730a3', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer' }}
                >
                  Select All
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  style={{ background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer' }}
                >
                  Clear All
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {MODULE_OPTIONS.map((mod) => {
                const isChecked = Array.isArray(form.allowedTabs) && form.allowedTabs.includes(mod.id);
                return (
                  <label
                    key={mod.id}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px',
                      borderRadius: '8px', border: isChecked ? '1.5px solid #000648' : '1px solid #cbd5e1',
                      background: isChecked ? '#f0f4ff' : '#ffffff', cursor: 'pointer', fontSize: '0.76rem', fontWeight: isChecked ? 800 : 600, color: '#000648'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleModule(mod.id)}
                      style={{ width: '15px', height: '15px', accentColor: '#000648', cursor: 'pointer' }}
                    />
                    {mod.label}
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '50px', fontWeight: 900, fontSize: '0.92rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              alignSelf: 'flex-start', boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
            }}
          >
            <HiOutlineUserAdd size={18} /> Create Admin Account & Assign Access
          </button>
        </form>
      </div>

      {/* EXISTING ADMIN USERS TABLE */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', overflowX: 'auto', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1.5px solid #e2e8f0', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 900, color: '#000648', margin: 0 }}>
            Registered Administrator Accounts ({userList.length})
          </h3>
        </div>

        <table style={{ width: '100%', minWidth: '850px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#000648', fontWeight: 800, fontSize: '0.75rem' }}>
              <th style={{ padding: '12px 16px' }}>User ID / Email</th>
              <th style={{ padding: '12px 16px' }}>Name / Role</th>
              <th style={{ padding: '12px 16px' }}>Granted Modules Access</th>
              <th style={{ padding: '12px 16px' }}>Status</th>
              <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((usr) => {
              const isSuper = usr.email === 'effisoftdba@gmail.com' || usr.role === 'SUPER_ADMIN';
              const allowedList = usr.allowedTabs === '*' ? 'Full Access (All Modules)' : (Array.isArray(usr.allowedTabs) ? `${usr.allowedTabs.length} Modules Allowed` : 'No Access');

              return (
                <tr key={usr.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 800, color: '#000648' }}>
                    {usr.email}
                    {isSuper && <span style={{ marginLeft: '6px', background: '#f2b733', color: '#000648', fontSize: '0.65rem', fontWeight: 900, padding: '2px 6px', borderRadius: '4px' }}>SUPER ADMIN</span>}
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#334155' }}>
                    {usr.name}
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>
                    <span style={{ background: isSuper ? '#f0f4ff' : '#f1f5f9', color: isSuper ? '#115DFC' : '#334155', padding: '3px 8px', borderRadius: '6px', fontWeight: 800 }}>
                      {allowedList}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <button
                      type="button"
                      onClick={() => handleToggleStatus(usr)}
                      style={{
                        background: usr.status === 'DISABLED' ? '#fef2f2' : '#f0fdf4',
                        color: usr.status === 'DISABLED' ? '#dc2626' : '#166534',
                        border: usr.status === 'DISABLED' ? '1px solid #fecaca' : '1px solid #bbf7d0',
                        borderRadius: '50px', padding: '3px 10px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer'
                      }}
                    >
                      {usr.status === 'DISABLED' ? '✖ Disabled' : '✔ Active'}
                    </button>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                      {!isSuper && (
                        <button
                          type="button"
                          onClick={() => setEditingUser({ ...usr })}
                          style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '6px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                        >
                          <HiOutlinePencilAlt size={14} /> Permissions
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setResetPassUser({ ...usr })}
                        style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '6px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                      >
                        <HiOutlineKey size={14} /> Password
                      </button>
                      {!isSuper && (
                        <button
                          type="button"
                          aria-label={`Delete admin user ${usr.name}`}
                          onClick={() => handleDeleteUser(usr)}
                          style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', padding: '4px 8px', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer' }}
                        >
                          <HiOutlineTrash size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* EDIT PERMISSIONS MODAL */}
      {editingUser && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(6px)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000648', marginTop: 0 }}>
              Edit Access Permissions: {editingUser.name} ({editingUser.email})
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', margin: '16px 0' }}>
              {MODULE_OPTIONS.map((mod) => {
                const currentAllowed = Array.isArray(editingUser.allowedTabs) ? editingUser.allowedTabs : [];
                const isChecked = currentAllowed.includes(mod.id);
                return (
                  <label key={mod.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: isChecked ? 800 : 500 }}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {
                        const updated = isChecked ? currentAllowed.filter((id) => id !== mod.id) : [...currentAllowed, mod.id];
                        setEditingUser({ ...editingUser, allowedTabs: updated });
                      }}
                    />
                    {mod.label}
                  </label>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button type="button" onClick={() => setEditingUser(null)} style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '8px', fontWeight: 800 }}>Cancel</button>
              <button type="button" onClick={handleSaveEditPermissions} style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900 }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* RESET PASSWORD MODAL */}
      {resetPassUser && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(6px)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', maxWidth: '420px', width: '100%' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000648', marginTop: 0 }}>
              Reset Password for {resetPassUser.name}
            </h3>
            <div style={{ margin: '14px 0' }}>
              <label htmlFor="reset_new_password_input" style={{ fontSize: '0.78rem', fontWeight: 800, display: 'block', marginBottom: '4px' }}>New Password *</label>
              <input
                id="reset_new_password_input"
                type="text"
                required
                placeholder="Enter new password"
                value={newPasswordInput}
                onChange={(e) => setNewPasswordInput(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setResetPassUser(null)} style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '8px', fontWeight: 800 }}>Cancel</button>
              <button type="button" onClick={handleSaveResetPassword} style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900 }}>Update Password</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
