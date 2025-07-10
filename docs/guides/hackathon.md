# Hackathon

Thanks for joining us at the Hackathon!
There's two parts to the event, and you can do either or both.

1. Add Gumnut to your webapp forms (or to a demo app)
2. Through Gumnut, write agents to work on those forms

We hope you have fun!
Be sure to ask us (folks in Gumnut t-shirts) if you have any questions.

::: tip
This guide is a high-level introdocution to Gumnut and what you'll do in the hackathon.
Skip to [Projects + Framework](#projects-framework) to find the React and Vue guides and samples.
:::

## What is Gumnut

Gumnut is a developer tool which:

- allows you to add drop-in collaboration to your existing SaaS'es, replacing `<input>` with `<gumnut-text>`
- lets you leverage that integration with AI agents who type and work with you like peers.

At a high level, you load data from your site's existing database via your front-end.
While the page is open, that data is edited a bit like it's in a `git branch`.
When your users are ready, they call commit—Gumnut takes a snapshot and you save back to your original database.

Gumnut has no serious technical requirements aside modern, [baseline browsers](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) (sorry, no IE11).
It works as well on modern React apps as well as static forms from 10+ years ago.

## Hackathon Background/Requirements

Our docs are written for use on a Mac/unix-style environments.
If you're using Windows, you should use WSL or whatever you have the most success running Node.JS in.

Gumnut has libraries for React `@gumnutdev/react` and for Vue `@gumnutdev/vue`.
If you're comfortable with either stack, we recommend Vue.

We also have a low-level library in `@gumnutdev/api`.
Both React/Vue libraries internally depend on this.

## Goals

We'd love for you to show us an amazing integration with an existing site - and tell us what works, what didn't, and what you'd like to see.

We'd also love to see interesting uses of AI agents and how they can fit into your 'classic SaaS forms'.

## How You'll Use Gumnut

### 1. Add Gumnut

There's a few steps to get started.

1. Go to https://hackathon.gumnut.dev/ and create a project.
   Inside API keys, create a Local API Key.
   This is a 'allow everything' key just for local work.

2. Call `configureGumnut` somewhere in your project (in a top-level or index file):

   ```ts
   configureGumnut({
     projectId: "your-project-id",
     localDevKey: "<key>",
   });
   ```

3. When you want to use a document - and typically a document maps 1:1 to a database row you're editing - call `useGumnutDoc` or similar:

```ts
const { doc, control } = useGumnutDoc({
  docId: `whatever/doc/id/you/like`,
  getToken: () => buildTestToken("fake-user", { name: "Sam" }),
});
```

(In local dev mode, you can use `buildTestToken` to claim you're anyone).

4. Replace your existing `<Input>` or similar with `<GumnutText>`.

   This is a humble plain-text input with wide versatility, but it requires styling: we don't provide any out of the box.

   - In React/Vue, these are both called `<GumnutText>`.
   - In pure JS, these are Custom Elements provided by `@gumnutdev/api/dom` that are similarly called `<gumnut-text>`.

5. Call `doc.actions.load` and `doc.actions.commit` when your data is loaded by the client, and when they want to save, respectively.

   Gumnut differs from other collaboration products by focusing on SaaS-like data.
   Whenever any client opens the page, it's safe to call `doc.actions.load` again - it won't replace data that's "pending" in your git-like brancch.

   You can load structured data here, including lists of data that can be edited collaboratively (in a CRDT-_like_ way).

### 2. Build + Trigger AI

1. Create an AI agent at https://hackathon.gumnut.dev/.

   This agent can - translate to French, make sure a field is filled out, do text transformation, and so on.

::: tip
Right now, agents are limited in their abilities/context.
The hackathon is about how it feels to collaborate with agents in your forms.
If you e.g., are interested in providing agents with millions of legal documents to help correctly spot mistakes, let us know! 👀
:::

2. Provide descriptions of the fields, if required, at the same dashboard.
   The UI is pretty low-tech, but if your fields need more explanation than what their low-level ID is, you can add detail here.

3. Listen to the `doc.agentAction` event in your pages, potentially showing the message to your end-users: this describes what the agent is going to do.

4. Set the agent to "Always-On", so it works on any open document; or, create a button in your UI that calls `doc.triggerAgent` for a once-off run.

## Projects + Framework

We have two different demo projects written in Vue and React.
Both have roots in "vibe coding" 🤖

You're also very welcome to use your own application in one of these frameworks, or use the lower-level API.

All APIs have fairly clear docs built-in: if you're confused, ctrl/cmd-click on a symbol.

### Vue

Check out [the guide](../components/vue) for Vue!
Our library for Vue is at [`@gumnutdev/vue`](http://npmjs.com/package/@gumnutdev/vue).

We also have [a demo app](https://github.com/gumnutdev/vue-demo) you can check out.
The `main` branch _does not_ have Gumnut but is something you can add it to tonight.

### React

Check out [the guide](../components/react) for React!
Our library for React is at [`@gumnutdev/react`](http://npmjs.com/package/@gumnutdev/react).

React's [demo app](https://github.com/gumnutdev/quick-notes) is much the same.
It's actually a Next.JS app.
The `main` branch is ready to be modified.

## Low-Level API

We have a low-level API at [`@gumnutdev/api`](http://npmjs.com/package/@gumnutdev/api).
If you'd like to use it, let us know!

It's fairly similar: you still need to call `useGumnutDoc` and so on, but you'll be poking more directly into Gumnut's internal data structure to wire up your components, which are all custom elementrs (e.g. `gumnut-text`).

## Skip To The End

Both Vue and React demos above have a branch called `use-gumnut`.
Check it out, run `pnpm install` and `pnpm start` - you'll be already wired up to Gumnut.

These projects are configured with our internal key, so you might want to change their `configureGumnut` call to use your own project/key, so you can create new types of agents.

## Thanks!

Have fun!
Please give us feedback - directly or via [hello@gumnut.dev](mailto:hello@gumnut.dev).
Thanks again.
