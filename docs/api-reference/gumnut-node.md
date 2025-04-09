# GumnutNode

The `GumnutNode` represents a specific piece of content within a Gumnut document. Nodes can contain text, structured data (like a dropdown or slider), and are the primary units that can be edited collaboratively.

## Import

You don't directly import `GumnutNode`.
Instead, you get a `GumnutNode` instance from the `useNode` method of a `GumnutDoc`:

```javascript
import { connectToGumnutDoc } from "@gumnutdev/api";

const api = connectToGumnutDoc({
  docId: "some-doc",
  getToken: buildTestToken("user-123"),
});
const { doc } = api;

const node = doc.useNode("node-id");
```

## Properties

| Property    | Type     | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| `projectId` | `string` | The ID of the project                       |
| `docId`     | `string` | The ID of the document containing this node |
| `node`      | `string` | The ID of this node                         |

## Usage with Web Components

The most common way to use GumnutNode is with Gumnut's custom elements:

```javascript
// Get a reference to a node
const textNode = doc.useNode("text-content");

// Assign it to a Gumnut component
document.querySelector("gumnut-text").node = textNode;
```

## Advanced Usage

For more advanced usage, Gumnut provides an internal API to work directly with nodes.

### Internal Node API

To access the internal node API, you need to use the `useNode` symbol.

The internal node API provides methods for:

- Performing operations on the node
- Reading the document contents
- Adding listeners for changes
- Working with cursors and selections

## Working with Nodes Programmatically

If you need to work with nodes programmatically without using Gumnut's web components, here's how you can approach it:

### Get Node Content

```javascript
const textNode = doc.useNode("text-content");
console.log("Node content:", textNode.contents());
```

### Update Node Content

```javascript
// Replace everything in this node with something new
textNode.replaceWith("Replaced the whole content");

// Place cursor at position 4, delete 3 characters ahead of the cursor and then insert 'Hello'
textNode.placeCursor(4);
textNode.mod({ delete: 3, insert: "Hello" });
```

### Listen for Node Changes

```javascript
const c = new AbortController();

textNode.addListener('value', () => {
  console.info('The text changed to', textNode.contents());
}, c.signal);

// later, to unregister interest
c.abort());
```
