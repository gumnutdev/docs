<template>
  <div class="blog-posts">
    <div id="blog-posts-container">
      <div class="loading">Loading posts...</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Component mounted, executing loadPosts');
  loadPosts();
})

// Vanilla JavaScript that works in MPA mode
let posts = [];
let loading = true;
let error = null;

async function loadPosts() {
  console.log('loadPosts called');
  try {
    console.log('Fetching posts.json...');
    const response = await fetch('/posts.json');
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log('posts.json not found');
        posts = [];
        renderPosts();
        return;
      }
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }
    
    posts = await response.json();
    console.log('Posts loaded:', posts.length);
    renderPosts();
  } catch (err) {
    console.error('Error loading posts:', err);
    error = err.message;
    renderPosts();
  } finally {
    loading = false;
    renderPosts();
  }
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function renderPosts() {
  console.log('renderPosts called, loading:', loading, 'error:', error, 'posts length:', posts.length);
  const container = document.getElementById('blog-posts-container');
  if (!container) {
    console.log('Container not found');
    return;
  }

  if (loading) {
    container.innerHTML = '<div class="loading">Loading posts...</div>';
    return;
  }

  if (error) {
    container.innerHTML = `<div class="error">${error}</div>`;
    return;
  }

  if (posts.length === 0) {
    container.innerHTML = '<p>No posts found. Check back soon for new articles!</p>';
    return;
  }

  const postsHtml = posts.map(post => `
    <li>
      <a href="${post.url}">${post.frontmatter.title || 'Untitled'}</a>
      <div class="post-meta">
        ${post.frontmatter.date ? `<span class="date">${formatDate(post.frontmatter.date)}</span>` : ''}
        ${post.frontmatter.author ? `<span class="author">by ${post.frontmatter.author}</span>` : ''}
      </div>
      ${post.frontmatter.description ? `<p>${post.frontmatter.description}</p>` : ''}
    </li>
  `).join('');

  container.innerHTML = `
    <h1>All Blog Posts</h1>
    <ul>${postsHtml}</ul>
  `;
  console.log('Posts rendered');
}
</script>

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

.post-meta {
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.date {
  margin-right: 1rem;
}

.author {
  margin-left: 0.5rem;
}

p {
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
}
</style>