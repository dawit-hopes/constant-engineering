<template>
  <div :class="wrapperClass">
    <p v-if="title" :class="titleClass">
      {{ title }}
    </p>
    <div :class="gridClass">
      <div
        v-for="partner in resolvedPartners"
        :key="partner.name"
        :class="[
          'flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300',
          partner.heightClass || DEFAULT_PARTNER_HEIGHT_CLASS,
        ]"
      >
        <img
          :src="partner.src"
          :alt="partner.name"
          :class="imgClass"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  DEFAULT_PARTNER_HEIGHT_CLASS,
  partnerLogos,
  type PartnerLogo,
} from '~/data/partners'

const props = withDefaults(
  defineProps<{
    title?: string
    partners?: PartnerLogo[]
    variant?: 'dark' | 'light'
  }>(),
  {
    title: 'Our Partners',
    variant: 'dark',
  },
)

const resolvedPartners = computed(() => props.partners ?? partnerLogos)

const wrapperClass = computed(() =>
  props.variant === 'dark' ? 'pt-3 sm:pt-4 border-t border-white/10' : '',
)

const titleClass = computed(() =>
  props.variant === 'dark'
    ? 'text-[10px] sm:text-xs md:text-sm font-medium text-white/60 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider'
    : 'text-[10px] sm:text-xs md:text-sm font-medium text-slate-600 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider',
)

const gridClass =
  'grid grid-cols-3 lg:flex lg:flex-nowrap items-center justify-start gap-2 sm:gap-4 md:gap-6'

const imgClass = computed(() =>
  props.variant === 'dark'
    ? 'h-full w-auto object-contain brightness-0 invert'
    : 'h-full w-auto object-contain',
)
</script>
