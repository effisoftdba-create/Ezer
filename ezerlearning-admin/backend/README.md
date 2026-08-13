# EZER Backend API Service

This directory contains the Express API server and backend services for EZER Learning Solutions.

## Architecture

```
backend/
├── server.js          # Express server with security rate-limiters & payment endpoints
├── __tests__/         # Automated backend endpoint unit tests
└── README.md
```

## Features

- **Admin Authentication**: Hardened password comparison using bcrypt.
- **Payment Verification**: Secure constant-time Razorpay HMAC signature verification.
- **Rate Limiting**: Protects authentication and checkout endpoints from DDoS/brute force.
