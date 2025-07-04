---
title: "<gumnut-data>"
description: "A collaborative form input component for Gumnut"
---

# `<gumnut-data>`

## Overview

The `<gumnut-data>` custom element is a specialized component in the Gumnut real-time collaboration library that connects HTML form inputs to synchronized documents. It allows multiple users to interact with form controls (like checkboxes and range sliders) while maintaining synchronized state across all connected clients.

## Including Gumnut in Your Project

First, ensure you've imported the necessary Gumnut library files in your project:

```js
import "@gumnutdev/api/dom";
```

## Basic Usage

The `<gumnut-data>` element wraps standard HTML input elements, automatically binding them to a Gumnut document node:

```html
<gumnut-data id="my-checkbox-container">
  <input type="checkbox" id="feature-toggle" />
  <label for="feature-toggle">Enable Feature</label>
</gumnut-data>

<gumnut-data id="my-slider-container">
  <input type="range" min="0" max="100" value="50" id="volume-control" />
  <label for="volume-control">Volume</label>
</gumnut-data>
```

To connect these elements to Gumnut (assuming you have already authenticated and have a Gumnut project):

```javascript
// Get or create Gumnut document nodes
const checkboxNode = await gumnutApi.node("settings-feature-toggle");
const sliderNode = await gumnutApi.node("settings-volume");

// Connect nodes to the gumnut-data elements
document.getElementById("my-checkbox-container").model = checkboxNode;
document.getElementById("my-slider-container").model = sliderNode;
```

## Technical Details

### Supported Input Types

The `<gumnut-data>` element works with:

- `checkbox` inputs: For boolean values
- `range` inputs: For numeric values

### Element Properties

| Property | Type   | Description                                           |
| -------- | ------ | ----------------------------------------------------- |
| `node`   | Object | The Gumnut document node to bind to the input element |

## Limitations

- Currently only works with `checkbox` and `range` inputs
- Only binds to the first input element found in the container
- Does not directly support complex form elements like selects, radio groups, or custom inputs
