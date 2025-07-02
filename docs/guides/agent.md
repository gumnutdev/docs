---
title: "Agent"
description: "Agents for Gumnut"
---

# Agent

Agents can be configured in your project [in the dashboard](https://hackathon.gumnut.dev).

They can be 'always-on' or triggered manually through your front-end (see the React/Vue guides).

## Configuration

### Create Agent

In the dashboard, you can view/update existing agents via the UI.

![List agents](/images/agent/agent-list.png)

To create an agent, click the button, give it a name and motivation.
The motivation can be long; it's just fed as context to the LLM.
Be sure to be specific about its goals and what fields it should modify.

![Create agent](/images/agent/create-agent.png)

::: tip
Because this field is backed onto Gumnut too, you can edit or create agents with your colleages.
:::

You can either configure the agent to be "always on" - it will run whenever a document in your project is open and its motivation is satisfied - or leave it as something that must be triggered manually.

Once you've created the agent, open it to record its ID for use inside client-side code.

### Describe Fields

You can also use the "Describe Fields" option to give more specific information about fields in your documents.

This is optional, and an agent's motivation might supercede this, but it can be helpul to describe what sort of data is in a particular field.
You might also include whether this is a number or requires a certain format, or how much data is suitable here (e.g., a few words, many sentences), and so on.

::: warning
The UI for editing fields is a bit low-tech right now.
Be sure to hit save at the bottom when you're done.
:::

## Limitations

Right now, always-on agents operate on every doc in your project.
This isn't the long-term goal: there will be more specific matching e.g., by prefix or type.

Similarly, agents can't operate on deeply nested data (e.g., lists of data within your document).
We think it's still compelling at the top-level.

## Triggering Agents in your front-end

Broadly, once you have a `GumnutDoc`, you can trigger an agent like this:

```ts
doc.triggerAgent('agent-id', 'optional extra context to start with');
```

The same agent is either on or off for a given document - there cannot be several of the same agent running on the same document at once.

### Listening To Thoughts

The document will also emit events - the agent's thought process, what it is about to do.
You might have seen these in our demos.

Be sure to wire them up too:

```ts
doc.value.addListener(
  'agentAction',
  (m) => {
    console.info('Agent action', m);
    // maybe announce to a toast
  },
  c.signal,
);
```