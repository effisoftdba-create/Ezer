# EZER Database Layer

This directory (`database/`) manages the database configuration, schema models, and data persistence interfaces for EZER Learning Solutions.

## Architecture

```
database/
├── index.js          # Core database abstraction interface
├── config/           # Database environment configurations
├── models/           # Data models & entity schemas (leads, courses, testimonials)
└── README.md         # Documentation
```

## Features

- **Multi-Database Support**: Connects seamlessly with Firebase Firestore, Realtime DB, and Google Sheets Lead capture integration.
- **Failover / Hybrid Storage**: Local storage fallback with automatic sync when network connection is re-established.
- **Strict Data Validation**: Validates user lead entries, admission forms, and content objects prior to persistence.
