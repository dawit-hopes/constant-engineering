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
        
        <!-- Gradient Overlay at Bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent z-20 pointer-events-none"></div>
        
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/20 z-20 pointer-events-none"></div>
      </div>
    </div>

    <!-- Content Overlay -->
    <div class="relative z-30 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <!-- Text Column -->
        <div class="order-2 lg:order-1">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            {{ activeSlide.headingPrimary }}
            <span class="relative inline-block text-primary">
              {{ activeSlide.headingHighlight }}
              <svg
                class="absolute -bottom-2 left-0 w-full h-2 text-primary/40"
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
            {{ activeSlide.headingSuffix }}
          </h2>
          <p class="text-lg sm:text-xl text-white/95 leading-relaxed max-w-xl mb-8 drop-shadow-md">
            {{ activeSlide.description }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <a
              href="https://wa.me/251924909098?text=Hello,%20I%20would%20like%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              <Icon name="heroicons:play" class="h-5 w-5 text-white" />
              View Products
            </a>
          </div>

          <!-- Trusted Partners (from homepage hero) -->
          <div class="pt-6 border-t border-white/20 mt-4">
            <p class="text-xs sm:text-sm font-medium text-white/90 mb-4 text-center lg:text-left">
              Trusted by industry leaders
            </p>
            <div class="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-center gap-5 sm:gap-6 md:gap-8">
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/perkins.png"
                  alt="Perkins"
                  class="h-full w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/cummins.png"
                  alt="Cummins"
                  class="h-full w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/schneider-electric.png"
                  alt="Schneider Electric"
                  class="h-full w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/mitsubishi.png"
                  alt="Mitsubishi"
                  class="h-full w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/gree.png"
                  alt="GREE"
                  class="h-full w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
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
