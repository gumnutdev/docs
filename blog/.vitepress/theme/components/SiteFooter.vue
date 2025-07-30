<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Gumnut</h4>
          <p>Modernizing SaaS for teams worldwide</p>
          <div class="social-links">
            <a href="https://linkedin.com/company/gumnut-dev" target="_blank">LinkedIn</a>
            <a href="https://discord.gg/yu3u87AUNR" target="_blank">Discord</a>
            <a href="https://github.com/gumnut" target="_blank">GitHub</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/status">Status</a></li>
            <li><a href="mailto:support@gumnut.dev">Email Support</a></li>
            <li><a href="https://calendly.com/owen-gumnut/30min">Book a Call</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Gumnut. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.footer-section p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: var(--vp-c-brand-1);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-links a:hover {
  color: var(--vp-c-brand-1);
}

.footer-bottom {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style> 