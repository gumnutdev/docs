<template>
  <section class="features-overview-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <img src="/website/rtc-icon.png" alt="real-time collaboration" class="feature-icon-img">
          </div>
          <p><strong>Real-time <span class="primary-color">collaboration</span></strong></p>
          <p><strong>work together!—not against each other</strong></p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="/website/history-icon.png" alt="version history" class="feature-icon-img">
          </div>
          <p><strong>Complete <span class="primary-color">version history</span> every time you commit</strong></p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="/website/ai-agent-icon.png" alt="AI agents" class="feature-icon-img">
          </div>
          <p><strong>Drop-in <span class="primary-color">AI agents</span> which understand your forms and context to work with you</strong></p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="/website/attribution-icon.png" alt="character-level attribution" class="feature-icon-img">
          </div>
          <p><strong>Chracter-level attribution to see <span class="primary-color">exactly</span> who typed what</strong></p>
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

.feature-icon-img {
  width: 5rem; /* Adjust as needed to match the font-size of the icon */
  height: 5rem; /* Adjust as needed to match the font-size of the icon */
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.primary-color {
  color: var(--vp-c-brand-1);
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