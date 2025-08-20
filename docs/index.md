---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Modern SaaS"
  text: "for teams"
  tagline: Your app is multi-user, make it <em>multiplayer</em>.<br>Turn your product into a real-time workspace with live co-editing, version history, audit trails, and AI agents—in minutes.
  image:
    src: ./images/hero.svg
    alt: Gumnut
  actions:
    - theme: brand
      text: 📄 API Docs
      link: /introduction
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
<!-- <SocialProofSection /> -->
<CaseStudiesSection />
<FeaturesDetailSection />
