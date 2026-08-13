# EZER Learning Solutions - Full Stack Workspace

This repository contains the full-stack applications for **EZER Learning Solutions**:

## 📁 Project Applications

### 1. [`ezerlearning`](./ezerlearning) — Public Website (`https://ezerlearning.com/`)
- **Frontend**: Vite + React website application containing courses, hero banners, student reviews, live admissions popup, and blog.
- **Backend**: Express API server for course catalog and checkout handling.
- **Database**: Course data, pricing models, and payment schemas.

### 2. [`ezerlearning-admin`](./ezerlearning-admin) — Admin Control Portal (`https://ezerlearning-admin/`)
- **Frontend**: Vite + React dedicated administrative portal with 37 Management Modules (HeroManager, CourseManager, LeadsManager, BlogManager, PaymentsReceivedManager, AdminSettingsManager, etc.).
- **Backend**: Express API server for admin authentication, security lockout, and session token verification.
- **Database**: Admin user database, permissions, and credential models.

---

## ⚡ Real-Time Firebase Synchronization

Both applications connect to the shared Firebase Firestore database (`ezer-learning-platform-8f1b1`). Any content created or updated in `ezerlearning-admin` updates `ezerlearning` in real time.

---

## 🚀 Cloudflare Pages Deployment

### Website (`ezerlearning`):
- **Root Directory**: `ezerlearning/frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Admin Portal (`ezerlearning-admin`):
- **Root Directory**: `ezerlearning-admin/frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
