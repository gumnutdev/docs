<template>
  <section class="demo-section">
    <div class="demo-container">
      <!-- Demo video or interactive demo will go here -->
      <div class="demo-placeholder">
        <p>{{ demoText }}</p>
      </div>
      
      <!-- Demo buttons -->
      <div class="demo-buttons">
        <button class="demo-btn active" @click="switchDemo('create')">
          <span class="btn-title">Create</span>
        </button>
        <button class="demo-btn" @click="switchDemo('configure')">
          <span class="btn-title">Configure</span>
        </button>
        <button class="demo-btn" @click="switchDemo('support')">
          <span class="btn-title">Support</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentDemo = ref('create')

const demoText = computed(() => {
  switch (currentDemo.value) {
    case 'create':
      return 'Create demo: Build collaborative forms and documents'
    case 'configure':
      return 'Configure demo: Set up workflows and integrations'
    case 'support':
      return 'Support demo: Get help and documentation'
    default:
      return 'Demo video/interactive demo'
  }
})

function switchDemo(demoType) {
  // Remove active class from all buttons
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.classList.remove('active')
  })
  
  // Add active class to clicked button
  event.target.closest('.demo-btn').classList.add('active')
  
  currentDemo.value = demoType
  console.log('Switching to demo:', demoType)
}
</script>

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
  margin-bottom: 2rem;
}

.demo-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.demo-btn {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(5px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  flex: 1;
  min-width: 150px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.demo-btn:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.demo-btn.active {
  background: var(--vp-c-brand-soft) !important;
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  text-align: center;
}

.demo-btn.active .btn-title {
  color: var(--vp-c-brand-1);
}
</style> 