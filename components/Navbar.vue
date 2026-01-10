<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 rounded-t-[40px]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img src="/Constant-logo.png" alt="CONSTANT Engineering" class="h-10 w-10" />
          <span class="text-xl font-bold tracking-tight text-gray-900">CONSTANT</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
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
              class="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>Products</span>
              <Icon
                name="heroicons:chevron-down"
                class="h-4 w-4 transition-transform"
                :class="{ 'rotate-180': showMegaMenu }"
              />
            </button>

            <!-- Mega Menu - Full Width -->
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="showMegaMenu"
                class="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-40"
                style="width: calc(100vw - 4rem); max-width: 1200px;"
              >
                <div class="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-2xl p-8">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <NuxtLink
                      v-for="product in products"
                      :key="product.id"
                      :to="`/products/${product.id}`"
                      class="group flex flex-col space-y-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div class="flex items-center space-x-3">
                        <Icon
                          :name="product.icon"
                          class="h-8 w-8 text-primary group-hover:scale-110 transition-transform"
                        />
                        <h3 class="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {{ product.name }}
                        </h3>
                      </div>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        {{ product.description }}
                      </p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink
            to="/about"
            class="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Get Quote
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-700"
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
            class="block px-4 text-base font-medium text-gray-700 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="block px-4 text-base font-medium text-gray-700 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            Products
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-4 text-base font-medium text-gray-700 hover:text-primary"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 text-base font-medium text-gray-700 hover:text-primary"
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
import { ref } from 'vue'

const showMegaMenu = ref(false)
const mobileMenuOpen = ref(false)

const products = [
  {
    id: 'diesel-generators',
    name: 'Diesel Generators',
    icon: 'heroicons:bolt',
    description: 'Reliable power generation solutions for industrial applications'
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy',
    icon: 'heroicons:sun',
    description: 'Sustainable solar power systems and installations'
  },
  {
    id: 'hvac-systems',
    name: 'HVAC Systems',
    icon: 'heroicons:wind',
    description: 'Heating, ventilation, and air conditioning solutions'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    icon: 'heroicons:cpu-chip',
    description: 'Advanced automation and control systems'
  },
  {
    id: 'metal-engineering',
    name: 'Metal Engineering',
    icon: 'heroicons:wrench-screwdriver',
    description: 'Precision metal fabrication and engineering services'
  },
  {
    id: 'electrical-systems',
    name: 'Electrical Systems',
    icon: 'heroicons:light-bulb',
    description: 'Complete electrical design and installation services'
  },
  {
    id: 'maintenance-services',
    name: 'Maintenance Services',
    icon: 'heroicons:wrench',
    description: 'Comprehensive maintenance and support programs'
  },
  {
    id: 'consulting',
    name: 'Engineering Consulting',
    icon: 'heroicons:document-text',
    description: 'Expert consulting for complex engineering challenges'
  }
]
</script>
