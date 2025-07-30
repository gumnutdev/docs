<template>
  <section class="social-proof-section">
    <div class="container">
      <h2>Trusted by Teams Worldwide</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Gumnut transformed how our team collaborates. The real-time editing is seamless."</p>
          </div>
          <div class="testimonial-author">
            <strong>Sarah Chen</strong>
            <span>Product Manager, TechCorp</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"We've seen a 40% increase in team productivity since implementing Gumnut."</p>
          </div>
          <div class="testimonial-author">
            <strong>Mike Rodriguez</strong>
            <span>CTO, StartupXYZ</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"The integration was smooth and our users love the collaborative features."</p>
          </div>
          <div class="testimonial-author">
            <strong>Emily Watson</strong>
            <span>VP Engineering, ScaleUp</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-proof-section {
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
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.testimonial-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}

.testimonial-author strong {
  display: block;
  color: var(--vp-c-text-1);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.testimonial-author span {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style> 