# Gumnut Document

The `GumnutDoc` class represents a document in Gumnut that can contain multiple nodes, and is the primary way to connect and interact with Gumnut.
It provides methods for managing the document, accessing nodes, and monitoring changes.

A document in Gumnut is analogous to a form in a normal web app.
It contains multiple nodes (fields), that contain different types of data and can be edited by different users.

## Import

Create a `GumnutDoc` instance by calling `connectToGumnutDoc()`.

```javascript
import { connectToGumnutDoc } from '@gumnutdev/api';

const api = connectToGumnutDoc({ docId: 'document-id', getToken: ... });
const { doc, shutdown } = api;
```

## Properties

| Property     | Type                       | Description                                                                                      |
| ------------ | -------------------------- | ------------------------------------------------------------------------------------------------ |
| `projectId`  | `string`                   | The ID of the project that contains this document                                                |
| `docId`      | `string`                   | The ID of this document                                                                          |
| `ready`      | `Promise<void>`            | A promise that resolves when the document is ready for use                                       |
| `shutdown`   | `boolean`                  | Whether this doc is dead/shutdown and should be recreated                                        |
| `error`      | `string\|Error\|undefined` | Any error state currently reported                                                               |
| `actions`    | `GumnutDocActions`         | Contains methods for loading, reverting, and committing document changes                         |

## Methods

### root().value(node)

Gets a reference to a node within the document. If the node doesn't exist, it will be created automatically when data is written to it.

```javascript
const textNode = doc.root().value("text-content");
```

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `node`    | `string` | The ID of the node to access |

#### Returns

Returns a [`GumnutNode`](/api-reference/gumnut-node) instance representing the requested node.

#### Example

```javascript
// Access a text node
const mainText = doc.root().value("main-text");

// Access a data node
const settingsNode = doc.root().value("settings");
```

### keys()

Returns an iterable of all keys on the root object.

```javascript
const nodeIds = doc.root.keys();
```

#### Returns

Returns an `Iterable<string>` containing all the node IDs.

#### Example

```javascript
// List all nodes in the document
for (const nodeId of doc.root.keys()) {
  console.log(`Node: ${nodeId}`);
}
```

### actions.commit()

Requests that the server create a snapshot of the current document state, while giving you a chance to write them to your own backend.
This can be useful to ensure all changes are persisted.

```javascript
doc.actions.commit(async ({ dirty, all }) => {
  // TODO: write your changes to your own backend here
  // if this throws, no Gumnut snapshot will be taken
  // 'changes' contains only the dirty nodes
  // 'all' contains all nodes
});
```

#### Example

```javascript
// Handle a "save" button
saveButton.addEventListener("click", async () => {
  await doc.actions.commit(async ({ dirty }) => {
    await saveToYourDatabase("your-document-id", changes);
  });
});
```

### actions.load(nodes, opts)

Instructs Gumnut to load canonical data into the document.

```javascript
doc.actions.load({ "node-id": "node value" });
```

| Parameter | Type                     | Description                                                    |
| --------- | ------------------------ | -------------------------------------------------------------- |
| `nodes`   | `Record<string, string>` | Object mapping node IDs to their values                        |

### actions.revertAll()

Reverts all changes to the canonical data, clearing all dirty fields.

```javascript
doc.actions.revertAll();
```

### userForClientId(clientId)

Read the user information for a given client ID.

```javascript
const userInfo = doc.userForClientId("client-123");
```

| Parameter  | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `clientId` | `string` | The client ID to get user information for |

#### Returns

Returns a `UserInfo` object containing the user's ID and profile information, or `undefined` if the client ID is not found.

### clients()

Take a snapshot of the current clients connected to this document.

```javascript
const clientIds = doc.clients();
```

#### Returns

Returns an `Iterable<string>` containing all the client IDs.

### addListener(type, cb, signal)

Adds a listener for various events.

```javascript
doc.addListener(type, callback, signal);
```

| Parameter | Type                          | Description                                        |
| --------- | ----------------------------- | -------------------------------------------------- |
| `type`    | `'error'\|'ready'\|'clients'` | The type of the event to listen to                 |
| `cb`      | Function                      | Callback function to invoke when something changes |
| `signal`  | `AbortSignal`                 | Signal to control the lifecycle of the listener    |

#### Event Types

- **error**: Dispatched if an error occurs while running this document. The callback receives `(error: string | Error) => void`.
- **ready**: Dispatched when the document is ready. This may happen more than once if you're disconnected from the server. The callback receives `() => void`.
- **clients**: Dispatched when the set of clients connected to the document changes. The callback receives `(delta: ReadonlyMap<string, boolean>) => void`.

#### Example

```javascript
const controller = new AbortController();

doc.addListener(
  "clients",
  (delta) => {
    console.log("The current set of clients here is", doc.clients());
    console.log("Client changes:", delta);
  },
  controller.signal
);

// Later, to remove the listener
controller.abort();
```
