import { defineConfig } from "vitepress";
import { getFeed } from "./getFeed";
import { createContentLoader } from "vitepress";

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
    // Generate RSS feed
    await getFeed(posts);
  },
});
