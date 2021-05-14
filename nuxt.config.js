import mitt from 'mitt'

export const emitter = mitt();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CV Sandy AMBLARD',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'CV Sandy Amblard, développeur web Vue.JS, NuxtJS, mais aussi docteur vétérinaire, éleveur canin. En recherche poste, télétravail possible, temps partiel possible' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicone.png' },
      { rel:"preconnect", href:"https://fonts.gstatic.com"},
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?&display=swap?family=Poppins:wght@200;400;600;800&display=swap&family=Merienda+One" }
    ],
    script: [ 
      {src:"https://kit.fontawesome.com/32f1ce6b66.js", crossorigin: "anonymous"}
    ]
  },
    

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/style/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
