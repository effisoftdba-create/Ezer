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

function printPdfReceipt(payment, upiVpa = 'ezerlearning@okaxis') {
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
        <title>EZER Payment Receipt - ${upiId}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #ffffff; color: #202124; padding: 30px; margin: 0; }
          .gpay-card { max-width: 400px; margin: 0 auto; text-align: center; }
          .avatar { width: 56px; height: 56px; background: #e91e63; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; margin: 0 auto 10px; }
          .recipient { font-size: 15px; font-weight: 600; color: #202124; margin-bottom: 6px; }
          .amount { font-size: 38px; font-weight: 700; color: #202124; margin: 8px 0 12px; letter-spacing: -0.5px; }
          .completed-pill { display: inline-flex; align-items: center; gap: 6px; background: #ffffff; border: 1px solid #dadce0; border-radius: 50px; padding: 5px 18px; font-size: 13px; font-weight: 600; color: #1e8e3e; margin-bottom: 6px; }
          .timestamp { font-size: 12px; color: #5f6368; margin-bottom: 20px; }
          .details-box { background: #ffffff; border: 1px solid #dadce0; border-radius: 14px; padding: 16px; text-align: left; box-shadow: 0 1px 3px rgba(60,64,67,0.08); }
          .bank-header { font-size: 14px; font-weight: 700; color: #202124; padding-bottom: 10px; border-bottom: 1px solid #f1f3f4; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; }
          .field-group { margin-bottom: 10px; }
          .field-label { font-size: 11px; color: #5f6368; font-weight: 500; margin-bottom: 2px; }
          .field-val { font-size: 13px; color: #202124; font-weight: 600; word-break: break-all; }
          .upi-footer { margin-top: 24px; text-align: center; font-size: 10px; font-weight: 800; color: #70757a; letter-spacing: 1px; }
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
            <span style="color:#1e8e3e; font-size:15px;">✔</span> Completed
          </div>
          
          <div class="timestamp">${dateStr}</div>

          <div class="details-box">
            <div class="bank-header">
              <span>${payment.paymentMethod || 'Google Pay (UPI)'}</span>
              <span style="color:#70757a; font-size:12px;">✔</span>
            </div>

            <div class="field-group">
              <div class="field-label">UPI transaction ID</div>
              <div class="field-val">${upiId}</div>
            </div>

            <div class="field-group">
              <div class="field-label">To</div>
              <div class="field-val">${upiVpa}</div>
            </div>

            <div class="field-group">
              <div class="field-label">From: ${studentName}</div>
              <div class="field-val">${payment.paidFrom || payment.email || 'Student Account'}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Enrolled Program</div>
              <div class="field-val">${payment.courseName || 'Cohort Enrolled'}</div>
            </div>

            <div class="field-group" style="margin-bottom:0;">
              <div class="field-label">EZER Transaction ID</div>
              <div class="field-val">EZER-TXN-${upiId}</div>
            </div>
          </div>

          <div class="upi-footer">
            POWERED BY<br/>
            <span style="font-size: 14px; font-weight: 900; color: #202124; letter-spacing: 2px;">UPI▶</span>
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

function downloadReceiptImage(payment, upiVpa = 'ezerlearning@okaxis') {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');

  // Pure White Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 500, 720);

  // Top Avatar Circle (Pink #e91e63)
  ctx.fillStyle = '#e91e63';
  ctx.beginPath();
  ctx.arc(250, 60, 28, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('E', 250, 68);

  // Recipient Header
  ctx.fillStyle = '#202124';
  ctx.font = '600 15px sans-serif';
  ctx.fillText(`To ${payment.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}`, 250, 115);

  // Amount
  ctx.fillStyle = '#202124';
  ctx.font = '700 40px sans-serif';
  ctx.fillText(`₹${Number(payment.amount).toLocaleString('en-IN')}`, 250, 165);

  // Completed Pill Button
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(175, 185, 150, 32, 16);
  } else {
    ctx.rect(175, 185, 150, 32);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#1e8e3e';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('✔  Completed', 250, 206);

  // Date Timestamp
  ctx.fillStyle = '#5f6368';
  ctx.font = '12px sans-serif';
  ctx.fillText(payment.paymentDate || new Date().toLocaleString(), 250, 240);

  // Details Box Container
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(25, 260, 450, 370, 14);
  } else {
    ctx.rect(25, 260, 450, 370);
  }
  ctx.fill();
  ctx.stroke();

  // Bank Header inside Box
  ctx.fillStyle = '#202124';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(payment.paymentMethod || 'Google Pay (UPI)', 45, 295);

  ctx.strokeStyle = '#f1f3f4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(45, 310);
  ctx.lineTo(455, 310);
  ctx.stroke();

  // Fields inside details box
  const fields = [
    ['UPI transaction ID', payment.upiTransactionId || '109529161148'],
    ['To', upiVpa],
    [`From: ${payment.studentName}`, payment.paidFrom || payment.email || 'Student Account'],
    ['Enrolled Program', payment.courseName || 'Cohort Enrolled'],
    ['EZER Transaction ID', `EZER-TXN-${payment.upiTransactionId || 'SEC10092'}`]
  ];

  let y = 338;
  fields.forEach(([lbl, val]) => {
    ctx.fillStyle = '#5f6368';
    ctx.font = '11px sans-serif';
    ctx.fillText(lbl, 45, y);

    ctx.fillStyle = '#202124';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(String(val), 45, y + 18);

    y += 56;
  });

  // Footer UPI Logo
  ctx.textAlign = 'center';
  ctx.fillStyle = '#70757a';
  ctx.font = '10px sans-serif';
  ctx.fillText('POWERED BY', 250, 668);

  ctx.fillStyle = '#202124';
  ctx.font = '900 15px sans-serif';
  ctx.fillText('UPI ▶', 250, 686);

  // Trigger Download
  const a = document.createElement('a');
  a.download = `gpay-receipt-${payment.upiTransactionId || 'transaction'}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

export default function PaymentsReceivedManager() {
  const { payments, addPayment, updatePaymentStatus, deletePayment, paymentConfig } = useSiteData();
  const paymentList = Array.isArray(payments) ? payments : [];
  const currentUpiVpa = paymentConfig?.upiVpa || 'ezerlearning@okaxis';

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pending' | 'verified' | 'rejected'
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

  const pendingCount = paymentList.filter(
    (p) => p.status === 'PENDING_VERIFICATION' || p.status === 'PENDING'
  ).length;
  const verifiedCount = paymentList.filter(
    (p) => p.status === 'VERIFIED' || p.status === 'SUCCESSFUL' || !p.status
  ).length;
  const rejectedCount = paymentList.filter((p) => p.status === 'REJECTED').length;

  const filteredPayments = paymentList.filter((p) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (p.studentName || '').toLowerCase().includes(term) ||
      (p.upiTransactionId || '').toLowerCase().includes(term) ||
      (p.email || '').toLowerCase().includes(term) ||
      (p.phone || '').toLowerCase().includes(term) ||
      (p.courseName || '').toLowerCase().includes(term);

    if (!matchesSearch) return false;

    if (activeTab === 'pending') {
      return p.status === 'PENDING_VERIFICATION' || p.status === 'PENDING';
    }
    if (activeTab === 'verified') {
      return p.status === 'VERIFIED' || p.status === 'SUCCESSFUL' || !p.status;
    }
    if (activeTab === 'rejected') {
      return p.status === 'REJECTED';
    }
    return true;
  });

  const sortedPayments = useMemo(() => {
    const list = Array.from(filteredPayments);
    return list.sort((a, b) => {
      const getTimestamp = (item) => {
        if (item.timestamp) return new Date(item.timestamp).getTime();
        if (item.createdAt) return new Date(item.createdAt).getTime();
        if (item.submittedAt) return new Date(item.submittedAt).getTime();
        if (item.paymentDate) {
          const parsed = new Date(item.paymentDate).getTime();
          if (!isNaN(parsed)) return parsed;
        }
        const idNum = Number(String(item.id || '').replace(/\D/g, ''));
        return isNaN(idNum) ? 0 : idNum;
      };
      const tA = getTimestamp(a);
      const tB = getTimestamp(b);
      if (tB !== tA) return tB - tA;
      return String(b.id || '').localeCompare(String(a.id || ''));
    });
  }, [filteredPayments]);

  const totalCollected = paymentList
    .filter((p) => p.status !== 'REJECTED')
    .reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
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

  const handleApproveUtr = (pay) => {
    if (window.confirm(`Approve payment and verify 12-digit UTR #${pay.upiTransactionId} for ${pay.studentName}?`)) {
      updatePaymentStatus(pay.id, 'VERIFIED', 'Verified against bank statement receipt');
    }
  };

  const handleRejectUtr = (pay) => {
    if (window.confirm(`Reject payment record for UTR #${pay.upiTransactionId}? This marks student lead as Payment Rejected.`)) {
      updatePaymentStatus(pay.id, 'REJECTED', 'Invalid or unverified UTR submission');
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete payment record for "${name}"?`)) {
      deletePayment(id);
    }
  };

  const handleShareSummary = (payment) => {
    const text = `PAYMENT RECEIPT\nTo: ${payment.paidTo || 'EZER Learning Solutions'}\nStudent: ${payment.studentName}\nAmount: ₹${payment.amount}\nUPI Txn ID: ${payment.upiTransactionId}\nCourse: ${payment.courseName}\nChannel: ${payment.paymentMethod || 'Google Pay (UPI)'}\nStatus: ${payment.status || 'Completed'}`;
    navigator.clipboard.writeText(text);
    setCopiedShareId(payment.id);
    setTimeout(() => setCopiedShareId(null), 2500);
  };

  return (
    <div>
      {/* Header Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '20px', paddingBottom: '14px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiOutlineCurrencyRupee size={24} color="#115DFC" />
            Payments Received & Direct P2M Queue
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Verify candidate 12-digit UTR bank reference numbers, manage enrollment status, and issue digital receipts.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          style={{
            padding: '8px 16px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
            boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiOutlinePlus size={16} /> Record Direct Payment
        </button>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '12px', marginBottom: '20px' }}>
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '10px 12px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Total Verified Revenue
          </span>
          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>
            ₹{totalCollected.toLocaleString('en-IN')}
          </div>
        </div>

        <div style={{ background: pendingCount > 0 ? '#fffbe6' : '#f8fafc', border: pendingCount > 0 ? '1.5px solid #ffe58f' : '1.5px solid #cbd5e1', borderRadius: '10px', padding: '10px 12px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: pendingCount > 0 ? '#d48806' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Pending UTR Verification
          </span>
          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: pendingCount > 0 ? '#d48806' : '#000648', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {pendingCount} On-Hold
          </div>
        </div>

        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '10px', padding: '10px 12px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Verified Transactions
          </span>
          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#15803d', marginTop: '2px' }}>
            {verifiedCount} Approved
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '10px', padding: '10px 12px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Database Sync
          </span>
          <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#15803d', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HiOutlineCheckCircle size={15} /> Live Realtime Synced
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            style={{
              padding: '6px 12px', borderRadius: '6px', border: '1.5px solid #cbd5e1',
              background: activeTab === 'all' ? '#000648' : '#ffffff',
              color: activeTab === 'all' ? '#f2b733' : '#334155',
              fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer'
            }}
          >
            All Transactions ({paymentList.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pending')}
            style={{
              padding: '6px 12px', borderRadius: '6px', border: activeTab === 'pending' ? '1.5px solid #d48806' : '1.5px solid #ffe58f',
              background: activeTab === 'pending' ? '#d48806' : '#fffbe6',
              color: activeTab === 'pending' ? '#ffffff' : '#d48806',
              fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
            }}
          >
            <span>⏳</span> Pending UTR ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('verified')}
            style={{
              padding: '6px 12px', borderRadius: '6px', border: activeTab === 'verified' ? '1.5px solid #166534' : '1.5px solid #bbf7d0',
              background: activeTab === 'verified' ? '#166534' : '#f0fdf4',
              color: activeTab === 'verified' ? '#ffffff' : '#166534',
              fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer'
            }}
          >
            ✔ Approved ({verifiedCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rejected')}
            style={{
              padding: '6px 12px', borderRadius: '6px', border: activeTab === 'rejected' ? '1.5px solid #dc2626' : '1.5px solid #fecaca',
              background: activeTab === 'rejected' ? '#dc2626' : '#fef2f2',
              color: activeTab === 'rejected' ? '#ffffff' : '#dc2626',
              fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer'
            }}
          >
            ✖ Rejected ({rejectedCount})
          </button>
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <label htmlFor="search-payments-input" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
            Search Payments
          </label>
          <HiOutlineSearch size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            id="search-payments-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search payment records"
            placeholder="Search by student name, UTR ID..."
            style={{
              width: '100%', padding: '8px 12px 8px 36px', borderRadius: '8px',
              border: '1.5px solid #cbd5e1', fontSize: '0.8rem', outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Payments Table Responsive Container */}
      <div style={{
        background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px',
        overflowX: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
      }}>
        <table style={{ width: '100%', minWidth: '920px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8rem' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#000648', fontWeight: 800, fontSize: '0.75rem' }}>
              <th style={{ padding: '10px 12px' }}>Student Name</th>
              <th style={{ padding: '10px 12px' }}>Amount</th>
              <th style={{ padding: '10px 12px' }}>12-Digit UTR / Order Ref</th>
              <th style={{ padding: '10px 12px' }}>Status & Verification</th>
              <th style={{ padding: '10px 12px' }}>Course Title</th>
              <th style={{ padding: '10px 12px' }}>Date</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Admin Controls</th>
            </tr>
          </thead>
          <tbody>
            {sortedPayments.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '36px 24px', textAlign: 'center', color: '#64748b' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    No Transactions Found in "{activeTab.toUpperCase()}" Category
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    When candidates submit 12-digit UTR numbers on checkout, their transactions will appear here for verification.
                  </div>
                </td>
              </tr>
            ) : (
              sortedPayments.map((pay) => {
                const isPending = pay.status === 'PENDING_VERIFICATION' || pay.status === 'PENDING';
                const isVerified = pay.status === 'VERIFIED' || pay.status === 'SUCCESSFUL' || !pay.status;
                const isRejected = pay.status === 'REJECTED';

                return (
                  <tr key={pay.id} style={{ borderBottom: '1px solid #f1f5f9', background: isPending ? '#fffdf5' : '#ffffff' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 800, color: '#000648' }}>
                      {pay.studentName}
                      {pay.phone && <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>{pay.phone}</div>}
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: 900, color: '#15803d' }}>
                      ₹{Number(pay.amount).toLocaleString('en-IN')}
                    </td>
                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: '0.78rem', color: '#334155', fontWeight: 700 }}>
                      <div>{pay.upiTransactionId}</div>
                      {pay.orderRefId && <div style={{ fontSize: '0.68rem', color: '#64748b' }}>{pay.orderRefId}</div>}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      {isPending && (
                        <span style={{ background: '#fffbe6', color: '#d48806', border: '1px solid #ffe58f', padding: '3px 8px', borderRadius: '50px', fontWeight: 800, fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          ⏳ Pending Review
                        </span>
                      )}
                      {isVerified && (
                        <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '3px 8px', borderRadius: '50px', fontWeight: 800, fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          ✔ Approved
                        </span>
                      )}
                      {isRejected && (
                        <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '3px 8px', borderRadius: '50px', fontWeight: 800, fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          ✖ Rejected
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '10px 12px', color: '#475569', fontWeight: 600, fontSize: '0.78rem' }}>
                      {pay.courseName || 'General Cohort'}
                    </td>
                    <td style={{ padding: '10px 12px', color: '#64748b', fontSize: '0.74rem' }}>
                      {pay.paymentDate}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {isPending && (
                          <>
                            <button
                              type="button"
                              onClick={() => handleApproveUtr(pay)}
                              title="Approve 12-Digit UTR and Mark Student Enrolled"
                              style={{ padding: '5px 10px', background: '#166534', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 900, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                            >
                              <HiCheck size={13} /> Approve
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRejectUtr(pay)}
                              title="Reject UTR Submission"
                              style={{ padding: '5px 8px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '5px', cursor: 'pointer', fontWeight: 800, fontSize: '0.72rem' }}
                            >
                              Reject
                            </button>
                          </>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedReceipt(pay)}
                          aria-label={`View receipt for ${pay.studentName}`}
                          title="View Official Digital Payment Receipt Modal"
                          style={{ padding: '4px 8px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 700, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                        >
                          <HiOutlineEye size={13} /> Receipt
                        </button>

                        <button
                          type="button"
                          onClick={() => downloadReceiptImage(pay, currentUpiVpa)}
                          aria-label={`Download image receipt for ${pay.studentName}`}
                          title="Download Receipt as Image (.png)"
                          style={{ padding: '4px 8px', background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', borderRadius: '5px', cursor: 'pointer', fontWeight: 700, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                        >
                          <HiOutlinePhotograph size={13} /> Image
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShareSummary(pay)}
                          aria-label={`Share payment report for ${pay.studentName}`}
                          title="Copy payment summary report for WhatsApp/Email"
                          style={{ padding: '4px 8px', background: copiedShareId === pay.id ? '#dcfce7' : '#f8fafc', color: copiedShareId === pay.id ? '#15803d' : '#475569', border: '1px solid #cbd5e1', borderRadius: '5px', cursor: 'pointer', fontWeight: 700, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                        >
                          {copiedShareId === pay.id ? <HiCheck size={13} /> : <HiOutlineShare size={13} />}
                        </button>

                        <button
                          type="button"
                          onClick={() => printPdfReceipt(pay, currentUpiVpa)}
                          aria-label={`Print PDF receipt for ${pay.studentName}`}
                          title="Download / Print PDF Receipt"
                          style={{ padding: '4px 8px', background: '#f1f5f9', color: '#000648', border: '1px solid #cbd5e1', borderRadius: '5px', cursor: 'pointer', fontWeight: 700, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                        >
                          <HiOutlinePrinter size={13} /> PDF
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(pay.id, pay.studentName)}
                          aria-label={`Delete payment record for ${pay.studentName}`}
                          title="Delete Record"
                          style={{ padding: '4px 6px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '5px', cursor: 'pointer' }}
                        >
                          <HiOutlineTrash size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Screen-Adaptive Authentic Digital Payment Receipt Modal */}
      {selectedReceipt && ReactDOM.createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', width: '94%', maxWidth: '400px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 60px rgba(0,0,0,0.3)', border: '1px solid #dadce0', position: 'relative' }}>
            
            {/* Top Close Icon */}
            <button
              type="button"
              onClick={() => setSelectedReceipt(null)}
              aria-label="Close modal"
              style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 10, background: '#f1f3f4', border: 'none', color: '#5f6368', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <HiX size={16} />
            </button>

            <div style={{ padding: '24px 20px 20px', textAlign: 'center' }}>
              {/* Recipient Avatar Circle */}
              <div style={{ width: '52px', height: '52px', background: '#e91e63', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 8px', boxShadow: '0 4px 10px rgba(233, 30, 99, 0.2)' }}>
                E
              </div>

              {/* Recipient Name */}
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#202124', marginBottom: '4px' }}>
                To {selectedReceipt.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}
              </div>

              {/* Amount */}
              <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#202124', margin: '2px 0 8px', letterSpacing: '-0.5px' }}>
                ₹{Number(selectedReceipt.amount).toLocaleString('en-IN')}
              </div>

              {/* Completed Pill Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #dadce0', borderRadius: '50px', padding: '4px 16px', fontSize: '0.82rem', fontWeight: 600, color: '#1e8e3e', marginBottom: '4px' }}>
                <span style={{ color: '#1e8e3e', fontSize: '14px' }}>✔</span> Completed
              </div>

              {/* Timestamp */}
              <div style={{ fontSize: '0.78rem', color: '#5f6368', marginBottom: '16px' }}>
                {selectedReceipt.paymentDate || new Date().toLocaleString()}
              </div>

              {/* Inner Payment Details Box */}
              <div style={{ background: '#ffffff', border: '1px solid #dadce0', borderRadius: '14px', padding: '16px', textAlign: 'left', marginBottom: '16px', boxShadow: '0 1px 3px rgba(60,64,67,0.08)' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#202124', paddingBottom: '10px', borderBottom: '1px solid #f1f3f4', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{selectedReceipt.paymentMethod || 'Google Pay (UPI)'}</span>
                  <HiChevronDown size={16} color="#70757a" />
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>UPI transaction ID</div>
                  <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 700, fontFamily: 'monospace' }}>{selectedReceipt.upiTransactionId}</div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>To</div>
                  <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{currentUpiVpa}</div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>From: {selectedReceipt.studentName}</div>
                  <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{selectedReceipt.paidFrom || selectedReceipt.email}</div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>Enrolled Program</div>
                  <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{selectedReceipt.courseName || 'Cohort Enrolled'}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>EZER Transaction ID</div>
                  <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600, fontFamily: 'monospace' }}>EZER-TXN-{selectedReceipt.upiTransactionId || 'SEC10092'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => downloadReceiptImage(selectedReceipt, currentUpiVpa)}
                  aria-label="Download image receipt"
                  style={{ flex: 1, padding: '10px 12px', background: '#e8f0fe', color: '#1a73e8', border: '1px solid #aecbfa', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.78rem' }}
                >
                  <HiOutlinePhotograph size={15} /> Download Image
                </button>
                <button
                  type="button"
                  onClick={() => printPdfReceipt(selectedReceipt, currentUpiVpa)}
                  aria-label="Download PDF Receipt"
                  style={{ flex: 1, padding: '10px 12px', background: '#1a73e8', color: '#ffffff', border: 'none', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.78rem' }}
                >
                  <HiOutlineDownload size={15} /> Download PDF
                </button>
              </div>

              {/* Footer UPI Logo */}
              <div style={{ marginTop: '16px', fontSize: '0.65rem', fontWeight: 800, color: '#70757a', letterSpacing: '1px' }}>
                POWERED BY<br/>
                <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#202124', letterSpacing: '2px' }}>UPI▶</span>
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
