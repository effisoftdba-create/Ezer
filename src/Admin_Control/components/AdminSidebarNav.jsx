import React from 'react';

const CATEGORIES = [
  {
    title: 'LEAD MANAGEMENT',
    ids: ['leads']
  },
  {
    title: 'HOMEPAGE & BRANDING',
    ids: ['hero', 'platform', 'support', 'blog']
  },
  {
    title: 'ACADEMY CATALOG',
    ids: ['courses', 'outcomes', 'mentors']
  },
  {
    title: 'TESTIMONIALS & REVIEWS',
    ids: ['videos', 'testimonials']
  },
  {
    title: 'SYSTEM CONFIG',
    ids: ['popup', 'faq', 'contact']
  }
];

export default function AdminSidebarNav({ tabs, activeTab, setActiveTab }) {
  return (
    <aside style={{ width: '280px', flexShrink: 0, height: '100%', overflowY: 'auto' }}>
      <div
        style={{
          background: '#ffffff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '16px',
          padding: '16px 14px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)',
          maxHeight: '100%',
          overflowY: 'auto'
        }}
      >
        {CATEGORIES.map((cat, catIdx) => {
          const categoryTabs = tabs.filter((t) => cat.ids.includes(t.id));
          if (categoryTabs.length === 0) return null;

          return (
            <div key={cat.title} style={{ marginBottom: catIdx === CATEGORIES.length - 1 ? 0 : '16px' }}>
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  color: '#94a3b8',
                  letterSpacing: '0.08em',
                  padding: '4px 10px 8px',
                  textTransform: 'uppercase'
                }}
              >
                {cat.title}
              </div>

              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: 'none',
                      background: isActive
                        ? 'linear-gradient(135deg, #000648 0%, #000c66 100%)'
                        : 'transparent',
                      color: isActive ? '#f2b733' : '#334155',
                      fontWeight: isActive ? 900 : 600,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      marginBottom: '4px',
                      boxShadow: isActive ? '0 4px 14px rgba(0, 6, 72, 0.25)' : 'none',
                      transition: 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                      borderLeft: isActive ? '4px solid #f2b733' : '4px solid transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={18} style={{ color: isActive ? '#f2b733' : '#64748b' }} />
                      <span>{tab.label}</span>
                    </div>

                    {tab.count !== undefined && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 900,
                          padding: '2px 8px',
                          borderRadius: '50px',
                          background: isActive
                            ? 'rgba(242, 183, 51, 0.22)'
                            : '#f1f5f9',
                          color: isActive ? '#f2b733' : '#64748b'
                        }}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
