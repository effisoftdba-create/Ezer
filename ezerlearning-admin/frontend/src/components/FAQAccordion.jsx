import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp, HiQuestionMarkCircle } from 'react-icons/hi';

export default function FAQAccordion({ items, title }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '840px', margin: '0 auto' }}>
      {title && (
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', marginBottom: '8px', textAlign: 'center' }}>
          {title}
        </h3>
      )}

      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const questionText = faq.q || faq.question || 'Frequently Asked Question';
        const answerText = faq.a || faq.answer || 'Details regarding EZER Learning Solutions programs.';

        return (
          <div
            key={questionText}
            style={{
              background: '#ffffff',
              border: isOpen ? '2px solid #000648' : '1.5px solid #cbd5e1',
              borderRadius: '14px',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
              boxShadow: isOpen ? '0 8px 24px rgba(0, 6, 72, 0.12)' : '0 2px 8px rgba(0, 6, 72, 0.03)',
            }}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(idx)}
              style={{
                width: '100%',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                background: isOpen ? 'rgba(0, 6, 72, 0.03)' : '#ffffff',
                textAlign: 'left',
                fontWeight: 800,
                fontSize: '0.98rem',
                color: '#000648',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.background = 'rgba(0, 6, 72, 0.02)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.background = '#ffffff';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <HiQuestionMarkCircle size={20} style={{ color: isOpen ? '#f2b733' : '#000648', flexShrink: 0 }} />
                <span style={{ color: '#000648', lineHeight: 1.35 }}>{questionText}</span>
              </div>
              <div
                style={{
                  color: isOpen ? '#000648' : '#64748b',
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  background: isOpen ? '#f2b733' : '#f1f5f9',
                  padding: '4px',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s ease, color 0.2s ease',
                  flexShrink: 0
                }}
              >
                {isOpen ? <HiChevronUp /> : <HiChevronDown />}
              </div>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '16px 22px 20px 54px',
                  color: '#334155',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  borderTop: '1px solid #e2e8f0',
                  background: '#ffffff',
                  animation: 'fadeIn 0.2s ease-in-out',
                }}
              >
                {answerText}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

