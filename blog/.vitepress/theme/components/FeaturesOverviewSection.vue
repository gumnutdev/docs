<template>
  <section class="features-overview-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Real-time Collaboration</h3>
          <p>Multiple users can edit simultaneously with live updates and conflict resolution</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>Bank-grade security with end-to-end encryption and compliance standards</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Optimized performance with sub-100ms latency for seamless user experience</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔧</div>
          <h3>Easy Integration</h3>
          <p>Simple API integration with popular frameworks and platforms</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-overview-section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
  border-top: none;
}

h2::before {
  display: none;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}
</style> 