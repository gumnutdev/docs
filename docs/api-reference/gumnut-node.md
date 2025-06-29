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
const { doc, shutdown } = api;

const node = doc.root().value("node-id");
```

## The GumnutDoc Object

When you call `connectToGumnutDoc()`, it returns an object with a `doc` property that is a `GumnutDoc` instance. Here's what's available on the `doc` object:

### Properties

| Property     | Type                       | Description                                                                  |
| ------------ | -------------------------- | ---------------------------------------------------------------------------- |
| `projectId`  | `string`                   | The ID of the project that contains this document                            |
| `docId`      | `string`                   | The ID of this document                                                      |
| `ready`      | `Promise<void>`            | A promise that resolves when the document is ready for use                   |
| `dataFrom`   | `Date`                     | When was the data here from (either from your backend or result of a commit) |
| `isShutdown` | `boolean`                  | Whether this doc is dead/shutdown and should be recreated                    |
| `error`      | `string\|Error\|undefined` | Any error state currently reported                                           |

### Methods

| Method                | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| `useNode(nodeId)`     | Gets a reference to a node within the document                          |
| `nodes()`             | Returns an iterable of all node IDs in the document                     |
| `clients()`           | Returns a snapshot of all clients connected to this document            |
| `userForClientId(id)` | Returns user information for a specific client ID                       |
| `pending()`           | Returns a Promise that resolves when all changes are sent to the server |
| `addListener()`       | Adds an event listener (for 'error', 'ready', or 'clients' events)      |

### Action Methods

These methods are available under the `doc.actions` property:

| Method              | Description                                  |
| ------------------- | -------------------------------------------- |
| `commit(callback)`  | Commits current changes and takes a snapshot |
| `load(nodes, opts)` | Loads canonical data into the document       |
| `revertAll()`       | Reverts all changes to canonical data        |

For more detailed information on these methods, see the [GumnutDoc API reference](/api-reference/gumnut-doc).

## GumnutNode Properties

| Property    | Type        | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| `projectId` | `string`    | The ID of the project                       |
| `docId`     | `string`    | The ID of the document containing this node |
| `node`      | `string`    | The ID of this node                         |
| `doc`       | `GumnutDoc` | Reference to the parent document            |

## Usage with Web Components

The most common way to use GumnutNode is with Gumnut's custom elements:

```javascript
// Get a reference to a node
const textNode = doc.root().value("text-content");

// Assign it to a Gumnut component
document.querySelector("gumnut-text").model = textNode;
```

## Methods

The GumnutNode interface combines both read and write operations.

### Reading Node Content

#### contents()

Returns the current content of the node as a string.

```javascript
const content = node.contents();
console.log("Node content:", content);
```

#### length()

Returns the length of the node's content.

```javascript
const length = node.length();
console.log("Content length:", length);
```

#### isDirty()

Checks if the node has been modified from its canonical state.

```javascript
if (node.isDirty()) {
  console.log("Node has unsaved changes");
}
```

#### clients()

Returns an iterable of client IDs currently focused on this node.

```javascript
const clients = node.clients();
for (const clientId of clients) {
  console.log("Client focused:", clientId);
}
```

#### selfCursor()

Retrieves the user's current cursor position in this node.

```javascript
const cursor = node.selfCursor();
if (cursor) {
  console.log(`Cursor at position ${cursor.start} to ${cursor.end}`);
} else {
  console.log("No cursor in this node");
}
```

### Modifying Node Content

#### replaceWith(text)

Replaces the entire content of the node with the provided text.

```javascript
node.replaceWith("New content for the node");
```

#### mod(arg)

Modify the text at the cursor position by deleting characters and/or inserting new text.

```javascript
// Delete 3 characters from position 5 and insert "Hello"
node.mod({ at: 5, delete: 3, insert: "Hello" });
```

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `at`      | `number` | Optional absolute position to place cursor before modifying |
| `delete`  | `number` | Number of characters to delete after cursor/selection       |
| `insert`  | `string` | Optional text to insert at the cursor position              |

#### placeCursor(at, to)

Places the cursor at the specified position within the node.

```javascript
// Place cursor at position 10
const position = node.placeCursor(10);

// Create a selection from position 5 to 15
const endPosition = node.placeCursor(5, 15);
```

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| `at`      | `number` | Position to place the cursor          |
| `to`      | `number` | Optional end position for a selection |

#### moveCursor(by, extend)

Moves the cursor by the specified amount.

```javascript
// Move cursor 5 characters forward
node.moveCursor(5);

// Extend selection 3 characters forward
node.moveCursor(3, true);
```

| Parameter | Type      | Description                                              |
| --------- | --------- | -------------------------------------------------------- |
| `by`      | `number`  | Number of characters to move (negative to move backward) |
| `extend`  | `boolean` | Whether to extend the selection range                    |

#### yieldCursor()

Stops tracking the cursor on this node and notifies other clients.

```javascript
node.yieldCursor();
```

### Event Listeners

#### addListener(type, cb, signal)

Adds a listener for various node events.

```javascript
const controller = new AbortController();

// Listen for value changes
node.addListener(
  "value",
  (known) => {
    console.log(`Content changed to: ${node.contents()}`);
    console.log(`Was it our change? ${known}`);
  },
  controller.signal
);

// Listen for client focus changes
node.addListener(
  "clients",
  (delta) => {
    console.log("Client focus changed:", delta);
  },
  controller.signal
);

// Listen for cursor position changes
node.addListener(
  "cursors",
  (delta) => {
    console.log("Cursor positions changed:", delta);
  },
  controller.signal
);

// Listen for your own cursor changes
node.addListener(
  "selfCursor",
  (sel) => {
    if (sel) {
      console.log(`My cursor moved to ${sel.start}-${sel.end}`);
    } else {
      console.log("My cursor is no longer in this node");
    }
  },
  controller.signal
);

// Later, to remove all listeners
controller.abort();
```

| Parameter | Type                                       | Description                                     |
| --------- | ------------------------------------------ | ----------------------------------------------- |
| `type`    | `'value'/'clients'/'cursors'/'selfCursor'` | The type of event to listen for                 |
| `cb`      | Function                                   | Callback function when the event occurs         |
| `signal`  | `AbortSignal`                              | Signal to control the lifecycle of the listener |

#### Event Types

- **value**: Triggered when the node's content changes. The callback receives `(known: boolean) => void`, where `known` indicates if the change was made by the current client.
- **clients**: Triggered when the set of clients focused on this node changes. The callback receives `(delta: ReadonlyMap<string, boolean>) => void`.
- **cursors**: Triggered when cursor positions of other clients change. The callback receives `(delta: ReadonlyMap<string, Sel | false>) => void`.
- **selfCursor**: Triggered when your own cursor moves unexpectedly. The callback receives `(sel: Sel | false) => void`.

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
const textNode = doc.root().value("text-content");
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
