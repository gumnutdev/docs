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

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
  <head>
    <title>Gumnut Quick Start</title>
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body></body>
</html>
```

```css [styles.css]
body {
  font-family: Segoe UI, system-ui, -apple-system, sans-serif;
}

gumnut-text {
  border: 1px solid #ccc8;
  margin: 1px;
  border-radius: 4px;
  line-height: 19px;
  font-size: 16px;

  min-width: 200px;
  min-height: 80px;

  --gumnut-padding: 4px 8px;

  &:focus-within {
    border-color: blue;
    margin: 0px;
    border-width: 2px;
  }
}
```

```javascript [script.js]
import {
  buildTestToken,
  connectToGumnutDoc,
  configureGumnut,
} from "@gumnutdev/api";
import { GumnutTextElement } from "@gumnutdev/api/dom";

configureGumnut({
  remoteHost: "v0-collab.dev.gumnut.dev",
  projectId: "your-project-id",
  localDevKey: "your-dev-key",
});

const token = () => buildTestToken(undefined, { name: "User" });

const doc = connectToGumnutDoc({
  docId: "some-doc",
  getToken: token,
}).doc;

// Create a "gumnut-textarea" element, which is a multi-line text input.
const textareaEl = new GumnutTextElement();
document.body.append(textareaEl);

// Connect the textarea to the field "new-input" of the document we joined before.
textareaEl.node = doc.useNode("new-input");
```

:::

To get it working

1. Copy these 3 files into a directory
2. update `projectId` and `localDevKey` from your [dashboard](https://dashboard.gumnut.dev).
3. `npm install @gumnutdev/api`
4. Run a local web server (we use `vite`)

If you do all those things it should Just Work™!

Login to the [dashboard](https://dashboard.gumnut.dev) and see yourself typing in real-time on the server. It's fun and gives you a satisfied feeling inside.

If you'd like to integrate with React, check out [its API docs](/components/react).
