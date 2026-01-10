<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-16 lg:py-24" style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="50"
        class="mx-auto max-w-4xl text-center"
      >
        <p class="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wider">
          About
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          Our Story
        </h1>
        <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Founded in 2017, CONSTANT Engineering plc has been at the forefront of 
          electromechanical solutions in Ethiopia and beyond.
        </p>
      </div>
    </section>

    <!-- Our Story Section - Redesigned -->
    <section class="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl">
        <!-- Header -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="100"
          class="text-center mb-12 lg:mb-16"
        >
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Founded in
            <span class="relative inline-block text-primary">
              2017
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
            , leading electromechanical solutions.
          </h2>
        </div>

        <!-- Story Content -->
        <div class="max-w-4xl mx-auto">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="150"
            class="space-y-6 lg:space-y-8"
          >
            <p class="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
              CONSTANT Engineering plc has been at the forefront of electromechanical solutions in Ethiopia and beyond. 
              Our journey began with a simple yet powerful mission: to deliver excellence in every project we undertake.
            </p>
            
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              Established with a clear vision to deliver world-class engineering solutions that power industries and transform communities. 
              What started as a small team of passionate engineers has grown into a trusted partner for businesses across Ethiopia and the region.
            </p>
            
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
              Today, we continue to push boundaries, innovate, and set new standards in the electromechanical engineering industry. 
              Our commitment to quality, integrity, and customer satisfaction remains unwavering.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team & Process Grid (Studio Style) -->
    <section class="px-6 lg:px-12 py-24 bg-gray-50 border-t border-gray-200">
      <div class="mx-auto max-w-7xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
          class="mb-16 text-center"
        >
          <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            How We Work
          </h2>
        </div>

        <div class="space-y-0">
          <!-- Discovery -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="500"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200 first:border-t"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Discovery
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                We begin every project with deep understanding. Our team conducts thorough 
                assessments to identify your unique challenges and opportunities.
              </p>
            </div>
          </div>

          <!-- Design -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Design
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Custom solutions tailored to your specific needs. Our engineers leverage 
                industry best practices and innovative technologies to create optimal designs.
              </p>
            </div>
          </div>

          <!-- Implementation -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="700"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Implementation
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Precise execution with attention to every detail. Our skilled technicians 
                ensure seamless installation and integration of all systems.
              </p>
            </div>
          </div>

          <!-- Support -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="800"
            class="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200"
          >
            <div class="flex items-start">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Support
              </h3>
            </div>
            <div class="flex items-start">
              <p class="text-lg text-gray-600 leading-relaxed">
                Long-term partnership through comprehensive maintenance and support. 
                We're committed to your success beyond project completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="px-6 lg:px-12 py-24 border-t border-gray-200">
      <div class="mx-auto max-w-7xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="900"
          class="text-center mb-16"
        >
          <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Values
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1000 + index * 100"
            class="text-center"
          >
            <div class="mb-6 flex justify-center">
              <Icon
                :name="value.icon"
                class="h-16 w-16 text-primary"
              />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    title: 'Integrity',
    icon: 'heroicons:shield-check',
    description: 'Uncompromising ethical standards in every interaction and decision.'
  },
  {
    title: 'Excellence',
    icon: 'heroicons:star',
    description: 'Pursuing perfection in design, execution, and service delivery.'
  },
  {
    title: 'Innovation',
    icon: 'heroicons:light-bulb',
    description: 'Embracing new technologies and methodologies to solve complex challenges.'
  }
]
</script>
