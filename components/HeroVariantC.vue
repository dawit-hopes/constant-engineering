<template>
  <section 
    class="relative flex items-center overflow-hidden h-screen -mt-14 sm:-mt-16"
    style="height: 110vh; min-height: 100vh;"
  >
        <!-- Carousel Background -->
    <div class="absolute inset-0 w-full h-full">
      <!-- Carousel Container -->
      <div class="relative w-full h-full">
        <!-- Carousel Slides -->
        <div
          v-for="(slide, index) in carouselSlides"
          :key="index"
          :class="[
            'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          ]"
        >
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
        
        <!-- Gradient Overlay at Bottom (neutral, for readability) -->
        <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20 pointer-events-none"></div>
        
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/35 z-20 pointer-events-none"></div>
      </div>
    </div>

    <!-- Content Overlay -->
    <div class="relative z-30 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <!-- Text Column with Smooth Animations -->
        <div class="order-2 lg:order-1 relative min-h-[400px] sm:min-h-[500px]">
          <!-- Animated Text Container -->
          <Transition
            mode="out-in"
            enter-active-class="transition-all duration-700 ease-out"
            enter-from-class="opacity-0 translate-y-8"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-500 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <div :key="currentSlide" class="absolute inset-0">
              <!-- Minimal, modern text layout (no cards) -->
              <!-- Slide meta -->
              <div class="flex items-center gap-3 mb-4 text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-white/70">
                <span class="flex items-center gap-1">
                  <span class="h-px w-6 bg-white/70"></span>
                  <span>0{{ currentSlide + 1 }}</span>
                </span>
                <span class="text-white/40">•</span>
                <span>{{ activeSlide.label }}</span>
              </div>

              <!-- Main Heading -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] mb-5">
                <span class="block">{{ activeSlide.headingPrimary }}</span>
                <span class="block relative mt-1">
                  <span class="relative z-10">{{ activeSlide.headingHighlight }}</span>
                  <span class="absolute -bottom-1 left-0 h-[2px] w-16 bg-primary/70 rounded-full"></span>
                </span>
                <span v-if="activeSlide.headingSuffix" class="block mt-1 text-white/90">
                  {{ activeSlide.headingSuffix }}
                </span>
              </h1>

              <!-- Description -->
              <p class="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-xl">
                {{ activeSlide.description }}
              </p>

              <!-- CTAs -->
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <a
                  href="https://wa.me/251924909098?text=Hello,%20I%20would%20like%20to%20request%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-primary/90 transition-all duration-300 hover:translate-y-0.5"
                >
                  Request a Quote
                  <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#products"
                  class="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm sm:text-base font-medium text-white/90 hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  <Icon name="heroicons:play" class="h-4 w-4 text-white" />
                  View Products
                </a>
              </div>

              <!-- Trusted Partners -->
              <div class="pt-4 border-t border-white/10">
                <p class="text-xs sm:text-sm font-medium text-white/60 mb-5 uppercase tracking-wider">
                  Trusted by industry leaders
                </p>
                <div class="grid grid-cols-3 lg:flex lg:flex-nowrap items-center justify-start gap-4 sm:gap-6">
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/perkins.png"
                      alt="Perkins"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/cummins.png"
                      alt="Cummins"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/schneider-electric.png"
                      alt="Schneider Electric"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/mitsubishi.png"
                      alt="Mitsubishi"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/gree.png"
                      alt="GREE"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                  <div class="h-8 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src="/partners/meanwell.png"
                      alt="Meanwell"
                      class="h-full w-auto object-contain brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Minimal Carousel Indicator -->
        <div class="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
          <div class="flex items-center gap-3">
            <!-- Slide Numbers -->
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-white/90">
                {{ (currentSlide + 1).toString().padStart(2, '0') }}
              </span>
              <span class="text-white/40">/</span>
              <span class="text-sm font-medium text-white/50">
                {{ carouselSlides.length.toString().padStart(2, '0') }}
              </span>
            </div>
            
            <!-- Minimal Progress Bar -->
            <div class="h-px w-16 bg-white/20 overflow-hidden">
              <div 
                class="h-full bg-white/80 transition-all duration-500 ease-out"
                :style="{ width: `${((currentSlide + 1) / carouselSlides.length) * 100}%` }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const carouselSlides = [
  {
    image: '/hero-bg.avif',
    alt: 'Diesel generator systems powering an industrial facility',
    label: 'Reliable backup power',
    headingPrimary: 'Power that keeps',
    headingHighlight: 'your operations running',
    headingSuffix: '',
    description:
      'From hospitals to factories, our diesel generator systems provide dependable backup and prime power so your critical operations never stop.'
  },
  {
    image: '/Hero3.avif',
    alt: 'Modern solar and HVAC installation on a commercial building',
    label: 'Integrated energy solutions',
    headingPrimary: 'Smarter energy',
    headingHighlight: 'for a modern Ethiopia',
    headingSuffix: '',
    description:
      'We design and deliver integrated solar, HVAC, and electrical solutions that reduce costs, improve efficiency, and support sustainable growth.'
  }
]

const currentSlide = ref(0)
let autoSlideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselSlides.length) % carouselSlides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const activeSlide = computed(() => carouselSlides[currentSlide.value])

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
