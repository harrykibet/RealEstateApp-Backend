# Estatia Backend

Backend infrastructure for the Estatia real estate platform.

Estatia Backend provides secure, scalable server-side functionality using Firebase Cloud Functions and TypeScript. It acts as the central backend layer connecting mobile, web, and external service integrations.

The backend is responsible for handling business logic that should not execute on client applications, including payment processing, secure API integrations, authentication workflows, database operations, and asynchronous background tasks.

---

## Architecture

The project follows a modular architecture designed for maintainability, testability, and future scalability.

```
functions/
└── src/
    ├── auth/             # Authentication workflows and triggers
    ├── payments/         # Payment processing integrations
    ├── properties/       # Property-related backend operations
    ├── notifications/    # Notification workflows
    ├── security/         # Secrets and security infrastructure
    ├── firestore/        # Database access layer
    └── common/           # Shared utilities and infrastructure
```

---

## Technology Stack

* TypeScript
* Firebase Cloud Functions
* Firebase Authentication
* Cloud Firestore
* Firebase Storage
* Google Cloud Secret Manager
* Firebase App Check
* External payment integrations

---

## Core Responsibilities

### Payments

Secure payment processing through backend-controlled integrations.

Responsibilities include:

* Initiating payment requests
* Handling payment callbacks
* Managing transaction states
* Protecting sensitive credentials
* Persisting payment records

Client applications never directly communicate with payment providers or access private credentials.

---

### Security

Centralized security infrastructure:

* Secret management
* Authentication validation
* App Check enforcement
* Secure backend communication

Sensitive values are stored using Google Cloud Secret Manager and accessed only from trusted server environments.

---

### Firestore Integration

Backend database operations including:

* Data validation
* Server-side updates
* Transaction processing
* Event-driven workflows

---

## Development Setup

### Requirements

Install:

* Node.js LTS
* npm
* Firebase CLI

Verify:

```bash
node --version
npm --version
firebase --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/harrykibet/RealEstateApp-Backend.git

cd RealEstateApp-Backend/functions
```

Install dependencies:

```bash
npm install
```

---

## Firebase Login

Authenticate Firebase CLI:

```bash
firebase login
```

Verify available projects:

```bash
firebase projects:list
```

---

## Local Development

Start Firebase emulators:

```bash
firebase emulators:start
```

The emulator environment allows testing Cloud Functions locally before deployment.

---

## Deployment

Deploy all functions:

```bash
firebase deploy --only functions
```

Deploy a specific function:

```bash
firebase deploy --only functions:functionName
```

---

## Environment Configuration

Sensitive configuration values should never be committed to source control.

Use:

* Google Cloud Secret Manager
* Firebase environment configuration
* Secure CI/CD secrets

Examples:

```
MPESA_CONSUMER_KEY
MPESA_CONSUMER_SECRET
DATABASE_KEYS
EXTERNAL_API_TOKENS
```

---

## Repository Structure

```
Estatia Backend

├── functions
│   ├── src
│   │   ├── auth
│   │   ├── payments
│   │   ├── properties
│   │   ├── notifications
│   │   ├── security
│   │   ├── firestore
│   │   └── common
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── firestore.rules
├── firestore.indexes.json
├── storage.rules
├── firebase.json
└── README.md
```

---

## Engineering Principles

This backend follows:

* Separation of concerns
* Dependency inversion
* Secure-by-default design
* Explicit error handling
* Immutable data flows
* Testable service boundaries
* Minimal client trust

---

## License

Copyright © Estatia.

All rights reserved.
