import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiQuestionMarkCircle, HiX } from 'react-icons/hi';

export default function FaqManager() {
  const { faqList, updateFaqList } = useSiteData();

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [editingItemIdx, setEditingItemIdx] = useState(null);

  const [formData, setFormData] = useState({ q: '', a: '' });
  const [formErrors, setFormErrors] = useState({});

  const currentCategory = faqList[selectedCategoryIdx] || faqList[0] || { category: 'Program', items: [] };

  const handleOpenAdd = () => {
    setEditingItemIdx(null);
    setFormData({ q: '', a: '' });
    setFormErrors({});
    setIsEditingItem(true);
  };

  const handleOpenEdit = (idx, item) => {
    setEditingItemIdx(idx);
    setFormData({ q: item.q || '', a: item.a || '' });
    setFormErrors({});
    setIsEditingItem(true);
  };

  const handleSaveItem = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.q?.trim()) errors.q = true;
    if (!formData.a?.trim()) errors.a = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

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

      {/* Editor Modal Portal */}
      {isEditingItem && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsEditingItem(false);
          }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', animation: 'fadeIn 0.2s ease'
          }}
        >
          <div
            style={{
              background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '560px',
              boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
              overflow: 'hidden', animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'flex', flexDirection: 'column', maxHeight: '90vh'
            }}
          >
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  FAQ QUESTION EDITOR
                </span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingItemIdx !== null ? 'Edit FAQ Item' : `Add New FAQ under "${currentCategory.category}"`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditingItem(false)}
                aria-label="Close modal button"
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveItem} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Object.keys(formErrors).length > 0 && (
                <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 800 }}>
                  ⚠️ Please fill in all required fields highlighted in red below before saving.
                </div>
              )}

              <div>
                <label htmlFor="faq_question_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: formErrors.q ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                  Question Title *
                </label>
                <input
                  id="faq_question_input"
                  type="text"
                  value={formData.q}
                  onChange={(e) => {
                    setFormData({ ...formData, q: e.target.value });
                    if (formErrors.q) setFormErrors((prev) => ({ ...prev, q: false }));
                  }}
                  placeholder="e.g. What is EZER Learning Solution's core difference?"
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: formErrors.q ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                    background: formErrors.q ? '#fff5f5' : '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
                {formErrors.q && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Question title is required</span>}
              </div>

              <div>
                <label htmlFor="faq_answer_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: formErrors.a ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                  Answer Description *
                </label>
                <textarea
                  id="faq_answer_input"
                  rows={4}
                  value={formData.a}
                  onChange={(e) => {
                    setFormData({ ...formData, a: e.target.value });
                    if (formErrors.a) setFormErrors((prev) => ({ ...prev, a: false }));
                  }}
                  placeholder="Detailed answer text..."
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: formErrors.a ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                    background: formErrors.a ? '#fff5f5' : '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
                {formErrors.a && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Answer description is required</span>}
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditingItem(false)}
                  style={{ padding: '9px 18px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}
                >
                  <HiCheck size={18} /> Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* FAQ Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {currentCategory.items?.map((item, idx) => (
          <div
            key={item.id || `faq-idx-${idx}`}
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
