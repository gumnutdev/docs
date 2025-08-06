---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Modern SaaS"
  text: "for teams"
  tagline: Your app is multi-user, now help them work <em>together</em>.<br>Turn your product into a real-time workspace with editing, history, audits, and AI agents—fast.
  image:
    src: ./images/hero.svg
    alt: Gumnut
  actions:
    - theme: brand
      text: 📄 API Docs
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
<SocialProofSection />
<CaseStudiesSection />
<FeaturesDetailSection />
