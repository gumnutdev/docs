<template>
  <section class="demo-section">
    <div class="demo-container">
      <!-- Demo video or interactive demo will go here -->
      <div class="demo-placeholder">
        <p>Demo video/interactive demo</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.demo-section::before {
  content: '';
  position: absolute;
  top: 20%;
  right: -10%;
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-1) 20%, var(--vp-c-brand-1) 80%, transparent 100%);
  opacity: 0.8;
  transform: rotate(-15deg);
  z-index: 0;
}

.demo-section::after {
  content: '';
  position: absolute;
  bottom: 30%;
  left: -5%;
  width: 70%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--vp-c-brand-2) 20%, var(--vp-c-brand-2) 80%, transparent 100%);
  opacity: 0.6;
  transform: rotate(25deg);
  z-index: 0;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
}

.demo-placeholder {
  background: var(--vp-c-bg);
  border: 2px dashed var(--vp-c-divider);
  border-radius: 12px;
  padding: 8rem 2rem;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 