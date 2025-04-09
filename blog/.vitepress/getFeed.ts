import { Feed } from "feed";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";

// Define the post type to match VitePress ContentData
interface Post {
  url: string;
  frontmatter: Record<string, any>;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getFeed(posts: Post[]) {
  const feed = new Feed({
    title: "Gumnut Blog",
    description: "Building Gumnut - the modern textbox",
    id: "https://blog.gumnut.dev/",
    link: "https://blog.gumnut.dev/",
    language: "en",
    image: "https://blog.gumnut.dev/logo/dark.svg",
    favicon: "https://blog.gumnut.dev/logo/dark.svg",
    copyright: `Copyright © ${new Date().getFullYear()} Gumnut`,
    updated: new Date(),
    generator: "VitePress",
    feedLinks: {
      rss2: "https://blog.gumnut.dev/rss.xml",
    },
  });

  // Add posts to feed
  for (const post of posts) {
    feed.addItem({
      title: post.frontmatter.title || "Untitled",
      id: post.url,
      link: `https://blog.gumnut.dev${post.url}`,
      description: post.frontmatter.description || "",
      content: post.frontmatter.description || "",
      author: [
        {
          name: post.frontmatter.author || "Gumnut Team",
        },
      ],
      date: new Date(post.frontmatter.date || Date.now()),
    });
  }

  // Ensure the dist directory exists
  const distDir = resolve(__dirname, "dist");
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write feed to file
  fs.writeFileSync(resolve(distDir, "rss.xml"), feed.rss2());

  // Also write posts data to a JSON file for the Vue component
  // Save it in the public directory so it's accessible at runtime
  const publicDir = resolve(__dirname, "dist");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(
    resolve(publicDir, "posts.json"),
    JSON.stringify(posts, null, 2)
  );
}
