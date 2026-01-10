<template>
  <div class="min-h-screen">
    <!-- Hero Section - TaxPal Style Centered Layout -->
    <section class="pt-12 sm:pt-16 lg:pt-32 pb-12 sm:pb-16" style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <!-- Main Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="100"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight px-2"
        >
          Electromechanical solutions
          <span class="relative inline-block text-primary">
            made simple
            <!-- SVG Scribble Underline -->
            <svg
              class="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-primary/40"
              viewBox="0 0 180 12"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C22 6, 42 10, 62 7C82 4, 102 9, 122 6C142 3, 162 8, 178 5"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </span>
          for industry.
        </h1>

        <!-- Subheadline -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
          class="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-10 max-w-[700px] mx-auto leading-relaxed px-2"
        >
          CONSTANT Engineering specializes in high-quality, tailored solutions for medium to large-scale projects. We deliver innovative, reliable, and efficient results that exceed expectations.
        </p>

        <!-- CTAs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300"
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <!-- Primary CTA - WhatsApp -->
          <a
            href="https://wa.me/251924909098?text=Hello,%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-slate-800 transition-colors w-full sm:w-auto"
          >
            Request a Quote
          </a>

          <!-- Secondary CTA -->
          <button
            class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-900 hover:border-slate-400 transition-colors w-full sm:w-auto"
          >
            <Icon name="heroicons:play" class="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            View Services
          </button>
        </div>

        <!-- Trust Section -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
          class="mt-8 sm:mt-12 lg:mt-16 px-4"
        >
          <p class="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 lg:mb-8">
            Trusted by industry leaders
          </p>
          <div class="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <!-- Partner Logos -->
            <div 
              v-for="partner in partners" 
              :key="partner.name"
              class="grayscale opacity-60 hover:opacity-100 transition-opacity h-8 sm:h-10 flex items-center justify-center flex-shrink-0"
            >
              <img 
                :src="partner.image" 
                :alt="partner.name" 
                class="h-full w-auto object-contain max-w-[90px] sm:max-w-[110px] md:max-w-[120px]"
                @error="handleImageError($event, partner.name)"
                @load="handleImageLoad($event)"
                style="display: block;"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid - 3 Columns -->
    <section class="py-12 sm:py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
          class="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
            Our Foundation
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Built on principles that drive excellence in every project
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Integrity -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="300"
            class="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-100"
          >
            <div class="mb-4 sm:mb-6">
              <Icon
                name="heroicons:shield-check"
                class="h-10 w-10 sm:h-12 sm:w-12 text-primary"
              />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Integrity
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              Built on unwavering ethical standards and transparent business practices. 
              Every project is delivered with complete honesty and accountability.
            </p>
          </div>

          <!-- Partnerships -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="400"
            class="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-100"
          >
            <div class="mb-4 sm:mb-6">
              <Icon
                name="heroicons:user-group"
                class="h-10 w-10 sm:h-12 sm:w-12 text-primary"
              />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Partnerships
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              Long-term relationships with clients, suppliers, and communities. 
              We grow together through mutual trust and shared success.
            </p>
          </div>

          <!-- Excellence -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="500"
            class="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-100"
          >
            <div class="mb-4 sm:mb-6">
              <Icon
                name="heroicons:star"
                class="h-10 w-10 sm:h-12 sm:w-12 text-primary"
              />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              Excellence
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              Uncompromising quality in every detail. From design to delivery, 
              we set the standard for industrial engineering excellence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Highlight - Split Section -->
    <section class="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <!-- Image Side -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
            class="order-2 lg:order-1"
          >
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=800&fit=crop"
                alt="Diesel Generator"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Text/Specs Side -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="700"
            class="order-1 lg:order-2"
          >
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Diesel Generators
            </h2>
            <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Industrial-grade power generation systems designed for reliability and performance. 
              Our generators deliver consistent power when you need it most.
            </p>

            <!-- Specifications -->
            <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div class="flex items-start space-x-3 sm:space-x-4">
                <Icon name="heroicons:check-circle" class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-slate-900 mb-1">Power Range</h4>
                  <p class="text-sm sm:text-base text-gray-600">50kVA - 2000kVA capacity options</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 sm:space-x-4">
                <Icon name="heroicons:check-circle" class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-slate-900 mb-1">24/7 Reliability</h4>
                  <p class="text-sm sm:text-base text-gray-600">Engineered for continuous operation</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 sm:space-x-4">
                <Icon name="heroicons:check-circle" class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm sm:text-base font-semibold text-slate-900 mb-1">Comprehensive Support</h4>
                  <p class="text-sm sm:text-base text-gray-600">Full maintenance programs and technical support</p>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/products/diesel-generators"
              class="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
            >
              Learn More
              <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 lg:py-24 bg-white">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible="{ opacity: 1, scale: 1 }"
        :delay="800"
        class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
          Ready to Power Your Industry?
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Let's discuss how CONSTANT Engineering can transform your operations
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105"
        >
          Contact Us Today
          <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, nextTick, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Partner logos configuration
const partners = ref([
  { name: 'Perkins', image: '/partners/perkins.png', imageLoaded: false },
  { name: 'Cummins', image: '/partners/cummins.png', imageLoaded: false },
  { name: 'Schneider Electric', image: '/partners/schneider-electric.png', imageLoaded: false },
  { name: 'Mitsubishi', image: '/partners/mitsubishi.png', imageLoaded: false },
  { name: 'GREE', image: '/partners/gree.png', imageLoaded: false },
  { name: 'meanwell', image: '/partners/meanwell.jpeg', imageLoaded: false }

])

// Handle image loading success
const handleImageLoad = (event) => {
  const img = event.target
  const partnerName = img.alt
  const partner = partners.value.find(p => p.name === partnerName)
  if (partner) {
    partner.imageLoaded = true
  }
}

// Handle image loading errors gracefully
const handleImageError = (event, partnerName) => {
  const img = event.target
  img.style.display = 'none'
  const partner = partners.value.find(p => p.name === partnerName)
  if (partner) {
    partner.imageLoaded = false
  }
}

// Ensure animations initialize on navigation
onMounted(async () => {
  await nextTick()
  // Force a small delay to ensure DOM is ready
  setTimeout(() => {
    // Trigger scroll event to initialize intersection observers
    window.dispatchEvent(new Event('scroll'))
  }, 100)
})

// Watch for route changes and reinitialize
watch(() => route.path, async () => {
  await nextTick()
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'))
  }, 100)
}, { immediate: false })
</script>
