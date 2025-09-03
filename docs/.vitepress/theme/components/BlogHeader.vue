<script setup lang="ts">
import { useData } from 'vitepress/client'
import { defineComponent } from 'vue'

interface PageData {
  frontmatter: {
    image?: string
    title?: string
  }
}

const { page } = useData()

defineComponent({
  name: 'BlogHeader'
})
</script>

<template>
  <div v-if="page?.frontmatter?.image" class="blog-header-image">
    <img :src="page.frontmatter.image" :alt="page.frontmatter.title" />
  </div>
</template>

<style scoped>
.blog-header-image {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.blog-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style> 