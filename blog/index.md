---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Building Gumnut"
  text: "the modern textbox"
  tagline: Adventures in building a real-time editor
  image:
    src: ./images/hero.svg
    alt: Building Gumnut hero image
  actions:
    - theme: brand
      text: Articles
      link: /articles
    - theme: alt
      text: Docs
      link: https://docs.gumnut.dev
---

<script setup>
import RecentPosts from './.vitepress/theme/components/RecentPosts.vue'
</script>

<RecentPosts />
