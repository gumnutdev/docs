import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs",
  description: "Documentation for Gumnut - the modern textbox",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo/dark.png",
      dark: "/logo/dark.png",
      alt: "Gumnut Logo",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Support", link: "mailto:hello@gumnut.dev" },
    ],

    sidebar: [
      {
        text: "Guides",
        items: [
          {
            text: "Get Started",
            items: [
              { text: "Introduction", link: "/introduction" },
              { text: "Quick Start", link: "/quickstart" },
              { text: "Walkthrough", link: "/walkthrough" },
            ],
          },
          {
            text: "Guides",
            items: [{ text: "Authentication", link: "/guides/authentication" }],
          },
          {
            text: "Frameworks",
            items: [
              { text: "React", link: "/components/react" },
              { text: "Vue", link: "/components/vue" },
            ],
          },
          {
            text: "Components",
            items: [
              { text: "Gumnut Data", link: "/components/gumnut-data" },
              { text: "Gumnut Status", link: "/components/gumnut-status" },
              { text: "Gumnut Text", link: "/components/gumnut-text" },
            ],
          },
        ],
      },
      {
        text: "API Reference",
        items: [
          {
            text: "API Documentation",
            items: [
              { text: "Gumnut API", link: "/api-reference/gumnut-api" },
              { text: "Gumnut Doc", link: "/api-reference/gumnut-doc" },
              { text: "Gumnut Node", link: "/api-reference/gumnut-node" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32m0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32m-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48z"/></svg>',
        },
        link: "https://blog.gumnut.dev",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/gumnut-dev/",
      },
      {
        icon: "discord",
        link: "https://discord.gg/yu3u87AUNR",
      },
    ],

    footer: {
      message: "Made with ❤️ by Gumnut",
      copyright: "Copyright © 2025 Gumnut",
    },
  },
});
