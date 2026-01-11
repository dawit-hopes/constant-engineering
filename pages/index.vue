<template>
  <div class="min-h-screen">
    <!-- Hero Section - TaxPal Style Centered Layout -->
    <section class="pt-12 sm:pt-16 lg:pt-32 pb-12 sm:pb-16" style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <!-- Main Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="50"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight px-2"
        >
          Electromechanical solutions
          <span class="relative inline-block text-primary">
            made simple
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
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="100"
          class="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-10 max-w-[700px] mx-auto leading-relaxed px-2"
        >
          CONSTANT Engineering plc specializes in high-quality, tailored solutions for medium to large-scale projects. We deliver innovative, reliable, and efficient results that exceed expectations.
        </p>

        <!-- CTAs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="150"
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <!-- Primary CTA - WhatsApp -->
          <a
            href="https://wa.me/251924909098?text=Hello,%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            Request a Quote
          </a>

          <!-- Secondary CTA -->
          <a
            href="#services"
            class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-900 hover:border-slate-400 transition-colors w-full sm:w-auto"
          >
            <Icon name="heroicons:play" class="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            View Services
          </a>
        </div>

        <!-- Trust Section -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1 }"
          :delay="200"
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

    <!-- Our Foundation Section - Redesigned -->
    <section class="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Header - TaxPal Style -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="50"
          class="text-center mb-16 lg:mb-20"
        >
          <p class="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wider">
            Foundation
          </p>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Built on principles
            <span class="relative inline-block text-primary">
              that drive excellence
              <!-- Technical-style underline -->
              <svg
                class="absolute -bottom-2 left-0 w-full h-2 text-primary/50"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4 L198 4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="4,2"
                />
              </svg>
            </span>
            in every project.
          </h2>
        </div>

        <!-- Foundation Principles - Image Style Design -->
        <div class="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <!-- Integrity -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }"
            :delay="100"
            class="text-center"
          >
            <!-- Square Icon - Primary Color (First/Active) -->
            <div class="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="heroicons:shield-check"
                class="h-8 w-8 text-white"
              />
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-primary mb-3">
              Integrity
            </h3>
            <!-- Main Description (Bold) -->
            <p class="text-base font-semibold text-slate-900 mb-3 leading-snug">
              Built on unwavering ethical standards and transparent business practices.
            </p>
            <!-- Detailed Text (Smaller, Lighter) -->
            <p class="text-sm text-gray-500 leading-relaxed">
              Every project is delivered with complete honesty and accountability, ensuring trust and reliability in every interaction.
            </p>
          </div>

          <!-- Partnerships -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }"
            :delay="150"
            class="text-center"
          >
            <!-- Square Icon - Gray (Inactive) -->
            <div class="h-16 w-16 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="heroicons:user-group"
                class="h-8 w-8 text-white"
              />
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-600 mb-3">
              Partnerships
            </h3>
            <!-- Main Description (Bold) -->
            <p class="text-base font-semibold text-slate-900 mb-3 leading-snug">
              Long-term relationships with clients, suppliers, and communities built on mutual trust.
            </p>
            <!-- Detailed Text (Smaller, Lighter) -->
            <p class="text-sm text-gray-500 leading-relaxed">
              We grow together through shared success, creating lasting value for all stakeholders involved in our projects.
            </p>
          </div>

          <!-- Excellence -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }"
            :delay="200"
            class="text-center"
          >
            <!-- Square Icon - Gray (Inactive) -->
            <div class="h-16 w-16 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="heroicons:star"
                class="h-8 w-8 text-white"
              />
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-600 mb-3">
              Excellence
            </h3>
            <!-- Main Description (Bold) -->
            <p class="text-base font-semibold text-slate-900 mb-3 leading-snug">
              Uncompromising quality in every detail, from design to delivery.
            </p>
            <!-- Detailed Text (Smaller, Lighter) -->
            <p class="text-sm text-gray-500 leading-relaxed">
              We set the standard for industrial engineering excellence, ensuring every solution meets the highest quality benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <FeaturedProducts />


    <!-- CTA Section - With Gradient -->
    <section class="py-24 lg:py-32 relative overflow-hidden" style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="100"
        class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          Ready to Power
          <span class="relative inline-block text-primary">
            Your Industry?
            <!-- Technical-style underline -->
            <svg
              class="absolute -bottom-2 left-0 w-full h-2 text-primary/50"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4 L198 4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="4,2"
              />
            </svg>
          </span>
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how CONSTANT Engineering plc can transform your operations with precision-engineered solutions.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us Today
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
          </NuxtLink>
          <a
            href="https://wa.me/251924909098?text=Hello,%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 hover:border-slate-400 transition-all hover:bg-white/50"
          >
            <Icon name="heroicons:chat-bubble-left-right" class="h-5 w-5 text-primary" />
            Get Quick Quote
          </a>
        </div>
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
