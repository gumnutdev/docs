---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Modernize SaaS"
  text: "for teams"
  tagline:
  image:
    src: ./images/hero.svg
    alt: Gumnut
  actions:
    - theme: brand
      text: 📄 Docs
      link: https://docs.gumnut.dev
    - theme: alt
      text: 🧑‍💻 Book a call
      link: https://calendly.com/owen-gumnut/30min
---

<script setup>
import RecentPosts from './.vitepress/theme/components/RecentPosts.vue'
</script>

<RecentPosts />
