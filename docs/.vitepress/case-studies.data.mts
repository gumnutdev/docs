import { createContentLoader } from "vitepress";

export default createContentLoader("case-studies/**/*.md", {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
        author: frontmatter.author,
        description: frontmatter.description,
        image: frontmatter.image,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});
