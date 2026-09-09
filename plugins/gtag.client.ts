declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const { googleAnalyticsId } = useRuntimeConfig().public

  if (!googleAnalyticsId || import.meta.dev) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', googleAnalyticsId, { send_page_view: false })

  // useHead() is unreliable for external scripts in client plugins — inject directly.
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
  document.head.appendChild(script)

  function trackPage(path: string) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title
    })
  }

  const router = useRouter()
  router.isReady().then(() => {
    trackPage(router.currentRoute.value.fullPath)
  })

  router.afterEach((to, from) => {
    if (!from.name) return
    trackPage(to.fullPath)
  })
})
