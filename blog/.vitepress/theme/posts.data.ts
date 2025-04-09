import { createContentLoader } from "vitepress";

// This file is used by the theme to provide post data to components
export default {
  watch: ["articles/*.md"],
  load(watchedFiles) {
    return watchedFiles.map((file) => {
      // This is a simplified version - in a real implementation,
      // you would parse the frontmatter and content here
      return {
        url: file.replace(/^articles\//, "/").replace(/\.md$/, ".html"),
        frontmatter: {},
        excerpt: "",
      };
    });
  },
};
