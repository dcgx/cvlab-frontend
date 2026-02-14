// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-14',
  devtools: { enabled: true },
  srcDir: 'app',
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  typescript: { strict: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000/api',
    },
  },
})
