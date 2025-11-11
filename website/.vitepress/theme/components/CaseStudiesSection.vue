<template>
  <section class="case-studies-section">
    <div class="container">
      <div class="case-studies-grid">
        <a href="/case-studies/social-media-management" class="case-study-card" aria-label="Read case study: Social Media Management">
          <div class="case-study-header">
            <h3>Multiplater editing</h3>
          </div>
          <p>How to enable real-time collaboration in complex apps in a few lines of code</p>
          <span class="read-more">Read Case Study →</span>
        </a>
        <a href="/case-studies/grant-software" class="case-study-card" aria-label="Read case study: Grant Application SaaS">
          <div class="case-study-header">
            <h3>Version history and audit trails</h3>
          </div>
          <p>Using Gumnut to enable undo, full version history and user attribution</p>
          <span class="read-more">Read Case Study →</span>
        </a>
        <a href="/case-studies/insurance" class="case-study-card" aria-label="Read case study: Insurance">
          <div class="case-study-header">
            <h3>Customer support</h3>
          </div>
          <p>Using Gumnut to get rid of teamviewer and allow native customer support</p>
          <span class="read-more">Read Case Study →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-studies-section {
  padding: 4rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
}

.case-study-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: var(--vp-c-text-1);
  text-decoration: none;
  display: block;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.case-study-card:link,
.case-study-card:visited,
.case-study-card:hover,
.case-study-card:focus,
.case-study-card:active {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.case-study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.case-study-header h3 {
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  margin: 0;
}

.industry {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.case-study-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.read-more {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  transition: color 0.2s ease;
}

.case-study-card:hover .read-more {
  color: var(--vp-c-brand-2);
}
</style> 