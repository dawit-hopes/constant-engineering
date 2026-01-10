<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main 
      class="flex-1 transition-all duration-300"
      :class="{ 'blur-sm': megaMenuOpen }"
    >
      <NuxtPage :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'

// Inject mega menu state from Navbar
const megaMenuOpen = inject('megaMenuOpen', ref(false))
</script>
