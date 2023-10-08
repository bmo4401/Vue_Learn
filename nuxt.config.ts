// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
  ssr: false,
  modules: ['@nuxt/content', '@pinia/nuxt'],
  routeRules: {
    '/api/hello': { ssr: false },
  },
});
