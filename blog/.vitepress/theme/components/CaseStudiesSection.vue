<template>
  <section class="case-studies-section">
    <div class="container">
      <div class="case-studies-grid">
        <div class="case-study-card">
          <div class="case-study-header">
            <h3>TechCorp</h3>
            <span class="industry">SaaS Platform</span>
          </div>
          <p>How TechCorp increased team collaboration by 60% with real-time editing</p>
          <a href="/case-studies/techcorp" class="read-more">Read Case Study →</a>
        </div>
        <div class="case-study-card">
          <div class="case-study-header">
            <h3>StartupXYZ</h3>
            <span class="industry">E-commerce</span>
          </div>
          <p>StartupXYZ reduced form abandonment by 45% with collaborative forms</p>
          <a href="/case-studies/startupxyz" class="read-more">Read Case Study →</a>
        </div>
        <div class="case-study-card">
          <div class="case-study-header">
            <h3>ScaleUp</h3>
            <span class="industry">FinTech</span>
          </div>
          <p>ScaleUp improved customer onboarding with real-time collaboration</p>
          <a href="/case-studies/scaleup" class="read-more">Read Case Study →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-studies-section {
  padding: 4rem 0;
  background: var(--vp-c-bg-soft);
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
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: var(--vp-c-brand-2);
}
</style> 