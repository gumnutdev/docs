---
title: "<gumnut-status>"
description: "A component for monitoring the connection status of a Gumnut instance"
---

# `<gumnut-status>`

The `<gumnut-status>` component provides a way to monitor and display the connection status of a Gumnut instance.
It helps users understand when there are connection issues with collaborative documents.

It has no configuration options and displays itself in _giant red text_ when there is an issue.
You may want to use it only during development.

Gumnut, in general, attempts to reconnect automatically and there is no special intervention you need to undertake if there is an error.
Unrelated to this element, you can also listen to the "error" event on the low-level `GumnutDoc` type.

## Import

```javascript
// Import all Gumnut DOM components
import "@gumnutdev/api/dom";
```

## Usage

```html
<gumnut-status id="connection-status"></gumnut-status>
```

## Features

### Connection Status Monitoring

The `<gumnut-status>` component automatically:

- Displays errors when documents fail to connect
- Shows which documents are experiencing issues
- Updates in real-time as connection status changes

### Styling

The component creates a shadow DOM with basic styling. By default, error messages are displayed in red. You can customize the appearance using CSS:

```css
gumnut-status {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #fff4f4;
  border: 1px solid #ffcdd2;
  color: #b71c1c;
  font-family: sans-serif;
  font-size: 14px;
}

/* Hide when no errors */
gumnut-status:empty {
  display: none;
}
```

## Examples

### Basic Usage

```html
<div class="app-header">
  <h1>Collaborative Document Editor</h1>
  <gumnut-status id="connection-status"></gumnut-status>
</div>

<script type="module">
  import "@gumnutdev/api/dom";
</script>
```

### Custom Status Styling

```html
<style>
  /* Custom styles for connection status */
  .status-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 300px;
  }

  gumnut-status {
    display: block;
    padding: 12px 16px;
    background-color: #fef8e7;
    border-left: 4px solid #f9a825;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    line-height: 1.4;
  }

  gumnut-status:empty {
    display: none;
  }
</style>

<div class="editor-container">
  <gumnut-text id="document-editor"></gumnut-text>
</div>

<div class="status-container">
  <gumnut-status id="connection-status"></gumnut-status>
</div>
```
