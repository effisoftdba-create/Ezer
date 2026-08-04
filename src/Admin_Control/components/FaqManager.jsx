import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiQuestionMarkCircle } from 'react-icons/hi';

export default function FaqManager() {
  const { faqList, updateFaqList } = useSiteData();

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [editingItemIdx, setEditingItemIdx] = useState(null);

  const [formData, setFormData] = useState({ q: '', a: '' });

  const currentCategory = faqList[selectedCategoryIdx] || faqList[0] || { category: 'Program', items: [] };

  const handleOpenAdd = () => {
    setEditingItemIdx(null);
    setFormData({ q: '', a: '' });
    setIsEditingItem(true);
  };

  const handleOpenEdit = (idx, item) => {
    setEditingItemIdx(idx);
    setFormData({ q: item.q || '', a: item.a || '' });
    setIsEditingItem(true);
  };

  const handleSaveItem = (e) => {
    e.preventDefault();
    if (!formData.q || !formData.a) {
      alert('Question and Answer are required.');
      return;
    }

    const updatedFaqList = [...faqList];
    const categoryObj = { ...updatedFaqList[selectedCategoryIdx] };
    const items = [...(categoryObj.items || [])];

    if (editingItemIdx !== null) {
      items[editingItemIdx] = formData;
    } else {
      items.push(formData);
    }

    categoryObj.items = items;
    updatedFaqList[selectedCategoryIdx] = categoryObj;

    updateFaqList(updatedFaqList);
    setIsEditingItem(false);
  };

  const handleDeleteItem = (idx, question) => {
    if (window.confirm(`Are you sure you want to delete this FAQ?\n"${question}"`)) {
      const updatedFaqList = [...faqList];
      const categoryObj = { ...updatedFaqList[selectedCategoryIdx] };
      categoryObj.items = categoryObj.items.filter((_, i) => i !== idx);
      updatedFaqList[selectedCategoryIdx] = categoryObj;

      updateFaqList(updatedFaqList);
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            FAQ Questions & Answers Control
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Add, update, or remove Frequently Asked Questions across all program categories.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new FAQ question"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add FAQ Question
        </button>
      </div>

      {/* Category Selection Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {faqList.map((cat, idx) => (
          <button
            type="button"
            key={cat.category}
            onClick={() => {
              setSelectedCategoryIdx(idx);
              setIsEditingItem(false);
            }}
            aria-label={`Select category ${cat.category}`}
            style={{
              padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1',
              background: selectedCategoryIdx === idx ? '#000648' : '#ffffff',
              color: selectedCategoryIdx === idx ? '#f2b733' : '#475569',
              fontWeight: selectedCategoryIdx === idx ? 800 : 600,
              fontSize: '0.85rem', cursor: 'pointer'
            }}
          >
            {cat.category} ({cat.items?.length || 0})
          </button>
        ))}
      </div>

      {isEditingItem && (
        <form onSubmit={handleSaveItem} style={{
          background: '#f8fafc', border: '2px solid #cbd5e1', borderRadius: '14px',
          padding: '20px', marginBottom: '24px'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648' }}>
            {editingItemIdx !== null ? 'Edit FAQ Item' : `Add New FAQ under "${currentCategory.category}"`}
          </h3>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="faq_question_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Question Title *
            </label>
            <input
              id="faq_question_input"
              type="text"
              value={formData.q}
              onChange={(e) => setFormData({ ...formData, q: e.target.value })}
              placeholder="e.g. What is EZER Learning Solution's core difference?"
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="faq_answer_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Answer Description *
            </label>
            <textarea
              id="faq_answer_input"
              rows={3}
              value={formData.a}
              onChange={(e) => setFormData({ ...formData, a: e.target.value })}
              placeholder="Detailed answer text..."
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditingItem(false)}
              aria-label="Cancel editing"
              style={{ padding: '8px 14px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save FAQ"
              style={{ padding: '8px 18px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save FAQ
            </button>
          </div>
        </form>
      )}

      {/* FAQ Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {currentCategory.items?.map((item, idx) => (
          <div
            key={item.id || item.q}
            style={{
              background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px',
              padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px'
            }}
          >
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HiQuestionMarkCircle size={18} color="#115DFC" /> {item.q}
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                {item.a}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => handleOpenEdit(idx, item)}
                aria-label={`Edit FAQ ${item.q}`}
                style={{ padding: '6px 10px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiPencil size={14} /> Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteItem(idx, item.q)}
                aria-label={`Delete FAQ ${item.q}`}
                style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiTrash size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
