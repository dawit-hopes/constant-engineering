// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      strict: false
    }
  },
  app: {
    head: {
      title: 'CONSTANT ENGINEERING plc',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Electromechanical Experts - Power, Automation, HVAC Solutions' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Constant-logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
