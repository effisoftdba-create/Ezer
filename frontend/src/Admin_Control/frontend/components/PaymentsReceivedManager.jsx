import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import {
  HiOutlineCurrencyRupee,
  HiOutlineCheckCircle,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlinePlus,
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlinePrinter,
  HiX,
  HiCheck
} from 'react-icons/hi';

function printPdfReceipt(payment) {
  const printWin = window.open('', '_blank', 'width=800,height=900');
  if (!printWin) {
    alert('Please allow popups to download/print the PDF receipt.');
    return;
  }
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>EZER Payment Receipt - ${payment.upiTransactionId}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff; color: #000648; padding: 40px; margin: 0; }
          .receipt-card { border: 2px solid #000648; border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; background: #ffffff; }
          .header { text-align: center; border-bottom: 2px dashed #e2e8f0; padding-bottom: 20px; margin-bottom: 24px; }
          .logo { font-size: 24px; font-weight: 900; color: #000648; letter-spacing: -0.5px; }
          .logo span { color: #f2b733; }
          .badge { display: inline-block; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; font-weight: 800; font-size: 13px; padding: 6px 16px; border-radius: 50px; margin-top: 10px; }
          .amount { font-size: 36px; font-weight: 900; color: #000648; margin: 16px 0 4px 0; text-align: center; }
          .subtext { text-align: center; color: #64748b; font-size: 13px; margin-bottom: 24px; }
          .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .row .label { color: #64748b; font-weight: 600; }
          .row .value { color: #000648; font-weight: 800; text-align: right; }
          .footer { text-align: center; margin-top: 32px; font-size: 12px; color: #94a3b8; }
          @media print {
            body { padding: 0; }
            .receipt-card { border: none; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-card">
          <div class="header">
            <div class="logo">EZER <span>LEARNING SOLUTIONS</span></div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Official Payment Confirmation & Tax Invoice</div>
            <div class="badge">✔ PAYMENT SUCCESSFUL</div>
          </div>
          <div class="amount">₹${Number(payment.amount).toLocaleString('en-IN')}.00</div>
          <div class="subtext">Paid via ${payment.paymentMethod || 'UPI Payment'}</div>

          <div class="row"><span class="label">Paid To</span><span class="value">${payment.paidTo || 'EZER Learning Solutions Pvt Ltd'}</span></div>
          <div class="row"><span class="label">Student Name</span><span class="value">${payment.studentName}</span></div>
          <div class="row"><span class="label">UPI / Ref ID</span><span class="value">${payment.upiTransactionId}</span></div>
          <div class="row"><span class="label">Course Title</span><span class="value">${payment.courseName || 'Cohort Enrolled'}</span></div>
          <div class="row"><span class="label">Paid From Account</span><span class="value">${payment.paidFrom || payment.email || 'UPI Account'}</span></div>
          <div class="row"><span class="label">Transaction Date</span><span class="value">${payment.paymentDate || new Date().toLocaleString()}</span></div>
          <div class="row"><span class="label">Payment Status</span><span class="value" style="color:#166534;">SETTLED & VERIFIED</span></div>

          <div class="footer">
            This is a computer-generated digital receipt. No signature required.<br/>
            EZER Learning Solutions Pvt. Ltd. • Support: support@ezerlearning.com
          </div>
        </div>
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `;
  printWin.document.write(htmlContent);
  printWin.document.close();
}

export default function PaymentsReceivedManager() {
  const { payments, addPayment, deletePayment } = useSiteData();
  const paymentList = Array.isArray(payments) ? payments : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedShareId, setCopiedShareId] = useState(null);

  const [newPayForm, setNewPayForm] = useState({
    studentName: '',
    email: '',
    phone: '',
    amount: 49999,
    upiTransactionId: '',
    paymentMethod: 'Google Pay (UPI)',
    paidFrom: '',
    courseName: 'Full Stack Development with AI'
  });

  const filteredPayments = paymentList.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      (p.studentName || '').toLowerCase().includes(term) ||
      (p.upiTransactionId || '').toLowerCase().includes(term) ||
      (p.email || '').toLowerCase().includes(term) ||
      (p.phone || '').toLowerCase().includes(term) ||
      (p.courseName || '').toLowerCase().includes(term)
    );
  });

  const totalCollected = paymentList.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  const totalCount = paymentList.length;
  const avgAmount = totalCount > 0 ? Math.round(totalCollected / totalCount) : 0;

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newPayForm.studentName || !newPayForm.upiTransactionId) {
      alert('Please fill out student name and transaction ID.');
      return;
    }
    addPayment(newPayForm);
    setIsAddModalOpen(false);
    setNewPayForm({
      studentName: '',
      email: '',
      phone: '',
      amount: 49999,
      upiTransactionId: '',
      paymentMethod: 'Google Pay (UPI)',
      paidFrom: '',
      courseName: 'Full Stack Development with AI'
    });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete payment record for "${name}"?`)) {
      deletePayment(id);
    }
  };

  const handleShareSummary = (payment) => {
    const text = `EZER PAYMENT RECEIPT\nStudent: ${payment.studentName}\nAmount: ₹${payment.amount}\nUPI Txn ID: ${payment.upiTransactionId}\nCourse: ${payment.courseName}\nPaid Via: ${payment.paymentMethod}\nStatus: VERIFIED SUCCESSFUL`;
    navigator.clipboard.writeText(text);
    setCopiedShareId(payment.id);
    setTimeout(() => setCopiedShareId(null), 2500);
  };

  return (
    <div>
      {/* Header Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiOutlineCurrencyRupee size={26} color="#115DFC" />
            Payments Received & Financial Reports
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Track live student fee collections, UPI transaction reference numbers, Google Pay receipts, and PDF exports.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          aria-label="Record new student payment"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiOutlinePlus size={18} /> Record New Payment
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px', marginBottom: '24px'
      }}>
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '18px 20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Total Revenue Collected
          </span>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#000648', marginTop: '4px' }}>
            ₹{totalCollected.toLocaleString('en-IN')}
          </div>
        </div>

        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '18px 20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Successful Transactions
          </span>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#000648', marginTop: '4px' }}>
            {totalCount} Payments
          </div>
        </div>

        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '18px 20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Average Fee Payment
          </span>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#000648', marginTop: '4px' }}>
            ₹{avgAmount.toLocaleString('en-IN')}
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '14px', padding: '18px 20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Payment Verification
          </span>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#15803d', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiOutlineCheckCircle size={20} /> 100% Dual Synced
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ marginBottom: '20px', position: 'relative', maxWidth: '420px' }}>
        <label htmlFor="search-payments-input" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          Search Payments
        </label>
        <HiOutlineSearch size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
        <input
          id="search-payments-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search payment records"
          placeholder="Search by student name, UPI Txn ID, or phone..."
          style={{
            width: '100%', padding: '10px 14px 10px 42px', borderRadius: '10px',
            border: '1.5px solid #cbd5e1', fontSize: '0.875rem', outline: 'none'
          }}
        />
      </div>

      {/* Payments Table */}
      <div style={{
        background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px',
        overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#000648', fontWeight: 800 }}>
              <th style={{ padding: '14px 18px' }}>Student Name</th>
              <th style={{ padding: '14px 18px' }}>Amount</th>
              <th style={{ padding: '14px 18px' }}>UPI Txn / Ref ID</th>
              <th style={{ padding: '14px 18px' }}>Payment Channel</th>
              <th style={{ padding: '14px 18px' }}>Course Title</th>
              <th style={{ padding: '14px 18px' }}>Date</th>
              <th style={{ padding: '14px 18px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>
                  No payment records found matching search.
                </td>
              </tr>
            ) : (
              filteredPayments.map((pay) => (
                <tr key={pay.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 18px', fontWeight: 800, color: '#000648' }}>
                    {pay.studentName}
                    {pay.phone && <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>{pay.phone}</div>}
                  </td>
                  <td style={{ padding: '14px 18px', fontWeight: 900, color: '#15803d' }}>
                    ₹{Number(pay.amount).toLocaleString('en-IN')}
                  </td>
                  <td style={{ padding: '14px 18px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#334155', fontWeight: 700 }}>
                    {pay.upiTransactionId}
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <span style={{ background: '#f1f5f9', color: '#000648', padding: '3px 8px', borderRadius: '6px', fontWeight: 700, fontSize: '0.75rem' }}>
                      {pay.paymentMethod || 'UPI'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 18px', color: '#475569', fontWeight: 600 }}>
                    {pay.courseName || 'General Cohort'}
                  </td>
                  <td style={{ padding: '14px 18px', color: '#64748b', fontSize: '0.78rem' }}>
                    {pay.paymentDate}
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => setSelectedReceipt(pay)}
                        aria-label={`View receipt for ${pay.studentName}`}
                        title="View Google Pay Receipt Modal"
                        style={{ padding: '6px 10px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <HiOutlineEye size={14} /> Receipt
                      </button>

                      <button
                        type="button"
                        onClick={() => printPdfReceipt(pay)}
                        aria-label={`Print PDF receipt for ${pay.studentName}`}
                        title="Download / Print PDF Receipt"
                        style={{ padding: '6px 10px', background: '#f1f5f9', color: '#000648', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <HiOutlinePrinter size={14} /> PDF
                      </button>

                      <button
                        type="button"
                        onClick={() => handleShareSummary(pay)}
                        aria-label={`Share payment report for ${pay.studentName}`}
                        title="Copy payment summary report for WhatsApp/Email"
                        style={{ padding: '6px 10px', background: copiedShareId === pay.id ? '#dcfce7' : '#f8fafc', color: copiedShareId === pay.id ? '#15803d' : '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        {copiedShareId === pay.id ? <HiCheck size={14} /> : <HiOutlineShare size={14} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(pay.id, pay.studentName)}
                        aria-label={`Delete payment record for ${pay.studentName}`}
                        title="Delete Record"
                        style={{ padding: '6px 8px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', cursor: 'pointer' }}
                      >
                        <HiOutlineTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Google Pay-Style Payment Report Receipt Modal */}
      {selectedReceipt && ReactDOM.createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', width: '100%', maxWidth: '460px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', border: '2px solid #000648' }}>
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                DIGITAL PAYMENT REPORT
              </span>
              <button type="button" onClick={() => setSelectedReceipt(null)} aria-label="Close modal" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HiX size={16} />
              </button>
            </div>

            <div style={{ padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: '#f0fdf4', border: '2px solid #bbf7d0', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <HiOutlineCheckCircle size={36} />
              </div>

              <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '0.75rem', fontWeight: 900, padding: '4px 14px', borderRadius: '50px', display: 'inline-block' }}>
                ✔ PAYMENT SUCCESSFUL & SETTLED
              </span>

              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#000648', margin: '14px 0 2px' }}>
                ₹{Number(selectedReceipt.amount).toLocaleString('en-IN')}.00
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                Paid via {selectedReceipt.paymentMethod}
              </div>

              <div style={{ margin: '20px 0', borderTop: '1.5px dashed #cbd5e1', borderBottom: '1.5px dashed #cbd5e1', padding: '14px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Paid To:</span>
                  <span style={{ color: '#000648', fontWeight: 800 }}>{selectedReceipt.paidTo || 'EZER Learning Solutions'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Student Name:</span>
                  <span style={{ color: '#000648', fontWeight: 800 }}>{selectedReceipt.studentName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>UPI Transaction ID:</span>
                  <span style={{ color: '#000648', fontWeight: 800, fontFamily: 'monospace' }}>{selectedReceipt.upiTransactionId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Enrolled Course:</span>
                  <span style={{ color: '#000648', fontWeight: 800 }}>{selectedReceipt.courseName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Paid From:</span>
                  <span style={{ color: '#000648', fontWeight: 700 }}>{selectedReceipt.paidFrom || selectedReceipt.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Date & Time:</span>
                  <span style={{ color: '#000648', fontWeight: 700 }}>{selectedReceipt.paymentDate}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => printPdfReceipt(selectedReceipt)}
                  aria-label="Download PDF Receipt"
                  style={{ flex: 1, padding: '11px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '10px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem' }}
                >
                  <HiOutlineDownload size={18} /> Download PDF Receipt
                </button>
                <button
                  type="button"
                  onClick={() => handleShareSummary(selectedReceipt)}
                  aria-label="Share receipt summary"
                  style={{ padding: '11px 16px', background: '#f1f5f9', color: '#000648', border: '1.5px solid #cbd5e1', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiOutlineShare size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Record New Payment Modal */}
      {isAddModalOpen && ReactDOM.createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '520px', border: '1.5px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={{ background: '#000648', padding: '16px 20px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>Record New Learner Payment</h3>
              <button type="button" onClick={() => setIsAddModalOpen(false)} aria-label="Close modal" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer' }}>
                <HiX size={16} />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
              <div>
                <label htmlFor="student-name-input" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Student Full Name *
                </label>
                <input
                  id="student-name-input"
                  type="text"
                  required
                  value={newPayForm.studentName}
                  onChange={(e) => setNewPayForm({ ...newPayForm, studentName: e.target.value })}
                  placeholder="Rahul Sharma"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="amount-input" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Amount Paid (₹) *
                  </label>
                  <input
                    id="amount-input"
                    type="number"
                    required
                    value={newPayForm.amount}
                    onChange={(e) => setNewPayForm({ ...newPayForm, amount: e.target.value })}
                    placeholder="49999"
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                  />
                </div>

                <div>
                  <label htmlFor="payment-method-select" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Payment Channel
                  </label>
                  <select
                    id="payment-method-select"
                    value={newPayForm.paymentMethod}
                    onChange={(e) => setNewPayForm({ ...newPayForm, paymentMethod: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                  >
                    <option>Google Pay (UPI)</option>
                    <option>PhonePe (UPI)</option>
                    <option>Paytm UPI</option>
                    <option>Credit Card / Debit Card</option>
                    <option>Direct Bank Transfer / NEFT</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="upi-txn-id-input" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  UPI Transaction ID / Ref No. *
                </label>
                <input
                  id="upi-txn-id-input"
                  type="text"
                  required
                  value={newPayForm.upiTransactionId}
                  onChange={(e) => setNewPayForm({ ...newPayForm, upiTransactionId: e.target.value })}
                  placeholder="UPI/328910482910/OKAXIS"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label htmlFor="paid-from-input" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Paid From (Student Email / Phone / UPI ID)
                </label>
                <input
                  id="paid-from-input"
                  type="text"
                  value={newPayForm.paidFrom}
                  onChange={(e) => setNewPayForm({ ...newPayForm, paidFrom: e.target.value })}
                  placeholder="rahul.sharma@okaxis (+91 9876543210)"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label htmlFor="course-name-input" style={{ display: 'block', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Target Course Enrolled
                </label>
                <input
                  id="course-name-input"
                  type="text"
                  value={newPayForm.courseName}
                  onChange={(e) => setNewPayForm({ ...newPayForm, courseName: e.target.value })}
                  placeholder="Full Stack Development with AI"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsAddModalOpen(false)} aria-label="Cancel modal" style={{ padding: '9px 16px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700 }}>
                  Cancel
                </button>
                <button type="submit" aria-label="Submit payment record" style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900 }}>
                  Save Payment Record
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
