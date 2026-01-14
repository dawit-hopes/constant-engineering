<template>
  <section style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <!-- Text Column -->
        <div class="order-2 lg:order-1">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Electromechanical solutions
            <span class="relative inline-block text-primary">
              made simple
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
            for industry.
          </h2>
          <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
            CONSTANT Engineering plc specializes in high-quality, tailored solutions for medium to large-scale projects. We deliver innovative, reliable, and efficient results that exceed expectations.
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
              class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all hover:scale-105"
            >
              <Icon name="heroicons:play" class="h-5 w-5 text-primary" />
              View Products
            </a>
          </div>

          <!-- Trusted Partners (from homepage hero) -->
          <div class="pt-6 border-t border-slate-200 mt-4">
            <p class="text-xs sm:text-sm font-medium text-slate-500 mb-4 text-center lg:text-left">
              Trusted by industry leaders
            </p>
            <div class="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-center gap-5 sm:gap-6 md:gap-8">
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/perkins.png"
                  alt="Perkins"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/cummins.png"
                  alt="Cummins"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/schneider-electric.png"
                  alt="Schneider Electric"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/mitsubishi.png"
                  alt="Mitsubishi"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/gree.png"
                  alt="GREE"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div class="h-7 sm:h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src="/partners/meanwell.jpeg"
                  alt="Meanwell"
                  class="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Image / Card Column -->
        <div class="order-1 lg:order-2">
          <!-- Mobile/Tablet (when grid is column): single image, same style as Variant A -->
          <div class="lg:hidden">
            <div
              class="relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.20)]"
            >
              <img
                src="/hero-bg.avif"
                alt="CONSTANT Engineering workspace and industrial solutions"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-slate-900/0 to-slate-900/0"></div>
            </div>
          </div>

          <!-- Desktop (when grid is 2-column): card cluster -->
          <div class="relative hidden lg:block">
            <div class="relative max-w-xl mx-auto h-[360px] md:h-[520px]">
            <!-- Main Center Card - Large Editorial Image -->
            <div
              class="absolute inset-x-6 top-6 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100"
            >
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src="/hero-bg.avif"
                  alt="CONSTANT Engineering workspace and industrial solutions"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Vertical Service Card (Left) - desktop only -->
            <div
              class="absolute bottom-10 -left-2 sm:-left-4 w-40 sm:w-44 rounded-3xl bg-white shadow-xl border border-slate-100 p-4 flex flex-col gap-3"
            >
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Solutions at a glance
              </p>
              <div class="space-y-2 text-xs text-slate-600">
                <div class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Power & backup systems</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>Solar & hybrid energy</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>HVAC & cooling</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  <span>Industrial automation</span>
                </div>
              </div>
            </div>

            <!-- Diesel Generator Image Card (Top Right, higher so it doesn't cover the main image) - desktop only -->
            <div
              class="absolute -top-20 -right-6 sm:-top-20 sm:-right-10 w-40 sm:w-48 rounded-3xl bg-white shadow-xl border border-slate-100 overflow-hidden"
            >
              <div class="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src="/products/diesel-generator-systems.jpg"
                  alt="Diesel generator systems by CONSTANT Engineering"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="p-3">
                <p class="text-[11px] font-semibold text-slate-900">
                  Diesel Generator Systems
                </p>
                <p class="text-[10px] text-slate-600">
                  10 KVA – 2000 KVA · Prime & standby power
                </p>
              </div>
            </div>

            <!-- Trust Badge Card (Bottom Right) - desktop only -->
            <div
              class="absolute bottom-0 right-2 w-52 sm:w-60 rounded-2xl bg-primary text-white shadow-2xl p-5 backdrop-blur-sm"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon name="heroicons:star" class="h-5 w-5 text-white" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">Trusted partner</p>
                  <p class="text-[11px] text-white/90">Medium to large-scale projects</p>
                </div>
              </div>
              <div class="space-y-1.5 text-[11px] text-white/90">
                <p>End-to-end electromechanical solutions.</p>
                <p>Reliable power, cooling, and automation in one place.</p>
              </div>
            </div>

            <!-- Decorative Background Elements -->
            <div class="absolute inset-0 -z-10">
              <div class="absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
              <div class="absolute bottom-1/4 left-1/4 h-40 w-40 rounded-full bg-emerald-100/30 blur-3xl"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
