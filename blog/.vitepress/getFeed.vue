<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    // Use fetch to get the posts data from a JSON file
    // This will be generated during the build process
    const response = await fetch('/posts.json');
    if (response.ok) {
      posts.value = await response.json();
    } else {
      console.error('Failed to load posts:', response.statusText);
      error.value = `Failed to load posts: ${response.statusText}`;
    }
  } catch (error) {
    console.error('Error loading posts:', error);
    error.value = `Error loading posts: ${error.message}`;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="blog-posts">
    <h1>All Blog Posts</h1>
    
    <div v-if="loading" class="loading">
      Loading posts...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <ul v-else-if="posts.length > 0">
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.frontmatter.title || 'Untitled' }}</a>
        <span v-if="post.frontmatter.author">by {{ post.frontmatter.author }}</span>
        <p v-if="post.frontmatter.description">{{ post.frontmatter.description }}</p>
      </li>
    </ul>
    
    <p v-else>No posts found.</p>
  </div>
</template>

<style scoped>
.blog-posts {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.error {
  color: var(--vp-c-danger-1);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

a {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

span {
  color: var(--vp-c-text-2);
  margin-left: 0.5rem;
}

p {
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
}
</style>