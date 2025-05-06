---
title: "GumnutFocus"
description: "A component for monitoring the if another connection is focusing on a Gumnut element"
---

# `GumnutFocus`

The `<gumnut-focus>` (GumnutFocus in [React](/components/react)) component provides a way to see if someone else is editing a gumnut field.

It takes two configuration options, `name` and `control`.

## Usage

::: code-group

```javascript
// Import all Gumnut DOM components
import "@gumnutdev/api/dom";

// assumes connectToGunmnutDoc is done

document.getElementById("dogName").node = gumnutDoc.useNode("dogName");

// connect focus element to the
document.getElementById("dogName-focus").node = gumnutDoc.useNode("dogName");
```

```html
<h3> Dog name <gumnut-focus id="dogName-focus" /> </label>
<gumnut-text id="dogName" />
```

:::

You can put the `<gumnut-focus>` element wherever you like, generally it makes sense to put it next to the field label (in the example above it's one space after).

## Features

### Connection Status Monitoring

The `<gumnut-status>` component automatically:

- Displays errors when documents fail to connect
- Shows which documents are experiencing issues
- Updates in real-time as connection status changes

### React

In [React](/components/react), the `GumnutFocus` attaches the `control` inline.

```js
import { connectToGumnutDoc, GumnutFocus, GumnutText } from "@gumnutdev/api";

const scope = connectToGumnutDoc("user-123", {
  name: "user",
  email: "hi@example.dev",
})

<h3>Dog name <GumnutFocus control={scope.control} name="dogName" /></h3>

<GumnutText
  control={scope.control}
  name="dogName"
  placeholder="Enter dog name"
  multiline
  style={{
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    width: "100%",
    padding: "4px",
  }}
/>
```

### Example output

The picture below shows the output with 2 other connections focusing on the `description` field in this form.

![GumnutFocus example](/images/gumnut-focus.png)
