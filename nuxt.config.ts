export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: { 
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/public/favicon.png' }]
    }
  }
})
