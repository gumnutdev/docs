<script setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';

const { site } = useData();
const caseStudies = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // Use absolute path to fetch case-studies.json
    const response = await fetch('/case-studies.json');
    if (!response.ok) {
      if (response.status === 404) {
        // If case-studies.json doesn't exist yet, show empty state
        caseStudies.value = [];
        return;
      }
      throw new Error(`Failed to load case studies: ${response.statusText}`);
    }
    caseStudies.value = await response.json();
  } catch (err) {
    console.error('Error loading case studies:', err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

// Format date to a readable string
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
  <div class="case-studies">
    <h1>All Case Studies</h1>
    
    <div v-if="loading" class="loading">
      Loading case studies...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <ul v-else-if="caseStudies.length > 0">
      <li v-for="caseStudy in caseStudies" :key="caseStudy.url">
        <a :href="caseStudy.url">{{ caseStudy.frontmatter.title || 'Untitled' }}</a>
        <div class="case-study-meta">
          <span v-if="caseStudy.frontmatter.date" class="date">{{ formatDate(caseStudy.frontmatter.date) }}</span>
          <span v-if="caseStudy.frontmatter.author" class="author">by {{ caseStudy.frontmatter.author }}</span>
        </div>
        <p v-if="caseStudy.frontmatter.description">{{ caseStudy.frontmatter.description }}</p>
      </li>
    </ul>
    
    <p v-else>No case studies found. Check back soon for new case studies!</p>
  </div>
</template>

<style scoped>
.case-studies {
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

.case-study-meta {
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