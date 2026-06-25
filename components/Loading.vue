<template>
  <Transition
    enter-active-class="transition-opacity duration-150 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      aria-hidden="true"
    >
      <img
        src="/Constant-logo.png"
        alt=""
        class="h-14 w-14 drop-shadow-sm"
      />
    </div>
  </Transition>
</template>

<script setup>
const SHOW_DELAY = 100

const isVisible = ref(false)
let activeLoading = 0
let showTimer = null
let hasCompletedInitialLoad = false

function scheduleShow() {
  if (isVisible.value || showTimer) return

  showTimer = setTimeout(() => {
    showTimer = null
    if (activeLoading > 0) {
      isVisible.value = true
    }
  }, SHOW_DELAY)
}

function scheduleHide() {
  if (showTimer) {
    clearTimeout(showTimer)
    showTimer = null
  }

  if (activeLoading === 0) {
    isVisible.value = false
  }
}

function beginLoading() {
  activeLoading++
  scheduleShow()
}

function endLoading() {
  activeLoading = Math.max(0, activeLoading - 1)
  scheduleHide()
}

onMounted(() => {
  const nuxtApp = useNuxtApp()

  if (document.readyState !== 'complete') {
    beginLoading()
    window.addEventListener('load', endLoading, { once: true })
  }

  nuxtApp.hook('page:start', () => {
    if (!hasCompletedInitialLoad) return
    beginLoading()
  })

  nuxtApp.hook('page:finish', () => {
    if (!hasCompletedInitialLoad) {
      hasCompletedInitialLoad = true
      endLoading()
      return
    }
    endLoading()
  })
})

onUnmounted(() => {
  if (showTimer) {
    clearTimeout(showTimer)
  }
})
</script>
