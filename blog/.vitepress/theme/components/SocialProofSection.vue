<template>
  <section class="social-proof-section">
    <div class="container">
      <div class="quote-container">
        <blockquote class="quote">
          "Gumnut transformed our app to be a workplace for teams. It was so easy to use and a no-brainer to integrate."
        </blockquote>
        <div class="quote-author">
          <div class="author-info">
            <strong>Jacky Koh</strong>
            <span>CEO, Relevance AI</span>
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

.quote-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
}

.quote::before,
.quote::after {
  content: none;
}

.quote-author {
  margin-top: 2rem;
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.author-info strong {
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  font-weight: 600;
}

.author-info span {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style> 