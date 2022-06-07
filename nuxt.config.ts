import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    ['./modules/arco', { icon: true }],
  ],
  // build
  build: {
    transpile: ['@arco-design/web-vue'],
  },
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
