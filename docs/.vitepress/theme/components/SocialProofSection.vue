<template>
  <section class="social-proof-section">
    <div class="container">
      <div class="quote-container">
        <div class="quote-glow"></div>
        <blockquote class="quote">
          "Gumnut transformed our app to be a workplace for teams. It was so easy to use and a no-brainer to integrate."
        </blockquote>
        <div class="quote-author">
          <div class="author-info">
            <div class="author-avatar">
              <img src="/website/jacky-koh.jpeg" alt="Jacky Koh" />
            </div>
            <div class="author-details">
              <strong>Jacky Koh</strong>
              <span>CEO, Relevance AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-proof-section {
  padding: 4rem 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.quote-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.quote-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background: radial-gradient(
    ellipse at center,
    rgba(99, 102, 241, 0.15) 0%,
    rgba(99, 102, 241, 0.1) 30%,
    rgba(99, 102, 241, 0.05) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
  opacity: 0.8;
}

.quote {
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  font-style: italic;
  quotes: none;
  border-left: none;
  padding-left: 0;
  margin-left: 0;
  position: relative;
  z-index: 1;
}

.quote::before,
.quote::after {
  content: none;
}

.quote-author {
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}

.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.author-details strong {
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  font-weight: 600;
}

.author-details span {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style> 