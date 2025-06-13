---
title: Working with AI
description: Investigating how we can work with AI inside SaaS applications
date: 2025-05-28
---

# Working _with_ AI

At [Gumnut](https://gumnut.dev), we have built the modern textbox, adding real-time collaboration to forms. The idea that we want users to be able to work _with_ not _against_ each other in your SaaS.

But why not apply the same principle to AI?

Most AI consists of some "chat" or input that you type into, and it inserts over your textarea/has some output that you have to wait for. The UX can feel a bit clunky, sometimes the AI is really slow, sometimes it doesn't get _your context_.

Gumnut is in a great space to explore this problem. Since we have this real-time collaborative tool, it's an ideal vessel to explore adding AI agents _typing alongside you_. So an agent can type in the same textbox as you, fill in a form for you, including pressing any checkbox, moving sliders. All you need to do is give it an _outcome_ and _context_ and the LLMs are amazing at figuring out the rest.

So feasibly if your application has a form to fill in, you could create an agent that enables users to specify the outcome, and you provide the context necessary for the agent to fill it in. It's so cool!

# Why stop at one?

This led us to the idea there are lots of applications for different _types of agents_. For example, having a passive "spelling and grammar" agent that sits in the background and automatically corrects users spelling and grammar mistakes, should they choose to enable it.

Here's a quick demo we hacked together for this:

<video width="320" height="240" controls>
  <source src="https://gumnut.dev/assets/demo-multi-DsdOMSR4.mp4" type="video/mp4">
</video>

What about a "snapshot agent" that notices, "hey you just made a large change, I took a snapshot from a few seconds ago incase you need it"

Or even a translation agent, that translates real-time as you type.

Do you have any ideas?

# Come and try it for yourself

We don't pretend to have the ideal UX for this problem, but we'd love to explore it with you!

We're running a hackathon at [Relevance AI](https://relevance.ai/) on the 2nd of July, please come if you're in Sydney and see what kinds of agents you want to make! Click the image below to RSVP!

[![RSVP here](/public/images/gumnut-hackathon-static.png)](https://gumnut.dev/hack)
