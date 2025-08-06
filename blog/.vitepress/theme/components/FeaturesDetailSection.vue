<template>
  <section class="features-detail-section">
    <div class="container">
      <div class="feature-detail-grid">
        <div class="feature-detail">
          <div class="feature-content">
            <h3>Cursors and Focus Indicators</h3>
            <p>See exactly where your teammates are working with live cursor positions and selections. Never lose context during collaborative sessions.</p>
            <ul>
              <li>Live cursor positions</li>
              <li>Selection highlighting</li>
              <li>User presence indicators</li>
            </ul>
          </div>
          <div class="feature-visual">
            <!-- Feature visualization will go here -->
          </div>
        </div>
        
        <div class="feature-detail">
          <div class="feature-content">
            <h3>Diagrams and Rich Text</h3>
            <p>Create collaborative diagrams and rich text documents like Figma. Perfect for flowcharts, mind maps, and detailed documentation.</p>
            <ul>
              <li>Interactive flowcharts</li>
              <li>Rich text editing</li>
            </ul>
          </div>
          <div class="feature-visual">
            <!-- Feature visualization will go here -->
          </div>
        </div>
        
        <div class="feature-detail">
          <div class="feature-content">
            <h3>Works with Every Stack</h3>
            <p>Seamlessly integrate with your existing tech stack. From React to Vue, Angular to vanilla JS - we've got you covered.</p>
            <ul>
              <li>Framework agnostic</li>
              <li>Easy integration</li>
            </ul>
          </div>
          <div class="feature-visual">
            <!-- Feature visualization will go here -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-detail-section {
  padding: 4rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  overflow: hidden;
}

.features-detail-section::before {
  content: '';
  position: absolute;
  top: 15%;
  right: -8%;
  width: 75%;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-1) 20%, var(--vp-c-brand-1) 80%, transparent 100%);
  opacity: 0.4;
  transform: rotate(-12deg);
  z-index: 0;
}

.features-detail-section::after {
  content: '';
  position: absolute;
  bottom: 25%;
  left: -3%;
  width: 65%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-2) 20%, var(--vp-c-brand-2) 80%, transparent 100%);
  opacity: 0.35;
  transform: rotate(18deg);
  z-index: 0;
}

.features-detail-section .container::before {
  content: '';
  position: absolute;
  top: 60%;
  left: 40%;
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-3) 30%, var(--vp-c-brand-3) 70%, transparent 100%);
  opacity: 0.3;
  transform: rotate(-8deg);
  z-index: 0;
}

.features-detail-section .container::after {
  content: '';
  position: absolute;
  top: 80%;
  right: 15%;
  width: 35%;
  height: 5px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-1) 25%, var(--vp-c-brand-1) 75%, transparent 100%);
  opacity: 0.25;
  transform: rotate(22deg);
  z-index: 0;
}

.features-detail-section .container .feature-detail::before {
  content: '';
  position: absolute;
  top: 45%;
  left: 5%;
  width: 30%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-2) 15%, var(--vp-c-brand-2) 85%, transparent 100%);
  opacity: 0.2;
  transform: rotate(-5deg);
  z-index: 0;
}

.features-detail-section .container .feature-detail::after {
  content: '';
  position: absolute;
  top: 70%;
  right: 8%;
  width: 25%;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-3) 20%, var(--vp-c-brand-3) 80%, transparent 100%);
  opacity: 0.18;
  transform: rotate(15deg);
  z-index: 0;
}

.features-detail-section .container .feature-detail:nth-child(2)::before {
  content: '';
  position: absolute;
  top: 35%;
  right: 12%;
  width: 28%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-1) 25%, var(--vp-c-brand-1) 75%, transparent 100%);
  opacity: 0.22;
  transform: rotate(-18deg);
  z-index: 0;
}

.features-detail-section .container .feature-detail:nth-child(3)::after {
  content: '';
  position: absolute;
  top: 55%;
  left: 15%;
  width: 32%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-2) 10%, var(--vp-c-brand-2) 90%, transparent 100%);
  opacity: 0.2;
  transform: rotate(12deg);
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
  text-align: center;
  border-top: none;
}

h2::before {
  display: none;
}

.feature-detail-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.feature-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.feature-detail:nth-child(even) {
  direction: rtl;
}

.feature-detail:nth-child(even) .feature-content {
  direction: ltr;
}

.feature-content h3 {
  font-size: 1.8rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.feature-content p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  padding: 0.5rem 0;
  color: var(--vp-c-text-1);
  position: relative;
  padding-left: 1.5rem;
}

.feature-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.feature-visual {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
}

.feature-content {
  border: 0 !important;
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(5px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
  border-radius: 8px !important;
  padding: 2rem !important;
  position: relative !important;
  z-index: 1 !important;
}

.feature-detail .feature-content {
  border: 0 !important;
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(5px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
  border-radius: 8px !important;
  padding: 2rem !important;
  position: relative !important;
  z-index: 1 !important;
}

@media (max-width: 768px) {
  .feature-detail {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature-detail:nth-child(even) {
    direction: ltr;
  }
}
</style> 