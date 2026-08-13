# Admin Control Domain Module

This directory contains the Admin Control feature module structured into decoupled **frontend**, **backend**, and **database** sub-layers.

## Architecture

```
Admin_Control/
├── frontend/             # Admin Control UI components, views, state & auth utils
│   ├── components/       # Admin Dashboard UI Managers (Blog, Lead, Course, Mentor managers)
│   ├── context/          # SiteContext.jsx
│   ├── pages/            # AdminDashboard.jsx, AdminLogin.jsx, AdminLogin.css
│   └── utils/            # authService.js
├── backend/              # Admin Control backend controllers & API routes
│   ├── controllers/      # adminController.js (Authentication & credentials verification)
│   └── routes/           # adminRoutes.js (Express route endpoints)
└── database/             # Admin Control database models & default site datasets
    ├── models/           # adminModel.js (Admin credentials & bcrypt password model)
    └── defaults/         # siteDefaults.js (Default database seed dataset)
```
