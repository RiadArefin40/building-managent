import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module'
],
primevue: {
  options: {
          theme: {
                preset: Aura
            }
        }
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '/assets/css/style.css','primeicons/primeicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
