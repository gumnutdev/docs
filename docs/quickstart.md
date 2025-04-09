---
title: Quick Start
description: Quick Start with Gumnut
---

# Quick Start

Getting started and connected to Gumnut should only take a few minutes.

## Installation

Use `npm` or your favorite package manager.

```bash
npm install @gumnutdev/api
```

## Quick Start

To add a managed text area to your document, you can copy and paste the snippet below (copying in the relevant details):

```javascript
import {
  configureGumnut,
  connectToGumnutDoc,
  buildTestToken,
} from "@gumnutdev/api";
import { GumnutTextElement } from "@gumnutdev/api/dom";

// Configure Gumnut
configureGumnut(controller.signal, {
  projectId: "your-project-id",
  localDevKey: "your-local-dev-key",
});

// Provide test authentication token
const token = buildTestToken("user-123", {
  name: "User Name",
  email: "user@example.com",
});

// Connect to Gumnut
const api = connectToGumnutDoc({ docId: "your-document", getToken: token });

// Use the document with a Gumnut component
const gt = new GumnutTextElement();
gt.node = api.doc.useNode("text-content");
document.body.append(gt);
```

This will create a `<gumnut-text>` element as opposed to a regular `<textarea>` or `<input>`.

That should be it!
You should now be connected to Gumnut and ready to start collaborating.

If you'd like to integrate with React, check out [its API docs](/components/react).
