declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  const { googleAnalyticsId } = useRuntimeConfig().public
  if (!googleAnalyticsId) return

  const router = useRouter()
  router.afterEach((to, from) => {
    if (!from.name || typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title
    })
  })
})
