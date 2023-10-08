// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  /*   devtools: { enabled: true }, */
  /*   alias: {
    '@': resolve(__dirname, '/'),
  }, */
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
  modules: ['@nuxt/content', '@pinia/nuxt'],
});
