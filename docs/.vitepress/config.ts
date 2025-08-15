import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs",
  description: "Documentation for Gumnut - the modern textbox",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo/light.svg",
      dark: "/logo/dark.svg",
      alt: "Gumnut Logo",
    },
    // nav: [{ text: "Support", link: "mailto:hello@gumnut.dev" }],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/yu3u87AUNR" },
      { icon: "github", link: "https://github.com/gumnutdev" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/gumnut-dev/",
      },
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
            items: [
              { text: "Authentication", link: "/guides/authentication" },
              { text: "Hackathon", link: "/guides/hackathon" },
              { text: "Agent", link: "/guides/agent" },
            ],
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
              { text: "Gumnut Focus", link: "/components/gumnut-focus" },
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
    footer: {
      copyright: "Copyright © 2025 Gumnut Dev Pty Ltd",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo/favicon.ico" }],
    [
      "script",
      {
        defer: "",
        "data-domain": "docs.gumnut.dev",
        src: "https://plausible.io/js/script.js",
      },
    ],
  ],
});
