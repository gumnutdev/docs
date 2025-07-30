import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./custom.css";
// @ts-ignore
import MyLayout from "./MyLayout.vue";
import { inBrowser } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: MyLayout as any,
  enhanceApp() {
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
