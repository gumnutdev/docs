---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Modern SaaS"
  text: "to work together"
  tagline: Add real-time collaboration, auditing, version history and AI agents, in your app, in minutes.
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
import DemoSection from './.vitepress/theme/components/DemoSection.vue'
import SocialProofSection from './.vitepress/theme/components/SocialProofSection.vue'
import CaseStudiesSection from './.vitepress/theme/components/CaseStudiesSection.vue'
import FeaturesOverviewSection from './.vitepress/theme/components/FeaturesOverviewSection.vue'
import FeaturesDetailSection from './.vitepress/theme/components/FeaturesDetailSection.vue'
</script>

<DemoSection />
<FeaturesOverviewSection />
<CaseStudiesSection />
<FeaturesDetailSection />
