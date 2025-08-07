<template>
  <section class="demo-section">
    <div class="demo-container">
      <!-- Demo video or interactive demo will go here -->
      <div class="demo-placeholder" id="demo-content">
        <p id="demo-text" style="display: none;">Create demo: Build collaborative forms and documents</p>
        
        <!-- Support video (visible by default) -->
        <div id="support-video" class="demo-video">
          <video 
            id="demo-video"
            controls
            style="width: 100%; height: 100%; border-radius: 8px;">
            <source src="/website/video/support-demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <!-- Demo buttons -->
      <div class="demo-buttons">
        <button class="demo-btn active" onclick="switchDemo('support', this)">
          <span class="btn-title">Support</span>
        </button>
        <button class="demo-btn" onclick="switchDemo('create', this)">
          <span class="btn-title">Create</span>
        </button>
        <button class="demo-btn" onclick="switchDemo('configure', this)">
          <span class="btn-title">Configure</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// Make function globally available
if (typeof window !== 'undefined') {
  
  // Function to pause video
  function pauseVideo() {
    const video = document.getElementById('demo-video');
    if (video) {
      video.pause();
    }
  }
  
  // Initialize demo on page load
  function initializeDemo() {
    const demoText = document.getElementById('demo-text');
    const supportVideo = document.getElementById('support-video');
    
    if (demoText && supportVideo) {
      // Ensure video is visible and text is hidden
      demoText.style.display = 'none';
      supportVideo.style.display = 'block';
    }
  }
  
  // Pause video when tab loses focus
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      pauseVideo();
    }
  });
  
  // Pause video when window loses focus
  window.addEventListener('blur', function() {
    pauseVideo();
  });
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDemo);
  } else {
    initializeDemo();
  }
  
  // Also initialize after a short delay to ensure everything is loaded
  setTimeout(initializeDemo, 500);
  
  window.switchDemo = function(demoType, button) {
    // Pause video when switching demos
    pauseVideo();
    
    // Remove active class from all buttons
    document.querySelectorAll('.demo-btn').forEach(btn => {
      btn.classList.remove('active')
    })
    
    // Add active class to clicked button
    button.classList.add('active')
    
    // Get elements
    const demoText = document.getElementById('demo-text')
    const supportVideo = document.getElementById('support-video')
    
    // Hide video by default
    supportVideo.style.display = 'none'
    demoText.style.display = 'block'
    
    // Update demo content
    switch (demoType) {
      case 'create':
        demoText.textContent = 'Create demo: Build collaborative forms and documents'
        break
      case 'configure':
        demoText.textContent = 'Configure demo: Set up workflows and integrations'
        break
      case 'support':
        demoText.style.display = 'none'
        supportVideo.style.display = 'block'
        break
      default:
        demoText.textContent = 'Demo video/interactive demo'
    }
  }
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
  padding: 2rem;
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

.demo-video {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-video video {
  border-radius: 8px;
  max-width: 100%;
  max-height: 100%;
}
</style> 