import React, { useMemo, useState } from 'react';
import { HiOutlineSearch, HiOutlineChevronDown, HiOutlineX } from 'react-icons/hi';
import './AdminSidebarNav.css';

const CATEGORIES = [
  {
    title: 'FINANCIAL & LEADS',
    ids: ['leads', 'payments-received', 'payment']
  },
  {
    title: 'HOMEPAGE & BRANDING',
    ids: ['hero', 'partners', 'platform', 'about-page', 'about-videos', 'about-showcase', 'support', 'executive']
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
    title: 'BLOG & AWARDS PAGE',
    ids: ['blog', 'achievements']
  },
  {
    title: 'SYSTEM CONFIG',
    ids: ['popup', 'faq', 'contact', 'settings']
  }
];

export default function AdminSidebarNav({ tabs, activeTab, setActiveTab, isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState(() => new Set());

  const toggleCategory = (title) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    const categorizedIds = new Set(CATEGORIES.flatMap((c) => c.ids));
    const list = CATEGORIES.map((cat) => ({
      ...cat,
      tabs: tabs.filter((t) => cat.ids.includes(t.id) && (!normalizedQuery || t.label.toLowerCase().includes(normalizedQuery)))
    })).filter((cat) => cat.tabs.length > 0);

    const uncategorizedTabs = tabs.filter(
      (t) => !categorizedIds.has(t.id) && (!normalizedQuery || t.label.toLowerCase().includes(normalizedQuery))
    );

    if (uncategorizedTabs.length > 0) {
      list.push({
        title: 'OTHER MODULES',
        ids: uncategorizedTabs.map((t) => t.id),
        tabs: uncategorizedTabs
      });
    }

    return list;
  }, [tabs, normalizedQuery]);

  const handleSelect = (tabId) => {
    setActiveTab(tabId);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="admin-sidebar-backdrop"
          onClick={onClose}
          aria-label="Close navigation sidebar overlay"
        />
      )}

      <aside className={`admin-sidebar${isOpen ? ' is-open' : ''}`}>
        <div className="admin-sidebar-panel">
          <div className="admin-sidebar-head">
            <div className="admin-sidebar-head-row">
              <span className="admin-sidebar-heading">Navigation</span>
              <button type="button" className="admin-sidebar-close" onClick={onClose} aria-label="Close navigation menu">
                <HiOutlineX size={17} />
              </button>
            </div>

            <div className="admin-sidebar-search">
              <HiOutlineSearch size={16} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections..."
                aria-label="Search admin navigation"
              />
            </div>
          </div>

          <div className="admin-sidebar-body">
            {visibleCategories.length === 0 && (
              <div className="admin-sidebar-empty">No sections match "{query}"</div>
            )}

            {visibleCategories.map((cat) => {
              const isCollapsed = !normalizedQuery && collapsed.has(cat.title);

              return (
                <div key={cat.title} className="admin-sidebar-category">
                  <button
                    type="button"
                    className="admin-sidebar-cat-btn"
                    onClick={() => toggleCategory(cat.title)}
                    aria-expanded={!isCollapsed}
                  >
                    <span className="admin-sidebar-cat-title">{cat.title}</span>
                    <HiOutlineChevronDown
                      size={14}
                      className={`admin-sidebar-cat-chevron${isCollapsed ? ' is-collapsed' : ''}`}
                    />
                  </button>

                  <div className={`admin-sidebar-cat-list${isCollapsed ? ' is-collapsed' : ''}`}>
                    {cat.tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;

                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => handleSelect(tab.id)}
                          className={`admin-sidebar-item${isActive ? ' is-active' : ''}`}
                        >
                          <span className="admin-sidebar-item-label">
                            {Icon ? <Icon size={18} className="admin-sidebar-item-icon" /> : null}
                            <span>{tab.label}</span>
                          </span>

                          {tab.count !== undefined && (
                            <span className="admin-sidebar-count">{tab.count}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="admin-sidebar-foot">EZER Admin Console</div>
        </div>
      </aside>
    </>
  );
}
