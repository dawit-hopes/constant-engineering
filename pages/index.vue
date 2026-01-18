<template>
  <div class="min-h-screen">
    <!-- Hero Section - Variant C -->
    <HeroVariantC />

    <!-- Our Foundation Section - Subtle transition from hero -->
    <section class="relative py-24 lg:py-32 overflow-hidden bg-white">
      <!-- Very soft halo blending up into the hero -->
      <div
        class="pointer-events-none absolute inset-x-0 -top-40 h-64"
        style="background: radial-gradient(ellipse at top, rgba(220, 38, 38, 0.25), transparent 65%);"
      ></div>

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

    <!-- Clients / Partners Section -->
    <section class="py-10 lg:py-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="50"
          class="text-center mb-12 lg:mb-16"
        >
          <p class="text-xs sm:text-sm font-semibold text-slate-600 mb-3 uppercase tracking-[0.2em]">
            Our Clients
          </p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Trusted by 
            <span class="relative inline-block text-primary">
              top-tier clients
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
          <p class="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            CONSTANT ENGINEERING proudly serves globally respected brands and local leaders who trust us to power and protect their operations.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="120"
          class="max-w-5xl mx-auto"
        >
          <div class="grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
            <div
              v-for="(client, index) in clients"
              :key="client.name"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="150 + index * 50"
              class="group relative h-12 sm:h-16 lg:h-20 flex items-center justify-center"
            >
              <img
                :src="client.logo"
                :alt="client.name"
                class="h-full w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                loading="lazy"
              />
              <!-- Subtle underline on hover -->
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          Let's discuss how CONSTANT ENGINEERING plc can transform your operations with precision-engineered solutions.
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
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const clients = [
  {
    name: 'Cummins',
    logo: '/clients/client-a.png'
  },
  {
    name: 'Gree',
    logo: '/clients/client-b.jpg'
  },
  {
    name: 'Mitsubishi Electric',
    logo: '/clients/client-c.jpg'
  },
  {
    name: 'Perkins',
    logo: '/clients/client-d.jpg'
  },
  {
    name: 'Schneider Electric',
    logo: '/clients/client-e.webp'
  }
]

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
