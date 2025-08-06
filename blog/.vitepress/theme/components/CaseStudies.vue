<template>
  <div class="case-studies">
    <div v-if="caseStudies.length === 0" class="no-case-studies">
      <p>No case studies found. Check back soon for new case studies!</p>
    </div>
    
    <article v-for="study in caseStudies" :key="study.url" class="case-study">
      <div class="study-card">
        <div v-if="study.image" class="study-image">
          <img :src="study.image" :alt="study.title" />
        </div>
        
        <div class="study-content">
          <header class="study-header">
            <h2 class="study-title">
              <a :href="study.url">{{ study.title }}</a>
            </h2>
            <div class="study-meta">
              <time v-if="study.date" :datetime="study.date" class="study-date">
                {{ new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <span v-if="study.author" class="study-author">by {{ study.author }}</span>
            </div>
          </header>
          
          <div v-if="study.description || study.excerpt" class="study-excerpt">
            <p>{{ study.description || study.excerpt }}</p>
          </div>
          
          <div v-if="study.tags && study.tags.length > 0" class="study-tags">
            <span v-for="tag in study.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { data as caseStudies } from '../../case-studies.data.mts'
</script>

<style scoped>
.case-studies {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.no-case-studies {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  grid-column: 1 / -1;
}

.case-study {
  margin: 0;
  padding: 0;
  border: none;
  border-top: none;
  border-bottom: none;
}

.study-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
}

.study-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.study-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.study-card:hover .study-image img {
  transform: scale(1.05);
}

.study-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.study-header {
  margin-bottom: 1rem;
  border: none;
  border-top: none;
  border-bottom: none;
}

.study-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  border: none;
  border-top: none;
  border-bottom: none;
}

.study-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.study-title a:hover {
  color: var(--vp-c-brand-1);
}

.study-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  flex-wrap: wrap;
  border: none;
  border-top: none;
  border-bottom: none;
}

.study-date {
  color: var(--vp-c-text-2);
}

.study-author {
  color: var(--vp-c-text-2);
}

.study-excerpt {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
}

.study-excerpt p {
  margin: 0;
  font-size: 0.9rem;
}

.study-tags {
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
  .case-studies {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }
  
  .study-content {
    padding: 1rem;
  }
  
  .study-image {
    height: 180px;
  }
}
</style> 