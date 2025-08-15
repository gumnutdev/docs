<script setup>
import { data as allPosts } from '../../posts.data.mts'

// Get the 6 most recent posts
const posts = allPosts.slice(0, 6)

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
    <h2>Recent Blog Posts</h2>
    
    <div v-if="posts.length > 0" class="posts-grid">
      <div v-for="post in posts" :key="post.url" class="post-card">
        <a :href="post.url" class="post-link">
          <div class="post-content">
            <h3>{{ post.title || 'Untitled' }}</h3>
            <div class="post-meta">
              <span v-if="post.date" class="date">{{ formatDate(post.date) }}</span>
              <span v-if="post.author" class="author">by {{ post.author }}</span>
            </div>
            <p v-if="post.description" class="description">{{ post.description }}</p>
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
  grid-template-columns: repeat(3, 1fr);
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
  padding: 1.5rem;
}

.post-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.post-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.post-meta .date {
  margin-right: 1rem;
}

.post-meta .author {
  color: var(--vp-c-text-2);
}

.description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .post-link {
    padding: 1rem;
  }
}
</style> 