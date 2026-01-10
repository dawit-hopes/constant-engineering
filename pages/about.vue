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
          Our Story
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Founded in 2017, CONSTANT Engineering has been at the forefront of 
          electromechanical solutions in Ethiopia and beyond.
        </p>
      </div>
    </section>

    <!-- Origin Story -->
    <section class="px-6 lg:px-12 py-24">
      <div class="mx-auto max-w-4xl">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0 }"
          :delay="200"
          class="prose prose-lg max-w-none"
        >
          <h2 class="text-4xl font-bold text-gray-900 mb-8">The Beginning</h2>
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              In 2017, CONSTANT Engineering was established with a clear vision: to deliver 
              world-class electromechanical engineering solutions that power industries and 
              transform communities across Ethiopia.
            </p>
            <p>
              What started as a small team of passionate engineers has grown into a trusted 
              partner for businesses seeking reliable power generation, automation systems, 
              and HVAC solutions. Our commitment to integrity, excellence, and lasting 
              partnerships has been the foundation of our success.
            </p>
            <p>
              Today, we continue to push the boundaries of industrial engineering, 
              combining cutting-edge technology with proven expertise to solve complex 
              challenges for our clients.
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
