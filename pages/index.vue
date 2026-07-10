<template>
  <div class="min-h-screen">
    <!-- Hero Section - Variant C -->
    <HeroVariantC />

    <PartnerLogos />

    <!-- Our Foundation Section -->
    <section class="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div class="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="heroicons:user-group"
                class="h-8 w-8 text-white"
              />
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-primary mb-3">
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
            <div class="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon
                name="heroicons:star"
                class="h-8 w-8 text-white"
              />
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-primary mb-3">
              Excellence
            </h3>
            <!-- Main Description (Bold) -->
            <p class="text-base font-semibold text-slate-900 mb-3 leading-snug">
              Uncompromising quality in every detail, from design to delivery.
            </p>
            <!-- Detailed Text (Smaller, Lighter) -->
            <p class="text-sm text-gray-500 leading-relaxed">
              We set the standard for industrial ENGINEERING excellence, ensuring every solution meets the highest quality benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <FeaturedProducts />

    <ClientsSection />

    <CtaSection />
  </div>
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
