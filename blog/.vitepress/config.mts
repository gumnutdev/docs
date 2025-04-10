import { defineConfig } from "vitepress";
import { getFeed } from "./getFeed";
import { createContentLoader } from "vitepress";
import fs from "fs";
import { resolve } from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gumnut Blog",
  description: "Building Gumnut - the modern textbox",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo/light.svg",
      dark: "/logo/dark.svg",
      alt: "Gumnut Logo",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Articles", link: "/articles" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/gumnut-dev/",
      },
      {
        icon: "discord",
        link: "https://discord.gg/yu3u87AUNR",
      },
    ],
  },
  async transformPageData(pageData) {
    if (pageData.relativePath.startsWith("articles/")) {
      // Create content loader for blog posts
      const postsLoader = createContentLoader("articles/*.md", {
        includeSrc: true,
        render: true,
        excerpt: true,
        transform(rawData) {
          return rawData
            .sort((a, b) => {
              return (
                +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
              );
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

      // Load posts data
      const posts = await postsLoader.load();

      // Write posts data to a JSON file for the Vue component
      // Write to both the dist directory and the public directory
      const distDir = resolve(__dirname, "dist");
      const publicDir = resolve(__dirname, "..", "public");

      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      fs.writeFileSync(
        resolve(distDir, "posts.json"),
        JSON.stringify(posts, null, 2)
      );

      fs.writeFileSync(
        resolve(publicDir, "posts.json"),
        JSON.stringify(posts, null, 2)
      );
    }
  },
  async buildEnd() {
    // Create content loader for blog posts
    const postsLoader = createContentLoader("articles/*.md", {
      includeSrc: true,
      render: true,
      excerpt: true,
      transform(rawData) {
        return rawData
          .sort((a, b) => {
            return (
              +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
            );
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

    // Load posts data
    const posts = await postsLoader.load();

    // Write posts data to a JSON file for the Vue component
    const publicDir = resolve(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(
      resolve(publicDir, "posts.json"),
      JSON.stringify(posts, null, 2)
    );

    // Generate RSS feed
    await getFeed(posts);
  },
});
