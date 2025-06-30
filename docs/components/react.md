---
title: "React"
description: "React components for Gumnut"
---

# React

Gumnut provides a set of ready-to-use React components that make it easy to integrate collaborative form editing experiences into your applications.

::: tip
Gumnut's API is much like a "form management library", but it backs onto collaborative state.
:::

## Getting Started

At a high-level, you have to perform a few steps to use Gumnut:

1. Provide a global configuration via `configureGumnut` (or environment variables)

2. Call `useGumnutDoc` with the document ID you'll be using (typically this will match the ID of a database row), along with a method providing a JWT granting access for the current user

3. Add `<GumnutText>` (for collaborative text) or `<GumunutData>` (for managed input fields, e.g., a slider or checkbox) to your components using the result from `useGumnutDoc`

4. Call `actions.load()` with your initial data (e.g., in a dependency-free `useEffect`, or a [Remix `clientLoader`](https://remix.run/docs/en/main/route/client-loader))

- Gumnut is about editing your server data, and you need to provide it
- Every user will provide the same data, which is a no-op

5. Later, call `actions.commit()` to enact a change, and you'll be given a callback where you can commit to your database

- If this commit is successful, Gumnut will take a snapshot, recording attributed changes over time

## In-Detail

Before you start, you'll need to:

- add "@gumnutdev/react" to your React project using your favorite package manager (we prefer [pnpm](https://pnpm.io/))
- create a project on [the dashboard](https://hackathon.gumnut.dev), including creating a "local dev key" under API Keys

### 1. Provide Global Configuration

In your project, be sure to call `configureGumnut` somewhere, e.g., in your entrypoint:

```ts
import { configureGumnut } from "@gumnutdev/react";

configureGumnut({
  projectId: "your-project-id-here",
  localDevKey: "...", // get this from API Keys in dashboard during local dev only
});
```

Alternatively, you can also expose the environment variables `GUMNUT_PROJECT_ID` and `GUMNUT_LOCAL_DEV_KEY` though your dev environment.
This is a better idea long-term, as the `localDevKey` gives dangerous levels of access to your project during testing: you _should not_ commit it to a repo.

::: tip
If you're using Next.JS, you must call `configureGumnut` from within a `"use client"` file, perhaps as part of a `...Providers` component.
You can safely call it at the top of the file&mdash;you don't need to put it inside the component itself.
:::

### 2. Call `useGumnutDoc`

In a component, such as a form, set up a connection to a document of your choice:

```tsx
import { useGumnutDoc, buildTestToken } from "@gumnutdev/react";

function YourComponent() {
  const getToken = () => buildTestToken('some-fake-uid');
  const scope = useGumnutDoc({ getToken, docId: "your-document-id" });
  // ...
}
```

For now, you'll use `buildTestToken` to generate a dummy local token with acess to all documents.
This works because of the `localDevKey` you set, earlier.
You can also specify extra arguments such as the fake user's name and email.

### 3. Add Compoonents

To use Gumnut, you'll have to add a collaborative component, such as `<GumnutText>`.
This has a number of options including auto-resize and multiline.

::: warning
Note that this is completely unstyled by default, so the example below includes a `border` quite literally so you can see where the component is!
:::

```tsx
import { useGumnutDoc, buildTestToken, GumnutText } from "@gumnutdev/react";

function YourComponent() {
  // ... setup here

  return (
    <>
      <GumnutText
        control={scope.control}
        name="an-input"
        rows={4}
        resize="auto"
        multiline
        placeholder="Some data goes here"
        style={{
          background: "white",
          border: "2px solid #eee",
          borderRadius: "4px",
        }}
      />
    </>
  );
}
```

Unlike regular form elements, you do not provide a `value` here—this is automatically bound to the Gumnut state.

Now, you should open your page in several tabs and try typing: you should see your other selves' cursors!
Be sure to also open [the dashboard](https://hackathon.gumnut.dev) and watch the edits on the "Data Index" page.

#### 3a. Troubleshooting

If you have trouble, you can add the `<GumnutStatus>` element anywhere in your page which simply emits a loud error if there is a problem.
Perhaps your `projectId` or other config is incorrect.
Otherwise, hit us up [on Discord](https://discord.gg/yu3u87AUNR) to ask for help!

#### 3b. Data-Only Components

The `<GumnutData>` element operates similarly to `<GumnutText>` but accepts a `render` prop which can be used to control traditional input or other elements.
You should probably _not_ use this for text, as you'll only have "last-person-wins" behavior and no cursors.

Use it like this:

```tsx
import { useGumnutDoc, buildTestToken, GumnutData } from "@gumnutdev/react";

function YourComponent() {
  // ... setup here

  return (
    <>
      <GumnutData
        control={scope.control}
        name="an-input"
        render={(arg) => (
          <select {...arg.field}>
            <option value="">Default</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        )}
      />
    </>
  );
}
```

You should also use `GumnutData` when you just want to render the value of some field: the value is in `arg.field.value`.
This is required as it might change remotely, and the component will re-run `render` whenever the underlying value changes.

While out of scope of this brief tutorial, `<GumnutData>` can also power focus indicators and the "dirty bit": it does not have to render data or components at all, but rather, it can render metadata for this node, such as who has their cursor here.
Be sure to load up its documentation by ctrl-clicking in VSCode or your preferred editor.

### 4. Call `actions.load()`

Gumnut is a convenient collaborative editor, but the point of it is to edit your existing data.

Right now, that data is a simple `Record<string, any>` of structured data.

The easiest way to ensure that your data is loaded is to call `actions.load()` as a result of having the server data available.
What this looks like will vary widely based on your stack.
One simplistic example might be:

```tsx
import { useGumnutDoc } from '@gumnutdev/react';

function YourComponent() {
  const scope = useGumnutDoc(...);
  const data = useFormDataFromServer();

  useEffect(() => {
    if (data !== undefined) {
      scope.actions.load(data);
    }
  }, [data]);
}
```

Data that is dirty will not be replaced on additional loads.
This is a complex concept; try Gumnut out to get a clearer sense of it.
The key is that you can safely call `.load` as part of your client's side-effects: this is what makes integrating Gumnut easy.

::: tip
The load call should be used when you 'start' an editing session and the data you're loading first arrives from the server.
Don't call it every time your data changes.
:::

### 5. Call `actions.commit()`

When you're confident you want to make a snapshot of your data, call `commit()`.
This might be wired up to some button in the form:

```tsx
function YourComponent() {
  const scope = useGumnutDoc(...);

  const handleSubmit = async () => {
    scope.actions.commit(async ({ dirty, all }) => {
      // "dirty" contains just the changed fields
      await doLongRunningSaveToYourServer(dirty);
    });
  };

  return <>
    <button onClick={handleSubmit}>Submit</button>
  </>
}
```

If the callback you pass to `commit()` throws an exception, Gumnut will not take a snapshot.
If, however, it succeeds, all your fields will be marked "clean" and the snapshot will appear in [the dashboard](https://hackathon.gumnut.dev).

You can also call `revertAll()` to abandon all changes and reset to your last loaded state (e.g., you might wire this up to a form reset button).

## Fin

Phew!
That was a very rapid introduction to Gumunt's React components.

Join [Discord](https://discord.gg/yu3u87AUNR) to ask us questions, or look around the docs for explanations of other core concepts.
