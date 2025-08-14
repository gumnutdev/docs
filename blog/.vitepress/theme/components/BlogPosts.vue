<template>
  <div class="blog-posts">
    <div v-if="posts.length === 0" class="no-posts">
      <p>No posts found. Check back soon for new articles!</p>
    </div>
    
    <article v-for="post in posts" :key="post.url" class="blog-post">
      <a :href="post.url" class="post-card" :aria-label="`Read article: ${post.title}`">
        <div v-if="post.image" class="post-image">
          <img :src="post.image" :alt="post.title" />
        </div>
        
        <div class="post-content">
          <header class="post-header">
            <h2 class="post-title">{{ post.title }}</h2>
            <div class="post-meta">
              <time v-if="post.date" :datetime="post.date" class="post-date">
                {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <span v-if="post.author" class="post-author">by {{ post.author }}</span>
            </div>
          </header>
          
          <div v-if="post.description || post.excerpt" class="post-excerpt">
            <p>{{ post.description || post.excerpt }}</p>
          </div>
          
          <div v-if="post.tags && post.tags.length > 0" class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </a>
    </article>
  </div>
</template>

<script setup>
import { data as posts } from '../../posts.data.mts'
</script>

<style scoped>
.blog-posts {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.no-posts {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  grid-column: 1 / -1;
}

.blog-post {
  margin: 0;
  padding: 0;
  border: none;
  border-top: none;
  border-bottom: none;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.post-card:link,
.post-card:visited,
.post-card:hover,
.post-card:focus,
.post-card:active {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

/* Change heading color on hover/focus of the whole card */
.post-card:hover .post-title,
.post-card:focus-visible .post-title {
  color: var(--vp-c-brand-1);
}

.post-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-header {
  margin-bottom: 1rem;
  border: none;
  border-top: none;
  border-bottom: none;
}

.post-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  border: none;
  border-top: none;
  border-bottom: none;
  color: var(--vp-c-text-1);
}

/* removed legacy link-specific title styles */

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  flex-wrap: wrap;
  border: none;
  border-top: none;
  border-bottom: none;
}

.post-date {
  color: var(--vp-c-text-2);
}

.post-author {
  color: var(--vp-c-text-2);
}

.post-excerpt {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
}

.post-excerpt p {
  margin: 0;
  font-size: 0.9rem;
}

.post-tags {
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .blog-posts {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }
  
  .post-content {
    padding: 1rem;
  }
  
  .post-image {
    height: 180px;
  }
}
</style> 