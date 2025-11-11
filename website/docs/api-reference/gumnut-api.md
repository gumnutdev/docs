# Introduction to Gumnut

Gumnut is a lightweight, real-time collaborative editing framework that enables multiple users to simultaneously edit the same document or form. It provides both a JavaScript API and web components for easily implementing collaborative features in your applications.

## Key Features

- **Real-time collaboration** - Multiple users can edit documents simultaneously with changes synced in real-time
- **Custom web components** - Ready-to-use UI components like `<gumnut-input>` and `<gumnut-text>` for immediate integration
- **Other components** - `<gumnut-data>` for syncing data between users, `<gumnut-status>` for showing the status of a document, and more
- **Cursor presence** - See other users' cursors and selections with automatic visual indicators
- **Flexible architecture** - Support for custom document structures and multi-user editing
- **Authentication support** - Built-in token-based authentication system
- **Operational transformation** - Advanced conflict resolution ensures reliable synchronization between users

## How It Works

Gumnut works by maintaining a synchronized state between all connected clients through a central server. When a user makes changes to a document, those changes are:

1. Captured locally as operations
2. Transmitted to the Gumnut server
3. Transformed against other concurrent operations if necessary
4. Applied to all connected clients
5. Visually represented in the UI with custom elements that show user presence

This all happens with minimal latency, creating a seamless collaborative experience.

## When to Use Gumnut

Gumnut is ideal for applications that require:

- Document editing with multiple simultaneous users
- Live collaboration features
- Real-time data synchronization
- User presence indicators
- Structured document collaboration

## Installation

```bash
npm install @gumnutdev/api
```

## Quick Start

```javascript
import { connectToGumnut, buildTestToken } from "@gumnutdev/api";
import "@gumnutdev/api/dom";

// Connect to Gumnut
const gumnut = connectToGumnut({
  docId: 'doc-123',
  getToken: () => buildTestToken("user-123", {
    name: "User Name",
    email: "user@example.com",
  }),
});

// Use the document with a Gumnut component
document.querySelector("gumnut-text").model = doc.root().value("text-content");
```

Ready to get started? Check out the [Walkthrough](/walkthrough) for a more detailed walkthrough.
