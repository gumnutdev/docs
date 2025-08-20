<script setup>
import DefaultTheme from 'vitepress/theme'
import SiteFooter from './components/SiteFooter.vue'
import BlogHeader from './components/BlogHeader.vue'
import { useData } from 'vitepress/client'

const { Layout } = DefaultTheme
const { page } = useData()

// Check if this is an individual blog post (articles directory) and not a listing page
const isBlogPost = page.value?.relativePath?.startsWith('articles/') && 
                  page.value?.relativePath?.includes('.md') &&
                  !page.value?.relativePath?.endsWith('index.md')

// Check if this is a docs page (docs directory)
const isDocsPage = page.value?.relativePath?.startsWith('docs/')
</script>

<template>
  <Layout>
    <template #doc-before>
      <BlogHeader v-if="isBlogPost" />
    </template>
    <template #layout-bottom>
      <SiteFooter v-if="!isDocsPage" />
    </template>
  </Layout>
</template> 