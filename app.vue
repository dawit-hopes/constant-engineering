<template>
  <div class="min-h-screen bg-white flex flex-col overflow-x-hidden">
    <Loading />
    <Navbar />
    <main 
      class="flex-1 transition-all duration-300 w-full overflow-x-hidden"
      :class="[
        { 'blur-md': megaMenuOpen },
        isOnTransparentPage ? '' : 'pt-14 sm:pt-16'
      ]"
      :style="{ filter: megaMenuOpen ? 'blur(8px)' : 'none', transition: 'filter 0.3s ease' }"
    >
      <NuxtPage :key="$route.fullPath" />
    </main>
    <Footer 
      :class="{ 'blur-md': megaMenuOpen }"
      :style="{ filter: megaMenuOpen ? 'blur(8px)' : 'none', transition: 'filter 0.3s ease' }"
    />
    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { inject, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const megaMenuOpen = inject('megaMenuOpen', ref(false))

const isOnTransparentPage = computed(() => {
  const path = route.path
  return path === '/' || path === '/about' || path === '/contact' || path === '/products' || path.startsWith('/products/')
})
</script>
