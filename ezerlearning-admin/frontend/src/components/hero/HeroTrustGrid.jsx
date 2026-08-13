import React from 'react';
import { HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';

const trustSignals = [
  {
    title: 'Up to 1-Year Placement Support',
    sub: 'Continuous resume & interview prep',
    icon: <HiOutlineShieldCheck size={18} />
  },
  {
    title: 'Corporate Practitioner Trainers',
    sub: 'Active senior tech leads from top firms',
    icon: <HiOutlineUserGroup size={18} />
  }
];

export default function HeroTrustGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px',
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(0, 6, 56, 0.1)',
      }}
    >
      {trustSignals.map((item) => (
        <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000638' }}>
          <div style={{ color: '#000638', background: '#f2b733', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            {item.icon}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, lineHeight: 1.2 }}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
