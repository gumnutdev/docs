---
title: "GumnutFocus"
description: "A component for monitoring the if another connection is focusing on a Gumnut element"
---

# `GumnutFocus`

The `<gumnut-focus>` (GumnutFocus in [React](/components/react)) component provides a way to see if someone else is editing a gumnut field.

The element can be connected to a whole document, or individual nodes within the document (preferred).

## Usage

::: code-group

```javascript
// Import all Gumnut DOM components
import "@gumnutdev/api/dom";

// assumes connectToGunmnutDoc is completed

document.getElementById("dogName").model = gumnutDoc.root().value("dogName");

// IMPORTANT: connect focus element to the gumnut-text node
document.getElementById("dogName-focus").model = gumnutDoc.root().value("dogName");
```

```html
<h3> Dog name <gumnut-focus id="dogName-focus" /> </label>
<gumnut-text id="dogName" />
```

:::

You can put the `<gumnut-focus>` element wherever you like, generally it makes sense to put it next to the field label (in the example above it's one space after).

## React

In [React](/components/react), the `GumnutFocus` attaches the `control` inline. Just make sure the `name` in `GumnutFocus` matches the name in `GumnutText` to show the focus of that field. The same applies to `GumnutData`

```typescript
import { GumnutFocus, GumnutText } from "@gumnutdev/api";

function YourComponent() {
  // assumes useGumnutDoc is called and saved as `scope`

  return (
    <>
      <h3>
        Dog name <GumnutFocus control={scope.control} name="dogName" />
      </h3>

      <GumnutText
        control={scope.control}
        name="dogName"
        placeholder="Enter dog name"
      />
    </>
  );
}
```

## Example output

The picture below shows the output with 2 other connections (all the same user) focusing on the `dogName` field in this form.

![GumnutFocus example](/images/gumnut-focus.png)
