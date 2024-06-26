// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/base.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]

})
