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

      // Global script for blog posts loading in MPA mode
      const loadBlogPosts = () => {
        const container = document.getElementById("blog-posts-container");
        if (!container) return;

        console.log("Loading blog posts...");

        fetch("/posts.json")
          .then((response) => {
            if (!response.ok) {
              if (response.status === 404) {
                container.innerHTML =
                  "<p>No posts found. Check back soon for new articles!</p>";
                return;
              }
              throw new Error(`Failed to load posts: ${response.statusText}`);
            }
            return response.json();
          })
          .then((posts) => {
            console.log("Posts loaded:", posts.length);

            if (posts.length === 0) {
              container.innerHTML =
                "<p>No posts found. Check back soon for new articles!</p>";
              return;
            }

            const postsHtml = posts
              .map(
                (post: any) => `
              <li>
                <a href="${post.url}">${
                  post.frontmatter.title || "Untitled"
                }</a>
                <div class="post-meta">
                  ${
                    post.frontmatter.date
                      ? `<span class="date">${new Date(
                          post.frontmatter.date
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}</span>`
                      : ""
                  }
                  ${
                    post.frontmatter.author
                      ? `<span class="author">by ${post.frontmatter.author}</span>`
                      : ""
                  }
                </div>
                ${
                  post.frontmatter.description
                    ? `<p>${post.frontmatter.description}</p>`
                    : ""
                }
              </li>
            `
              )
              .join("");

            container.innerHTML = `
              <h1>All Blog Posts</h1>
              <ul>${postsHtml}</ul>
            `;
          })
          .catch((error) => {
            console.error("Error loading posts:", error);
            container.innerHTML = `<div class="error">Failed to load posts: ${error.message}</div>`;
          });
      };

      // Run when DOM is ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadBlogPosts);
      } else {
        loadBlogPosts();
      }
    }
  },
};
