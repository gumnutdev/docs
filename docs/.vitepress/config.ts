import { defineConfig } from "vitepress";
import { getFeed } from "./getFeed";
import { createContentLoader } from "vitepress";
import implicitFigures from "markdown-it-implicit-figures";

// Helper function to parse dates consistently
function parseDate(dateStr: any): Date {
  if (!dateStr) {
    return new Date(0); // Return a very old date if no date is provided
  }
  if (typeof dateStr !== "string") {
    return new Date(dateStr); // Try to parse whatever we got
  }
  // If the date string is already in ISO format, use it directly
  if (dateStr.includes("T")) {
    return new Date(dateStr);
  }
  // Otherwise, assume it's in YYYY-MM-DD format and add time
  return new Date(`${dateStr}T00:00:00.000Z`);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gumnut 🦩",
  description: "Modern SaaS for teams",
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    externalLinkIcon: false,
    logo: {
      light: "/logo/light.svg",
      dark: "/logo/dark.svg",
      alt: "Gumnut Logo",
    },
    nav: [
      { text: "Pricing", link: "/pricing" },
      {
        text: "Resources",
        items: [
          { text: "Blog", link: "/blog" },
          { text: "Questions Hub", link: "/questions" },
        ],
      },
      { text: "Case Studies", link: "/case-studies" },
      { text: "Docs", link: "/docs" },
      { text: "Login", link: "https://dashboard.gumnut.dev" },
      { text: "Book a demo", link: "https://calendly.com/owen-gumnut/30min" },
    ],
    socialLinks: [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/gumnut-dev/",
      },
      {
        icon: "discord",
        link: "https://discord.gg/yu3u87AUNR",
      },
    ],
    sidebar: [
      {
        text: "Guides",
        items: [
          {
            text: "Get Started",
            items: [
              { text: "Introduction", link: "/docs/" },
              { text: "Quick Start", link: "/docs/quickstart" },
              { text: "Walkthrough", link: "/docs/walkthrough" },
            ],
          },
          {
            text: "Guides",
            items: [
              { text: "Authentication", link: "/docs/guides/authentication" },
              { text: "Hackathon", link: "/docs/guides/hackathon" },
              { text: "Agent", link: "/docs/guides/agent" },
            ],
          },
          {
            text: "Frameworks",
            items: [
              { text: "React", link: "/docs/components/react" },
              { text: "Vue", link: "/docs/components/vue" },
            ],
          },
          {
            text: "Components",
            items: [
              { text: "Gumnut Data", link: "/docs/components/gumnut-data" },
              { text: "Gumnut Focus", link: "/docs/components/gumnut-focus" },
              { text: "Gumnut Status", link: "/docs/components/gumnut-status" },
              { text: "Gumnut Text", link: "/docs/components/gumnut-text" },
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
              { text: "Gumnut API", link: "/docs/api-reference/gumnut-api" },
              { text: "Gumnut Doc", link: "/docs/api-reference/gumnut-doc" },
              { text: "Gumnut Node", link: "/docs/api-reference/gumnut-node" },
            ],
          },
        ],
      },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(implicitFigures, {
        figcaption: true,
        copyAttrs: "^class$",
      });
    },
  },
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "script",
      {
        defer: "",
        "data-domain": "gumnut.dev",
        src: "https://plausible.io/js/script.js",
      },
    ],
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  async transformPageData(pageData) {
    if (pageData.relativePath.startsWith("articles/")) {
      if (pageData.frontmatter.image) {
        pageData.frontmatter.class = "has-header-image";
      }
    }

    if (pageData.relativePath.startsWith("case-studies/")) {
      if (pageData.frontmatter.image) {
        pageData.frontmatter.class = "has-header-image";
      }
    }
  },
  async buildEnd() {
    // Create content loader for blog posts for RSS feed
    const postsLoader = createContentLoader("articles/*.md", {
      includeSrc: true,
      render: true,
      excerpt: true,
      transform(rawData) {
        return rawData
          .sort((a, b) => {
            const dateA = parseDate(a.frontmatter.date);
            const dateB = parseDate(b.frontmatter.date);
            return dateB.getTime() - dateA.getTime();
          })
          .map((page) => {
            return {
              url: page.url,
              frontmatter: page.frontmatter,
              excerpt: page.excerpt,
            };
          });
      },
    });

    const posts = await postsLoader.load();
    await getFeed(posts);
  },
});
