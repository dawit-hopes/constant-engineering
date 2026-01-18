<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div class="flex flex-col items-center justify-center">
        <!-- Logo with Elegant Animation -->
        <div class="relative mb-6">
          <!-- Subtle Pulsing Ring -->
          <div
            class="absolute inset-0 flex items-center justify-center"
          >
            <div
              class="absolute h-20 w-20 rounded-full border-2 border-primary/20 animate-pulse"
            ></div>
          </div>
          <!-- Logo -->
          <div class="relative">
            <img
              src="/Constant-logo.png"
              alt="CONSTANT ENGINEERING"
              class="h-16 w-16 drop-shadow-lg"
            />
          </div>
        </div>
        
        <!-- Elegant Loading Dots -->
        <div class="flex items-center gap-2">
          <div class="flex gap-1.5">
            <span
              v-for="(dot, index) in 3"
              :key="index"
              class="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
              :style="{ animationDelay: `${index * 0.2}s` }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(false)
let hideTimeout = null
let minDisplayTime = null
const MIN_DISPLAY_TIME = 300 // Minimum time to show spinner to avoid flashing

const startLoading = () => {
  // Clear any pending hide timeout
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  
  // Show spinner immediately
  isLoading.value = true
  
  // Set minimum display time
  if (minDisplayTime) {
    clearTimeout(minDisplayTime)
  }
  minDisplayTime = setTimeout(() => {
    minDisplayTime = null
  }, MIN_DISPLAY_TIME)
}

const stopLoading = () => {
  // Only hide if minimum display time has passed
  const hideSpinner = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
    }
    hideTimeout = setTimeout(() => {
      isLoading.value = false
    }, 200)
  }
  
  if (minDisplayTime) {
    // Wait for minimum display time
    setTimeout(() => {
      hideSpinner()
    }, MIN_DISPLAY_TIME)
  } else {
    // Minimum time already passed, hide immediately
    hideSpinner()
  }
}

// Handle initial page load only
onMounted(() => {
  if (process.client) {
    // Show loading immediately if page is still loading
    if (document.readyState === 'loading') {
      startLoading()
    }
    
    // Hide when page is fully loaded
    const handleLoad = () => {
      stopLoading()
    }
    
    if (document.readyState === 'complete') {
      // Page already loaded, don't show spinner
      isLoading.value = false
    } else {
      // Page still loading, show spinner immediately
      startLoading()
      
      // Listen for page load completion
      window.addEventListener('load', handleLoad, { once: true })
      
      // Also check DOMContentLoaded
      document.addEventListener('DOMContentLoaded', () => {
        // If DOM ready but resources still loading, keep spinner
        if (document.readyState === 'interactive') {
          // Wait a bit more for resources
          setTimeout(() => {
            if (document.readyState === 'complete') {
              handleLoad()
            }
          }, 200)
        } else if (document.readyState === 'complete') {
          handleLoad()
        }
      }, { once: true })
    }
  }
})

onUnmounted(() => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  if (minDisplayTime) {
    clearTimeout(minDisplayTime)
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce {
  animation: bounce 1.4s ease-in-out infinite;
}
</style>
