<script setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';

const { site } = useData();
const posts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/posts.json');
    if (!response.ok) {
      if (response.status === 404) {
        posts.value = [];
        return;
      }
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }
    const allPosts = await response.json();
    // Get the 3 most recent posts
    posts.value = allPosts.slice(-3);
  } catch (err) {
    console.error('Error loading posts:', err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}
</script>

<template>
  <div class="recent-posts">
    <h2>Recent Articles</h2>
    
    <div v-if="loading" class="loading">
      Loading posts...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="posts.length > 0" class="posts-grid">
      <div v-for="post in posts" :key="post.url" class="post-card">
        <a :href="post.url" class="post-link">
          <div class="post-content">
            <h3>{{ post.frontmatter.title || 'Untitled' }}</h3>
            <div class="post-meta">
              <span v-if="post.frontmatter.date" class="date">{{ formatDate(post.frontmatter.date) }}</span>
              <span v-if="post.frontmatter.author" class="author">by {{ post.frontmatter.author }}</span>
            </div>
            <p v-if="post.frontmatter.description" class="description">{{ post.frontmatter.description }}</p>
          </div>
        </a>
      </div>
    </div>
    
    <p v-else>No posts found. Check back soon for new articles!</p>
  </div>
</template>

<style scoped>
.recent-posts {
  margin: 2rem 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.post-content {
  padding: 1.5rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-brand);
  font-size: 1.2rem;
}

.post-meta {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.5;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.error {
  color: var(--vp-c-danger-1);
}
</style> 