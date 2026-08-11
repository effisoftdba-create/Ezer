import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiCheck, HiCreditCard, HiQrcode, HiCurrencyRupee, HiTag, HiShieldCheck } from 'react-icons/hi';

export default function CoursePaymentManager() {
  const { paymentConfig, updatePaymentConfig } = useSiteData();

  const [formData, setFormData] = useState(paymentConfig || {
    enrollmentPrice: 9,
    originalPrice: 49999,
    discountBadge: '99% OFF SPECIAL',
    priceLabel: 'Full Course Access + Mentorship',
    enrollmentLabel: 'INSTANT COHORT ENROLLMENT',
    paymentMethods: [
      { id: 'upi', label: 'UPI / GooglePay / PhonePe / Paytm', subtitle: 'Instant QR Code Scan & Pay', enabled: true },
      { id: 'card', label: 'Credit Card / Debit Card', subtitle: 'Visa, MasterCard, RuPay, Amex', enabled: true }
    ],
    payButtonLabel: 'Pay & Unlock Course',
    successMessage: 'Welcome to EZER Learning Solutions!',
    successSubtext: 'Your seat has been locked successfully.'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updatePaymentConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleToggleMethod = (id) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethods: (prev.paymentMethods || []).map((method) =>
        method.id === id ? { ...method, enabled: !method.enabled } : method
      )
    }));
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiCurrencyRupee color="#f2b733" size={26} /> Course Pricing & Payment Gateways Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Control course enrollment fees, discount badges, and active payment gateway options across all live courses.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave}>
        {/* Pricing & Offer Badges Card */}
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,6,72,0.03)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiTag color="#000648" size={20} /> Course Pricing & Discount Config
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="enrollment_price_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Cohort Enrollment Fee (₹) *
              </label>
              <input
                id="enrollment_price_field"
                type="number"
                required
                min={1}
                value={formData.enrollmentPrice || 9}
                onChange={(e) => setFormData((prev) => ({ ...prev, enrollmentPrice: Number(e.target.value) }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', fontWeight: 800, color: '#166534' }}
              />
            </div>

            <div>
              <label htmlFor="original_price_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Original Standard Course Price (₹)
              </label>
              <input
                id="original_price_field"
                type="number"
                value={formData.originalPrice || 49999}
                onChange={(e) => setFormData((prev) => ({ ...prev, originalPrice: Number(e.target.value) }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>

            <div>
              <label htmlFor="discount_badge_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Discount Badge Text
              </label>
              <input
                id="discount_badge_field"
                type="text"
                value={formData.discountBadge || '99% OFF SPECIAL'}
                onChange={(e) => setFormData((prev) => ({ ...prev, discountBadge: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', fontWeight: 700 }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label htmlFor="price_label_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Price Detail Subtitle
              </label>
              <input
                id="price_label_field"
                type="text"
                value={formData.priceLabel || 'Full Course Access + Mentorship'}
                onChange={(e) => setFormData((prev) => ({ ...prev, priceLabel: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="enrollment_label_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Banner Header Title
              </label>
              <input
                id="enrollment_label_field"
                type="text"
                value={formData.enrollmentLabel || 'INSTANT COHORT ENROLLMENT'}
                onChange={(e) => setFormData((prev) => ({ ...prev, enrollmentLabel: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        </div>

        {/* UPI QR Code & Merchant Gateway Settings */}
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,6,72,0.03)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiQrcode color="#000648" size={20} /> Official UPI QR Code & Merchant Config
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <div>
              <label htmlFor="upi_vpa_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                UPI ID / VPA Address *
              </label>
              <input
                id="upi_vpa_field"
                type="text"
                value={formData.upiVpa || 'ezerlearning@okaxis'}
                onChange={(e) => setFormData((prev) => ({ ...prev, upiVpa: e.target.value }))}
                placeholder="e.g. ezerlearning@okaxis"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 800, color: '#000648' }}
              />
            </div>

            <div>
              <label htmlFor="upi_merchant_name_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Merchant Beneficiary Name
              </label>
              <input
                id="upi_merchant_name_field"
                type="text"
                value={formData.upiMerchantName || 'EZER Learning Solutions Pvt. Ltd.'}
                onChange={(e) => setFormData((prev) => ({ ...prev, upiMerchantName: e.target.value }))}
                placeholder="EZER Learning Solutions Pvt. Ltd."
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="upi_qr_image_url_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                UPI QR Code Image URL / Asset Path
              </label>
              <input
                id="upi_qr_image_url_field"
                type="text"
                value={formData.upiQrImageUrl || 'images/payment/upi_qr_code.png'}
                onChange={(e) => setFormData((prev) => ({ ...prev, upiQrImageUrl: e.target.value }))}
                placeholder="images/payment/upi_qr_code.png"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        </div>

        {/* Enabled Payment Gateways */}
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,6,72,0.03)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiShieldCheck color="#000648" size={20} /> Active Payment Gateways & Options
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(formData.paymentMethods || []).map((method) => (
              <div
                key={method.id}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 18px', borderRadius: '12px',
                  border: method.enabled ? '1.5px solid #86efac' : '1.5px solid #cbd5e1',
                  background: method.enabled ? '#f0fdf4' : '#f8fafc'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {method.id === 'upi' ? <HiQrcode size={24} color="#000648" /> : <HiCreditCard size={24} color="#000648" />}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000648' }}>{method.label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{method.subtitle}</div>
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 800, color: method.enabled ? '#166534' : '#64748b' }}>
                  <input
                    type="checkbox"
                    checked={method.enabled}
                    onChange={() => handleToggleMethod(method.id)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  {method.enabled ? 'Enabled' : 'Disabled'}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons & Confirmation Receipt Message */}
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,6,72,0.03)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648' }}>
            Checkout Buttons & Receipt Text
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="pay_button_label_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Pay Button Base Label
              </label>
              <input
                id="pay_button_label_field"
                type="text"
                value={formData.payButtonLabel || 'Pay & Unlock Course'}
                onChange={(e) => setFormData((prev) => ({ ...prev, payButtonLabel: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="success_message_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Success Receipt Header
              </label>
              <input
                id="success_message_field"
                type="text"
                value={formData.successMessage || 'Welcome to EZER Learning Solutions!'}
                onChange={(e) => setFormData((prev) => ({ ...prev, successMessage: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
          {savedSuccess && <span style={{ color: '#166534', fontWeight: 800, fontSize: '0.88rem' }}>✓ Pricing & Payment Config Saved Live!</span>}
          <button
            type="submit"
            style={{
              padding: '12px 28px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '10px', fontWeight: 900, fontSize: '0.95rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
              boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
            }}
          >
            <HiCheck size={20} /> Save Pricing Config
          </button>
        </div>
      </form>
    </div>
  );
}
