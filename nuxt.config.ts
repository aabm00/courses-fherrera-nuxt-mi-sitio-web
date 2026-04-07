// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Mi tienda de servicios',
      meta: [
        { 
          name: 'description', 
          content: 'Una tienda de servicios para tus necesidades' 
        },
      ],
    }
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],

  // SPA - Single Page Application
  // ssr: false,
  // nitro: {
  //   preset: 'static',
  //   static: true,
  // },

  // Prerendering - todo el sitio
  nitro: {
    prerender: {
      routes: ['/', '/about', '/contact', '/pricing', '/products'],
      ignore: ['/dashboard', '/dashboard/**'],
      // Habilitar el rastreo de enlaces para descubrir rutas adicionales
      crawlLinks: true,
    }
  }

});
