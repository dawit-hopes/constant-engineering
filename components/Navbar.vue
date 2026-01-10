<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo - Left -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img src="/Constant-logo.png" alt="CONSTANT Engineering" class="h-8 w-8" />
          <span class="text-lg font-bold text-slate-900">CONSTANT</span>
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
            @mouseenter="showMegaMenu = true"
            @mouseleave="showMegaMenu = false"
          >
            <button
              class="text-sm font-medium text-slate-900 hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>Products</span>
              <Icon
                name="heroicons:chevron-down"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': showMegaMenu }"
              />
            </button>

            <!-- Mega Menu - Apple Style with Blur -->
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
                class="fixed left-0 right-0 top-16 z-40"
              >
                <!-- Backdrop Blur Overlay -->
                <div class="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                
                <!-- Menu Content -->
                <div class="relative bg-white/95 backdrop-blur-md border-b shadow-xl">
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
          </div>

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
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 py-4 space-y-4">
          <NuxtLink
            to="/"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            Products
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 text-base font-medium text-slate-900 hover:text-primary"
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
import { ref, provide } from 'vue'

const showMegaMenu = ref(false)
const mobileMenuOpen = ref(false)

// Provide mega menu state for app-level blur effect
provide('megaMenuOpen', showMegaMenu)

const closeMegaMenu = () => {
  showMegaMenu.value = false
}

const products = [
  {
    id: 'diesel-generators',
    name: 'Diesel Generators',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop',
    description: 'Reliable power generation solutions for industrial applications'
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    description: 'Sustainable solar power systems and installations'
  },
  {
    id: 'hvac-systems',
    name: 'HVAC Systems',
    image: 'https://images.unsplash.com/photo-1621905252507-b35424cc871b?w=800&h=600&fit=crop',
    description: 'Heating, ventilation, and air conditioning solutions'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    description: 'Advanced automation and control systems'
  },
  {
    id: 'metal-engineering',
    name: 'Metal Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    description: 'Precision metal fabrication and engineering services'
  },
  {
    id: 'electrical-systems',
    name: 'Electrical Systems',
    image: 'https://images.unsplash.com/photo-1621905252472-5af521f6a4e7?w=800&h=600&fit=crop',
    description: 'Complete electrical design and installation services'
  },
  {
    id: 'maintenance-services',
    name: 'Maintenance Services',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    description: 'Comprehensive maintenance and support programs'
  },
  {
    id: 'consulting',
    name: 'Engineering Consulting',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    description: 'Expert consulting for complex engineering challenges'
  }
]
</script>
