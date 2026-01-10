<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="px-6 lg:px-12 py-24 lg:py-32 border-b border-gray-200">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        class="mx-auto max-w-4xl text-center"
      >
        <h1 class="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Our Products
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Comprehensive engineering solutions designed to power your industry
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="px-6 lg:px-12 py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(product, index) in products"
            :key="product.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="200 + index * 100"
            class="group"
          >
            <NuxtLink
              :to="`/products/${product.id}`"
              class="block bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-xl transition-all duration-300 h-full"
            >
              <div class="mb-6">
                <Icon
                  :name="product.icon"
                  class="h-14 w-14 text-primary group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ product.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              <span class="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                View Details
                <Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 lg:px-12 py-24 bg-gray-50 border-t border-gray-200">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible="{ opacity: 1, scale: 1 }"
        :delay="1000"
        class="mx-auto max-w-4xl text-center"
      >
        <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Need a Custom Solution?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our engineering team can design and implement solutions tailored to your specific requirements
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105"
        >
          Contact Our Team
          <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const products = [
  {
    id: 'diesel-generators',
    name: 'Diesel Generators',
    icon: 'heroicons:bolt',
    description: 'Industrial-grade power generation systems with 24/7 reliability. Available in various capacities to meet your power needs.',
    tags: ['Power Generation', 'Industrial', 'Backup Power']
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy Systems',
    icon: 'heroicons:sun',
    description: 'Sustainable solar power solutions designed for maximum efficiency. Grid-tied and off-grid systems available.',
    tags: ['Renewable Energy', 'Solar', 'Sustainability']
  },
  {
    id: 'hvac-systems',
    name: 'HVAC Systems',
    icon: 'heroicons:wind',
    description: 'Complete heating, ventilation, and air conditioning solutions for optimal climate control and energy efficiency.',
    tags: ['Climate Control', 'Energy Efficient', 'Commercial']
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    icon: 'heroicons:cpu-chip',
    description: 'Advanced automation and control systems that streamline operations and boost productivity across industries.',
    tags: ['Automation', 'PLC', 'Control Systems']
  },
  {
    id: 'metal-engineering',
    name: 'Metal Engineering',
    icon: 'heroicons:wrench-screwdriver',
    description: 'Precision metal fabrication and custom engineering services for complex industrial applications.',
    tags: ['Fabrication', 'Custom Design', 'Precision']
  },
  {
    id: 'electrical-systems',
    name: 'Electrical Systems',
    icon: 'heroicons:light-bulb',
    description: 'Complete electrical design, installation, and maintenance services for commercial and industrial facilities.',
    tags: ['Electrical Design', 'Installation', 'Maintenance']
  },
  {
    id: 'maintenance-services',
    name: 'Maintenance Services',
    icon: 'heroicons:wrench',
    description: 'Comprehensive maintenance programs to keep your systems running at peak performance with minimal downtime.',
    tags: ['Preventive Maintenance', '24/7 Support', 'Service Contracts']
  },
  {
    id: 'consulting',
    name: 'Engineering Consulting',
    icon: 'heroicons:document-text',
    description: 'Expert consulting services for complex engineering challenges, feasibility studies, and project planning.',
    tags: ['Consulting', 'Feasibility Studies', 'Project Planning']
  }
]
</script>
