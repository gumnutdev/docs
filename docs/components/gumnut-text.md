---
title: "<gumnut-text>"
description: "A collaborative text area component for Gumnut"
---

# `<gumnut-text>`

The `<gumnut-text>` component provides a collaborative text area that allows multiple users to edit the same content simultaneously with real-time updates.

## Import

```javascript
// Import all Gumnut DOM components
import "@gumnutdev/api/dom";
```

## Usage

```html
<gumnut-text id="editor"></gumnut-text>
```

```javascript
// Get a node from a Gumnut document
const doc = connectToGumnutDoc({ docId: 'some-doc', getToken: ... });
const textNode = doc.root().value('text-content');

// Assign the node to the textarea
document.getElementById('editor').model = textNode;
```

## Attributes

| Attribute  | Type      | Description                                              |
| ---------- | --------- | -------------------------------------------------------- |
| `disabled` | `boolean` | When present, makes the textarea non-editable            |
| `readonly` | `boolean` | When present, allows viewing but not editing the content |

## Properties

| Property   | Type         | Description                                  |
| ---------- | ------------ | -------------------------------------------- |
| `node`     | `GumnutNode` | The Gumnut node to connect to this textarea  |
| `value`    | `string`     | Get or set the current text content          |
| `disabled` | `boolean`    | Get or set whether the textarea is disabled  |
| `readOnly` | `boolean`    | Get or set whether the textarea is read-only |

## Features

### Real-time Collaboration

The `<gumnut-text>` component automatically:

- Synchronizes text content among all connected users
- Shows other users' cursors and selections
- Handles conflict resolution using operational transformation
- Displays user presence information (who is currently editing)

### Styling

The component creates can be customized using regular CSS:

```css
gumnut-text {
  /* Set the size */
  width: 100%;
  height: 300px;

  /* Add a border */
  border: 1px solid #ccc;
  border-radius: 4px;

  /* Add padding inside the textarea */
  padding: 10px;
}
```

## Events

The component inherits standard events from the underlying textarea element:

- `input`: Fired when the content changes
- `focus`: Fired when the textarea gains focus
- `blur`: Fired when the textarea loses focus

## Form Integration

`<gumnut-text>` is registered as a form-associated custom element, allowing it to be used within forms.

## Examples

### Basic Usage

```html
<gumnut-text id="editor"></gumnut-text>

<script type="module">
  import { connectToGumnutDoc, buildTestToken } from "@gumnutdev/api";
  import "@gumnutdev/api/dom";

  const api = connectToGumnutDoc({
    docId: "some-doc",
    getToken: buildTestToken("user-123"),
  });
  const { doc } = api;

  // Join document and connect to textarea
  document.getElementById("editor").model = doc.root().value("input1");
</script>
```

### Usage with Read-only Mode

```html
<gumnut-text id="viewer" readonly></gumnut-text>

<script type="module">
  // After connecting to Gumnut and joining a document
  document.getElementById("viewer").model = doc.root().value("content");

  // You can also toggle readonly programmatically
  document.getElementById("edit-button").addEventListener("click", () => {
    const viewer = document.getElementById("viewer");
    viewer.readOnly = !viewer.readOnly;
  });
</script>
```

### Configuration

As well as support for many built-in properties, you can also set the following special properties on `<gumnut-text>`:

- `resize="auto"` will vertically grow the element to fit your content
- `multiline` will allow newlines (like `<textarea>`, not `<input>`)
- You can set the `wrap` property to `true` or `false`; by default, multiline inputs wrap but single-lines do not

### Styling Example

```html
<style>
  /* Custom styles for different textareas */
  .editor-main {
    width: 100%;
    height: 400px;
    border: 2px solid #3498db;
    border-radius: 8px;
    padding: 16px;
    font-family: "Arial", sans-serif;
    font-size: 16px;
  }

  .editor-notes {
    width: 100%;
    height: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 8px;
    font-family: "Courier New", monospace;
    font-size: 14px;
  }
</style>

<gumnut-text id="main-editor" class="editor-main"></gumnut-text>
<gumnut-text
  id="notes-editor"
  class="editor-notes"
  multiline
  rows="4"
></gumnut-text>
```

### Connecting Multiple Textareas to Different Nodes

```javascript
// Join a document
const doc = gumnut.join(controller.signal, "multi-section-document");

// Connect different textareas to different nodes
document.getElementById("title-editor").model = doc.root().value("title");
document.getElementById("introduction-editor").model =
  doc.root().value("introduction");
document.getElementById("content-editor").model = doc.root().value("content");
document.getElementById("conclusion-editor").model = doc.root().value("conclusion");
```
