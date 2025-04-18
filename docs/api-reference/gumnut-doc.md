# Gumnut Document

The `GumnutDoc` class represents a document in Gumnut that can contain multiple nodes, and is the primary way to connect and interact with Gumnut.
It provides methods for managing the document, accessing nodes, and monitoring changes.

A document in Gumnut is analagous to a form in a normal web app.
It contains multiple nodes (fields), that contain different types of data and can be edited by different users.

## Import

Create a `GumnutDoc` instance by calling `connectToGumnutDoc()`.

```javascript
import { connectToGumnutDoc } from '@gumnutdev/api';

const api = connectToGumnutDoc({ docId: 'document-id', getToken: ... });
const { doc, shutdown } = api;
```

## Properties

| Property    | Type            | Description                                                |
| ----------- | --------------- | ---------------------------------------------------------- |
| `projectId` | `string`        | The ID of the project that contains this document          |
| `docId`     | `string`        | The ID of this document                                    |
| `ready`     | `Promise<void>` | A promise that resolves when the document is ready for use |

## Methods

### useNode(node)

Gets a reference to a node within the document. If the node doesn't exist, it will be created automatically when data is written to it.

```javascript
const textNode = doc.useNode("text-content");
```

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `node`    | `string` | The ID of the node to access |

#### Returns

Returns a [`GumnutNode`](/api-reference/gumnut-node) instance representing the requested node.

#### Example

```javascript
// Access a text node
const mainText = doc.useNode("main-text");

// Access a data node
const settingsNode = doc.useNode("settings");
```

### nodes()

Returns an iterable of all node IDs in the document.

```javascript
const nodeIds = doc.nodes();
```

#### Returns

Returns an `Iterable<string>` containing all the node IDs.

#### Example

```javascript
// List all nodes in the document
for (const nodeId of doc.nodes()) {
  console.log(`Node: ${nodeId}`);
}
```

### commit()

Requests that the server create a snapshot of the current document state, while giving you a chance to write them to your own backend.
This can be useful to ensure all changes are persisted.

```javascript
doc.commit(async ({ changes }) => {
  // TODO: write your changes to your own backend here
  // if this throws, no Gumnut snapshot will be taken
});
```

#### Example

```javascript
// Handle a "save" button
saveButton.addEventListener("click", async () => {
  await doc.commit(async ({ changes }) => {
    await saveToYourDatabase("your-document-id", changes);
  });
});
```

### addListener(type, cb, signal)

Adds a listener for various events.

```javascript
doc.addListener(type, callback, signal);
```

| Parameter | Type          | Description                                        |
| --------- | ------------- | -------------------------------------------------- |
| `type`    | various       | The type of the event to listen to                 |
| `cb`      | `() => void`  | Callback function to invoke when something changes |
| `signal`  | `AbortSignal` | Signal to control the lifecycle of the listener    |

You can listen to the "error" (an error has occured), "ready" (the document is loaded from Gumnut) or "clients" events (different clients are accessing the document).

#### Example

```javascript
const controller = new AbortController();

doc.addListener(
  "clients",
  () => {
    console.log("The current set of clients here is", doc.clients());
  },
  controller.signal
);

// Later, to remove the listener
controller.abort();
```
