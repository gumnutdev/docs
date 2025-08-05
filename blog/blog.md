---
title: Blog
---

<script setup>
import GetFeed from '.vitepress/getFeed.vue'
</script>

# Articles

<ClientOnly>
  <GetFeed />
</ClientOnly>

<script>
// Direct script to load blog posts
(function() {
  // Only run in browser
  if (typeof document === 'undefined') return;
  
  function loadPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) {
      console.log('Container not found, retrying...');
      setTimeout(loadPosts, 100);
      return;
    }
    
    console.log('Loading posts from blog page script...');
    
    fetch('/posts.json')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          if (response.status === 404) {
            container.innerHTML = '<p>No posts found. Check back soon for new articles!</p>';
            return;
          }
          throw new Error(`Failed to load posts: ${response.statusText}`);
        }
        return response.json();
      })
      .then(posts => {
        console.log('Posts loaded:', posts.length);
        
        if (posts.length === 0) {
          container.innerHTML = '<p>No posts found. Check back soon for new articles!</p>';
          return;
        }
        
        const postsHtml = posts.map(post => `
          <li>
            <a href="${post.url}">${post.frontmatter.title || 'Untitled'}</a>
            <div class="post-meta">
              ${post.frontmatter.date ? `<span class="date">${new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>` : ''}
              ${post.frontmatter.author ? `<span class="author">by ${post.frontmatter.author}</span>` : ''}
            </div>
            ${post.frontmatter.description ? `<p>${post.frontmatter.description}</p>` : ''}
          </li>
        `).join('');
        
        container.innerHTML = `
          <h1>All Blog Posts</h1>
          <ul>${postsHtml}</ul>
        `;
      })
      .catch(error => {
        console.error('Error loading posts:', error);
        container.innerHTML = `<div class="error">Failed to load posts: ${error.message}</div>`;
      });
  }
  
  // Try multiple times to ensure it runs
  setTimeout(loadPosts, 100);
  setTimeout(loadPosts, 500);
  setTimeout(loadPosts, 1000);
})();
</script>
