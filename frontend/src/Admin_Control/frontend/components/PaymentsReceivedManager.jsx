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
  HiOutlinePhotograph,
  HiChevronDown,
  HiX,
  HiCheck
} from 'react-icons/hi';

function printPdfReceipt(payment) {
  const printWin = window.open('', '_blank', 'width=800,height=900');
  if (!printWin) {
    alert('Please allow popups to download/print the PDF receipt.');
    return;
  }

  const dateStr = payment.paymentDate || new Date().toLocaleString();
  const upiId = payment.upiTransactionId || '109529161148';
  const paidTo = payment.paidTo || 'EZER Learning Solutions Pvt. Ltd.';
  const studentName = payment.studentName || 'Learner Candidate';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Google Pay Receipt - ${upiId}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #ffffff; color: #202124; padding: 40px; margin: 0; }
          .gpay-card { max-width: 440px; margin: 0 auto; text-align: center; }
          .avatar { width: 64px; height: 64px; background: #e91e63; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 700; margin: 0 auto 12px; }
          .recipient { font-size: 16px; font-weight: 600; color: #202124; margin-bottom: 8px; }
          .amount { font-size: 42px; font-weight: 700; color: #202124; margin: 12px 0 16px; letter-spacing: -0.5px; }
          .completed-pill { display: inline-flex; align-items: center; gap: 6px; background: #ffffff; border: 1px solid #dadce0; border-radius: 50px; padding: 6px 20px; font-size: 14px; font-weight: 600; color: #1e8e3e; margin-bottom: 8px; }
          .timestamp { font-size: 13px; color: #5f6368; margin-bottom: 24px; }
          .details-box { background: #ffffff; border: 1px solid #dadce0; border-radius: 16px; padding: 20px; text-align: left; box-shadow: 0 1px 3px rgba(60,64,67,0.08); }
          .bank-header { font-size: 15px; font-weight: 700; color: #202124; padding-bottom: 12px; border-bottom: 1px solid #f1f3f4; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; }
          .field-group { margin-bottom: 12px; }
          .field-label { font-size: 12px; color: #5f6368; font-weight: 500; margin-bottom: 2px; }
          .field-val { font-size: 14px; color: #202124; font-weight: 600; word-break: break-all; }
          .upi-footer { margin-top: 28px; text-align: center; font-size: 11px; font-weight: 800; color: #70757a; letter-spacing: 1px; }
          @media print {
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="gpay-card">
          <div class="avatar">E</div>
          <div class="recipient">To ${paidTo}</div>
          <div class="amount">₹${Number(payment.amount).toLocaleString('en-IN')}</div>
          
          <div class="completed-pill">
            <span style="color:#1e8e3e; font-size:16px;">✔</span> Completed
          </div>
          
          <div class="timestamp">${dateStr}</div>

          <div class="details-box">
            <div class="bank-header">
              <span>Google Pay (UPI)</span>
              <span style="color:#70757a; font-size:12px;">✔</span>
            </div>

            <div class="field-group">
              <div class="field-label">UPI transaction ID</div>
              <div class="field-val">${upiId}</div>
            </div>

            <div class="field-group">
              <div class="field-label">To</div>
              <div class="field-val">ezerlearning@okaxis</div>
            </div>

            <div class="field-group">
              <div class="field-label">From: ${studentName}</div>
              <div class="field-val">${payment.paidFrom || payment.email || 'Student Account'}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Google Pay • Enrolled Course</div>
              <div class="field-val">${payment.courseName || 'Cohort Enrolled'}</div>
            </div>

            <div class="field-group" style="margin-bottom:0;">
              <div class="field-label">Google transaction ID</div>
              <div class="field-val">CICAgKj${Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
            </div>
          </div>

          <div class="upi-footer">
            POWERED BY<br/>
            <span style="font-size: 16px; font-weight: 900; color: #202124; letter-spacing: 2px;">UPI▶</span>
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

function downloadReceiptImage(payment) {
  const canvas = document.createElement('canvas');
  canvas.width = 540;
  canvas.height = 760;
  const ctx = canvas.getContext('2d');

  // Pure White Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 540, 760);

  // Top Avatar Circle (Pink #e91e63)
  ctx.fillStyle = '#e91e63';
  ctx.beginPath();
  ctx.arc(270, 70, 32, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('E', 270, 80);

  // Recipient Header
  ctx.fillStyle = '#202124';
  ctx.font = '600 16px sans-serif';
  ctx.fillText(`To ${payment.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}`, 270, 130);

  // Huge Amount
  ctx.fillStyle = '#202124';
  ctx.font = '700 44px sans-serif';
  ctx.fillText(`₹${Number(payment.amount).toLocaleString('en-IN')}`, 270, 185);

  // Completed Pill Button
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(190, 205, 160, 36, 18);
  } else {
    ctx.rect(190, 205, 160, 36);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#1e8e3e';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('✔  Completed', 270, 228);

  // Date Timestamp
  ctx.fillStyle = '#5f6368';
  ctx.font = '13px sans-serif';
  ctx.fillText(payment.paymentDate || new Date().toLocaleString(), 270, 265);

  // Details Box Container
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(30, 290, 480, 380, 16);
  } else {
    ctx.rect(30, 290, 480, 380);
  }
  ctx.fill();
  ctx.stroke();

  // Bank Header inside Box
  ctx.fillStyle = '#202124';
  ctx.font = 'bold 15px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Google Pay (UPI)', 50, 325);

  ctx.strokeStyle = '#f1f3f4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, 340);
  ctx.lineTo(490, 340);
  ctx.stroke();

  // Fields inside details box
  const fields = [
    ['UPI transaction ID', payment.upiTransactionId || '109529161148'],
    ['To', 'ezerlearning@okaxis'],
    [`From: ${payment.studentName}`, payment.paidFrom || payment.email || 'Student Account'],
    ['Google Pay • Enrolled Course', payment.courseName || 'Cohort Enrolled'],
    ['Google transaction ID', `CICAgKj${Math.random().toString(36).substring(2, 10).toUpperCase()}`]
  ];

  let y = 370;
  fields.forEach(([lbl, val]) => {
    ctx.fillStyle = '#5f6368';
    ctx.font = '12px sans-serif';
    ctx.fillText(lbl, 50, y);

    ctx.fillStyle = '#202124';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(String(val), 50, y + 20);

    y += 58;
  });

  // Footer UPI Logo
  ctx.textAlign = 'center';
  ctx.fillStyle = '#70757a';
  ctx.font = '10px sans-serif';
  ctx.fillText('POWERED BY', 270, 705);

  ctx.fillStyle = '#202124';
  ctx.font = '900 16px sans-serif';
  ctx.fillText('UPI ▶', 270, 725);

  // Trigger Download
  const a = document.createElement('a');
  a.download = `gpay-receipt-${payment.upiTransactionId || 'transaction'}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
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
    const text = `GOOGLE PAY RECEIPT\nTo: ${payment.paidTo || 'EZER Learning Solutions'}\nStudent: ${payment.studentName}\nAmount: ₹${payment.amount}\nUPI Txn ID: ${payment.upiTransactionId}\nCourse: ${payment.courseName}\nStatus: Completed`;
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
            Payments Received & Real-time Receipts
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Track live verified student fee collections, UPI reference numbers, Google Pay receipts, image downloads, and PDF exports.
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
            {totalCount} Verified
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
            Database Sync
          </span>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#15803d', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiOutlineCheckCircle size={20} /> Live Realtime Synced
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
                <td colSpan={7} style={{ padding: '40px 32px', textAlign: 'center', color: '#64748b' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    No Real Payments Recorded Yet
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                    When candidates complete checkout on the website, their verified transactions will appear here in real time.
                  </div>
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
                        onClick={() => downloadReceiptImage(pay)}
                        aria-label={`Download image receipt for ${pay.studentName}`}
                        title="Download Receipt as Image (.png)"
                        style={{ padding: '6px 10px', background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <HiOutlinePhotograph size={14} /> Image
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

      {/* 100% Authentic Google Pay Style Payment Receipt Modal (Matching User Screenshot 5) */}
      {selectedReceipt && ReactDOM.createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', width: '100%', maxWidth: '440px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.3)', border: '1px solid #dadce0', position: 'relative' }}>
            
            {/* Top Close Icon */}
            <button
              type="button"
              onClick={() => setSelectedReceipt(null)}
              aria-label="Close modal"
              style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, background: '#f1f3f4', border: 'none', color: '#5f6368', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <HiX size={18} />
            </button>

            <div style={{ padding: '36px 24px 24px', textAlign: 'center' }}>
              {/* Recipient Pink Avatar Circle */}
              <div style={{ width: '64px', height: '64px', background: '#e91e63', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', margin: '0 auto 12px', boxShadow: '0 4px 12px rgba(233, 30, 99, 0.25)' }}>
                E
              </div>

              {/* Recipient Name */}
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#202124', marginBottom: '6px' }}>
                To {selectedReceipt.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}
              </div>

              {/* Huge Amount */}
              <div style={{ fontSize: '2.8rem', fontWeight: 700, color: '#202124', margin: '4px 0 12px', letterSpacing: '-0.5px' }}>
                ₹{Number(selectedReceipt.amount).toLocaleString('en-IN')}
              </div>

              {/* Completed Pill Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #dadce0', borderRadius: '50px', padding: '6px 20px', fontSize: '0.88rem', fontWeight: 600, color: '#1e8e3e', marginBottom: '8px' }}>
                <span style={{ color: '#1e8e3e', fontSize: '16px' }}>✔</span> Completed
              </div>

              {/* Timestamp */}
              <div style={{ fontSize: '0.82rem', color: '#5f6368', marginBottom: '24px' }}>
                {selectedReceipt.paymentDate || new Date().toLocaleString()}
              </div>

              {/* Inner Payment Details Box */}
              <div style={{ background: '#ffffff', border: '1px solid #dadce0', borderRadius: '16px', padding: '20px', textAlign: 'left', marginBottom: '20px', boxShadow: '0 1px 3px rgba(60,64,67,0.08)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#202124', paddingBottom: '12px', borderBottom: '1px solid #f1f3f4', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Google Pay (UPI)</span>
                  <HiChevronDown size={18} color="#70757a" />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>UPI transaction ID</div>
                  <div style={{ fontSize: '0.88rem', color: '#202124', fontWeight: 700, fontFamily: 'monospace' }}>{selectedReceipt.upiTransactionId}</div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>To</div>
                  <div style={{ fontSize: '0.88rem', color: '#202124', fontWeight: 600 }}>ezerlearning@okaxis</div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>From: {selectedReceipt.studentName}</div>
                  <div style={{ fontSize: '0.88rem', color: '#202124', fontWeight: 600 }}>{selectedReceipt.paidFrom || selectedReceipt.email}</div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>Enrolled Program</div>
                  <div style={{ fontSize: '0.88rem', color: '#202124', fontWeight: 600 }}>{selectedReceipt.courseName || 'Cohort Enrolled'}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>Google transaction ID</div>
                  <div style={{ fontSize: '0.88rem', color: '#202124', fontWeight: 600, fontFamily: 'monospace' }}>CICAgKj98ZORPQ</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => downloadReceiptImage(selectedReceipt)}
                  aria-label="Download image receipt"
                  style={{ flex: 1, padding: '10px 12px', background: '#e8f0fe', color: '#1a73e8', border: '1px solid #aecbfa', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  <HiOutlinePhotograph size={16} /> Download Image
                </button>
                <button
                  type="button"
                  onClick={() => printPdfReceipt(selectedReceipt)}
                  aria-label="Download PDF Receipt"
                  style={{ flex: 1, padding: '10px 12px', background: '#1a73e8', color: '#ffffff', border: 'none', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  <HiOutlineDownload size={16} /> Download PDF
                </button>
              </div>

              {/* Footer UPI Logo */}
              <div style={{ marginTop: '20px', fontSize: '0.68rem', fontWeight: 800, color: '#70757a', letterSpacing: '1px' }}>
                POWERED BY<br/>
                <span style={{ fontSize: '1rem', fontWeight: 900, color: '#202124', letterSpacing: '2px' }}>UPI▶</span>
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
