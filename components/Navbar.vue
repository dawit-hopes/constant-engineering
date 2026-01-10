<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 w-full overflow-x-hidden"
    :class="{ 'border-b border-slate-200': isScrolled }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex h-14 sm:h-16 items-center justify-between w-full">
        <!-- Logo - Left -->
        <NuxtLink to="/" class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
          <img src="/Constant-logo.png" alt="CONSTANT Engineering" class="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0" />
          <span class="hidden lg:inline text-base sm:text-lg font-bold text-slate-900 truncate tracking-tighter" style="font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: -0.025em; font-weight: 700;">CONSTANT Engineering</span>
        </NuxtLink>

        <!-- Menu - Right -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-slate-900 hover:text-primary transition-colors"
          >
            Home
          </NuxtLink>
          
          <!-- Products with Mega Menu -->
          <div
            class="relative"
            @mouseenter="clearMegaMenuTimeout"
            @mouseleave="handleMegaMenuLeave"
          >
            <button
              class="text-sm font-medium text-slate-900 hover:text-primary transition-colors flex items-center space-x-1"
              @mouseenter="clearMegaMenuTimeout"
            >
              <span>Products</span>
              <Icon
                name="heroicons:chevron-down"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': showMegaMenu }"
              />
            </button>
          </div>
          
          <!-- Mega Menu - Apple Style with Blur (Teleported to body for proper z-index) -->
          <Teleport to="body">
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div
                v-if="showMegaMenu"
                class="fixed left-0 right-0 z-[60]"
                :style="{ top: `${navbarHeight}px` }"
                @mouseenter="clearMegaMenuTimeout"
                @mouseleave="handleMegaMenuLeave"
              >
                <!-- Backdrop Blur Overlay -->
                <div class="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                
                <!-- Menu Content -->
                <div class="relative bg-white/95 backdrop-blur-md border-b shadow-xl z-[61]">
                  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <NuxtLink
                        v-for="product in products"
                        :key="product.id"
                        :to="`/products/${product.id}`"
                        @click="closeMegaMenu"
                        class="group"
                      >
                        <!-- Thumbnail Image - Reduced Size -->
                        <div class="mb-4 overflow-hidden rounded-lg bg-gray-100 h-32">
                          <img
                            :src="product.image"
                            :alt="product.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <!-- Title -->
                        <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {{ product.name }}
                        </h3>
                        <!-- Description -->
                        <p class="text-sm text-gray-600 leading-relaxed">
                          {{ product.description }}
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </Teleport>

          <NuxtLink
            to="/about"
            class="text-sm font-medium text-slate-900 hover:text-primary transition-colors"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-sm font-medium text-slate-900 hover:text-primary transition-colors"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-slate-900"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 py-4 space-y-4 w-full overflow-x-hidden">
          <NuxtLink
            to="/"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary w-full"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary w-full"
            @click="mobileMenuOpen = false"
          >
            Products
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary w-full"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary w-full"
            @click="mobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'

const showMegaMenu = ref(false)
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const navbarHeight = ref(64) // Default desktop height

// Provide mega menu state for app-level blur effect
provide('megaMenuOpen', showMegaMenu)

// Handle scroll to show/hide border
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
  // Don't close mega menu on scroll - let user interact with it
}

// Handle mega menu leave with delay to prevent flickering
const megaMenuTimeout = ref(null)
const handleMegaMenuLeave = () => {
  if (megaMenuTimeout.value) {
    clearTimeout(megaMenuTimeout.value)
  }
  megaMenuTimeout.value = setTimeout(() => {
    showMegaMenu.value = false
  }, 200) // Increased delay to prevent premature closing
}

const clearMegaMenuTimeout = () => {
  if (megaMenuTimeout.value) {
    clearTimeout(megaMenuTimeout.value)
  }
  // Keep menu open when hovering over it
  showMegaMenu.value = true
}

// Update navbar height based on screen size
const updateNavbarHeight = () => {
  navbarHeight.value = window.innerWidth >= 640 ? 64 : 56 // sm:h-16 = 64px, h-14 = 56px
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateNavbarHeight)
  handleScroll() // Check initial state
  updateNavbarHeight() // Set initial height
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateNavbarHeight)
})

const closeMegaMenu = () => {
  showMegaMenu.value = false
}

const products = [
  {
    id: 'diesel-generator-systems',
    name: 'Diesel Generator Systems',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop',
    description: 'Capacity: 10 KVA – 2000 KVA. Open & Silent Type (Canopy). Prime & Standby Power for Industrial, Commercial & Utility Applications.'
  },
  {
    id: 'solar-hybrid-energy',
    name: 'Solar & Hybrid Energy Solutions',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    description: 'On-grid & Off-grid Solar Systems, Hybrid Systems (Solar + Generator), Inverters & Charge Controllers, Battery Banks.'
  },
  {
    id: 'power-quality-protection',
    name: 'Power Quality & Protection Systems',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'UPS Systems, Voltage Stabilizers, Active Harmonic Filters, Capacitor Banks, Surge Protection Devices.'
  },
  {
    id: 'electrical-distribution',
    name: 'Electrical Distribution & Switchgear',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
    description: 'LV Power Cables, Circuit Breakers, Contactors, Panels, Enclosures & Accessories.'
  },
  {
    id: 'hvac-cooling-systems',
    name: 'HVAC & Cooling Systems',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'Split, Cassette, Ducted & Central AC, VRF/VRV Systems, Chillers, Cold Rooms & Refrigeration.'
  },
  {
    id: 'pumping-solutions',
    name: 'Pumping Solutions',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop',
    description: 'Submersible Pumps, Surface & Booster Pumps, Solar Powered Pumps, Pump Control Panels.'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation & Control',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'PLC & Automation Systems, Control Panel Design, Motor Control Centers, Instrumentation & Measurement.'
  },
  {
    id: 'metal-engineering',
    name: 'Metal Engineering & Fabrication',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    description: 'Steel Structures, Fuel & Industrial Storage Tanks, Lighting Poles, Stainless Steel Fabrication, Welding.'
  }
]
</script>
