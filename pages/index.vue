<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Main Headline -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="100"
            class="space-y-8"
          >
            <h1 class="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-none">
              Electromechanical
              <span class="text-primary">Experts</span>
            </h1>
          </div>

          <!-- Right: Sub-headline & CTA -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
            class="space-y-6"
          >
            <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light tracking-wide">
              Power, Automation, HVAC Solutions
            </p>
            <p class="text-lg text-gray-500 leading-relaxed">
              Delivering world-class engineering solutions across Ethiopia and beyond. 
              From diesel generators to solar energy systems, we power industries.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105"
              >
                Get Started
                <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
              </NuxtLink>
              <NuxtLink
                to="/products"
                class="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all"
              >
                View Products
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Grid (Studio-style List Layout) -->
    <section class="px-6 lg:px-12 py-24 border-t border-gray-200">
      <div class="mx-auto max-w-7xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300"
          class="mb-16"
        >
          <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
            Our Foundation
          </h2>
        </div>

        <div class="space-y-0">
          <!-- Integrity -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="400"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200 first:border-t"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Integrity
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Built on unwavering ethical standards and transparent business practices. 
                Every project is delivered with complete honesty and accountability.
              </p>
            </div>
          </div>

          <!-- Partnerships -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="500"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Partnerships
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Long-term relationships with clients, suppliers, and communities. 
                We grow together through mutual trust and shared success.
              </p>
            </div>
          </div>

          <!-- Excellence -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Excellence
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Uncompromising quality in every detail. From design to delivery, 
                we set the standard for industrial engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="px-6 lg:px-12 py-24 bg-gray-50 border-t border-gray-200">
      <div class="mx-auto max-w-7xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="700"
          class="mb-16 text-center"
        >
          <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Featured Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive engineering solutions for modern industries
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(product, index) in featuredProducts"
            :key="product.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="800 + index * 100"
            class="group"
          >
            <NuxtLink
              :to="`/products/${product.id}`"
              class="block bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div class="mb-6">
                <Icon
                  :name="product.icon"
                  class="h-12 w-12 text-primary group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                {{ product.description }}
              </p>
              <span class="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more
                <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 lg:px-12 py-24 border-t border-gray-200">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible="{ opacity: 1, scale: 1 }"
        :delay="1200"
        class="mx-auto max-w-4xl text-center"
      >
        <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Ready to Power Your Industry?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how CONSTANT Engineering can transform your operations
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105"
        >
          Contact Us Today
          <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredProducts = [
  {
    id: 'diesel-generators',
    name: 'Diesel Generators',
    icon: 'heroicons:bolt',
    description: 'Industrial-grade power generation with 24/7 reliability and comprehensive support.'
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy Systems',
    icon: 'heroicons:sun',
    description: 'Sustainable solar solutions designed for maximum efficiency and long-term savings.'
  },
  {
    id: 'hvac-systems',
    name: 'HVAC Systems',
    icon: 'heroicons:wind',
    description: 'Climate control solutions for optimal comfort and energy efficiency.'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    icon: 'heroicons:cpu-chip',
    description: 'Smart automation systems that streamline operations and boost productivity.'
  },
  {
    id: 'metal-engineering',
    name: 'Metal Engineering',
    icon: 'heroicons:wrench-screwdriver',
    description: 'Precision fabrication and custom metalwork for complex industrial needs.'
  },
  {
    id: 'electrical-systems',
    name: 'Electrical Systems',
    icon: 'heroicons:light-bulb',
    description: 'Complete electrical design, installation, and maintenance services.'
  }
]
</script>
