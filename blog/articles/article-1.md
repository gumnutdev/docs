---
title: Hello World
date: 2025-04-09
description: Welcome to the Gumnut blog
---

# Welcome to the Gumnut Blog

This is a test post

::: code-group

```js [config.js]
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Blog",
  description: "Talking about the future !",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    search: {
      provider: "local",
    },
  },
});
```

:::

## Sub Section

Yes.
