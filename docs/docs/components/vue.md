---
title: "Vue"
description: "Vue components for Gumnut"
---

# Vue

Gumnut provides a set of ready-to-use Vue components for integrating with your sites.

## Getting Started

Similar to [React](./react), your high-level steps are:

1. Provide a global configuration via `configureGumnut` (or environment variables)

2. Inside an editor or similar component:

  - call `useGumnutDoc` or `computedGumnutDoc` with the document ID you'll be using (typically this will match the ID of a database row)
  - along with a method providing a JWT granting access for the current user (or `buildTestToken` in dev)

3. Add `<GumnutText>` (for collaborative text) or `<GumunutData>` (for managed input fields, e.g., a slider or checkbox) to your components using the result from `useGumnutDoc`

4. Call `actions.load()` with your initial data (e.g., in an `effect` call on your database load)

- Gumnut is about editing your server data, and you need to provide it
- Every user will provide the same data, which is a no-op

5. Later, call `actions.commit()` to enact a change, and you'll be given a callback where you can commit to your database

- If this commit is successful, Gumnut will take a snapshot, recording attributed changes over time

## In-Detail

- Add "@gumnutdev/vue" to your project (we suggest via [pnpm](https://pnpm.io/))
- create a project on [the dashboard](https://hackathon.gumnut.dev), including creating a "local dev key" under API Keys

### 1. Provide Global Configuration

Be sure to call `configureGumnut`, probably in the same top-level file you call `app.mount()`.

```ts
import { configureGumnut } from "@gumnutdev/vue";

configureGumnut({
  projectId: "your-project-id-here",
  localDevKey: "...", // get this from API Keys in dashboard during local dev only
});
```

### 2. Call `useGumnutDoc`/`computedGumnutDoc`

In a Vue component that is an editor or hosts an editor, set up a connection to a document:

```vue
<script type="ts" setup>
import { computedGumnutDoc, buildTestToken } from "@gumnutdev/vue";

const props = defineProps<{ id: string }>();

const doc = computedGumnutDoc(() => {
  return {
    docId: `your-row/${props.id}`,
    getToken: () => buildTestToken(), 
  };
});
</script>
```

For now, you'll use `buildTestToken` to generate a dummy local token with acess to all documents.
This works because of the `localDevKey` you set, earlier.
You can also specify extra arguments such as the fake user's name and email.

### 3. Add/Replace Components

To use Gumnut, you'll have to add a collaborative component, such as `<GumnutText>`, which may replace your classic input components.
This has a number of modern convenience options including auto-resize and multiline.
You might want to try `resize="auto" wrap` for a growing textarea.

::: warning
Note that this is completely unstyled by default, so the example below includes a `border` quite literally so you can see where the component is!
:::

```vue
<template>
  <GumnutText name="fieldName" class="text" placeholder="Collaborative text here" />
  <GumnutFocus name="fieldName" />
</template>
<style scoped>
.text {
  border: 2px solid red;
}
</style>
```

Unlike regular form elements, you do not provide a `value` here—this is automatically bound to the Gumnut state.

Now, you should open your page in several tabs and try typing: you should see your other selves' cursors!
Be sure to also open [the dashboard](https://hackathon.gumnut.dev) and watch the edits on the "Data Index" page.

#### 3a. Troubleshooting

If you have trouble, you can add the `<GumnutStatus>` element anywhere in your page which simply emits a loud error if there is a problem.
Perhaps your `projectId` or other config is incorrect.
Otherwise, hit us up [on Discord](https://discord.gg/yu3u87AUNR) to ask for help!

#### 3b. Data-Only Components

The `<GumnutData>` element operates similarly to `<GumnutText>` but provides reactive state via `v-slot` for rendering within its scope.
Don't use this for text, as you'll only have "last-person-wins" behavior and no cursors.

For example:

```vue
<template>
  <GumnutData name="option" v-slot="{ value, dirty, clients, node, model }">
    <select v-model="model.value">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
    Is this value dirty? dirty={{ dirty }}<br />
    Clients currently here? clients={{ clients }}<br />
  </GumnutData>
</template>
```

This is a powerful low-level primitive for items which have 'last-writer' behavior, like numbers or sliders and so on.

::: tip
The Gumnut model currently just stores everything as a string.
If you are trying to bind to a slider or something which expects a number or boolean, be sure to keep in mind that you might need to convert between types.
:::

### 4. Call `actions.load()`

Gumnut is a convenient collaborative editor, but the point of it is to edit your existing data.

Right now, that data is a simple `Record<string, any>` of structured data.

The easiest way to ensure that your data is loaded is to call `actions.load()` as a result of having the server data available.
What this looks like will vary widely based on your stack.
One simplistic example might be:

```vue
<script type="ts" setup>

const editedData = inject('data'); // or from some other DB call
const doc = useGumnutDoc(/* ... */);

effect(() => {
  doc.actions.load(data);
});

</script>
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

```vue
<script type="ts" setup>

const editedData = inject('data'); // or from some other DB call
const doc = useGumnutDoc(/* ... */);

const handleSave = () => {
  doc.actions.commit(async ({ dirty, all }) => {
    // "dirty" contains just the changed fields
    await doLongRunningSaveToYourServer(all);
  });
};

</script>
```

If the callback you pass to `commit()` throws an exception, Gumnut will not take a snapshot.
If, however, it succeeds, all your fields will be marked "clean" and the snapshot will appear in [the dashboard](https://hackathon.gumnut.dev).

You can also call `revertAll()` to abandon all changes and reset to your last loaded state (e.g., you might wire this up to a form reset button).
Think of this as resetting all the changes in the active editing branch.

## AI Agents

Once you have access to a `GumnutDoc` instance, you can call its methods to trigger and observe agents.
(If your agents are set to "Always On", they may already be modifying your data.)

Be sure to read the [Agent](../guides/agent) guide for how you set up and configure agents.

Here's an example component which you can use to trigger an agent:

```vue
<script type="ts" setup>

const triggerAgentHandler = () => {
  doc.triggerAgent('agent-id-here');
};

const c = new AbortController();
onUnmounted(() => c.abort());
doc.value.addListener(
  'agentAction',
  (m) => {
    // maybe announce to a toast
  },
  c.signal,
);

</script>
```

The agent will join the current doc just like any other participant and collaborate on the fields.

## Fin

Phew!
That was a very rapid introduction to Gumunt's Vue components.

Join [Discord](https://discord.gg/yu3u87AUNR) to ask us questions, or look around the docs for explanations of other core concepts.
