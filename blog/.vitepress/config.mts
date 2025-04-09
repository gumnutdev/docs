import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gumnut Blog",
  description: "Building Gumnut - the modern textbox",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo/light.png",
      dark: "/logo/dark.png",
      alt: "Gumnut Logo",
    },
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Articles",
        items: [{ text: "Welcome", link: "/articles/article-1" }],
      },
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
});
