import React from 'react';
import { HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClock, HiOutlineAcademicCap } from 'react-icons/hi';

const items = [
  { icon: <HiOutlineShieldCheck size={20} />, label: '12-Month Career Placement Support' },
  { icon: <HiOutlineUserGroup size={20} />, label: 'Mentorship by Industry Practitioners' },
  { icon: <HiOutlineClock size={20} />, label: 'Alumni & Peer Community*' },
  { icon: <HiOutlineAcademicCap size={20} />, label: 'Learning Management Access' },
];

export default function TrustBar() {
  return (
    <section style={{ background: '#000648', padding: '14px 0' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px',
      }}>
        {items.map((item) => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 500,
          }}>
            <span style={{ color: '#f2b733' }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
