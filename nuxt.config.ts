// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Playfair+Display': [400, 500, 600, 700],
        Inter: [300, 400, 500, 600],
      }
    }]
  ],
  runtimeConfig: {
    public: {
      googleMapsApiKey: 'AIzaSyCIhmkJ31lw2cB8YKkIbx02Ax7ZVOoD9Xs'
    }
  }
})
