import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./custom.css";
// @ts-ignore
import MyLayout from "./MyLayout.vue";
// @ts-ignore
import BlogPosts from "./components/BlogPosts.vue";
// @ts-ignore
import CaseStudies from "./components/CaseStudies.vue";
// @ts-ignore
import BlogHeader from "./components/BlogHeader.vue";
import { inBrowser } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: MyLayout as any,
  enhanceApp({ app }: { app: any }) {
    // Register the BlogPosts component
    app.component("BlogPosts", BlogPosts);
    // Register the CaseStudies component
    app.component("CaseStudies", CaseStudies);
    // Register the BlogHeader component
    app.component("BlogHeader", BlogHeader);

    if (inBrowser) {
      import("../usePostHog").then(({ usePostHog }) => {
        const { posthog } = usePostHog();

        // Track page views
        window.addEventListener("load", () => {
          posthog.capture("$pageview", {
            $current_url: window.location.href,
          });
        });
      });
    }
  },
};
