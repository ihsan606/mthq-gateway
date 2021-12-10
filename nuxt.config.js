export default {

  target: "server",

  //rendering mode ssr
  ssr: true,

  loading: "~/components/Loading.vue",


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mthq-gateway",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/logo.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
          
      },
      {
        rel: "stylesheet",
        href:
        "https://fonts.googleapis.com/css2?family=Tomorrow:wght@300&display=swap",
          
      },
      {
        rel: "stylesheet",
        href:
        "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Montserrat&family=Pacifico&display=swap",
          
      },
      {
        rel: "stylesheet",
        href:
        "https://fonts.googleapis.com/css2?family=Arimo&display=swap",
          
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      },
    ],
    script: [
      { src: "/js/coreui.bundle.min.js" },
      {
        src: "https://app.sandbox.midtrans.com/snap/snap.js",
        "data-client-key": "SB-Mid-client-cu0gnviPmmUcuYlA",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.min.css", 
        "@/assets/css/custom.css",
        // 'bootstrap-css-only/css/bootstrap.min.css',
        // 'mdbvue/lib/css/mdb.min.css'
      ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/chart.js", mode: "client" },
    { src: "~/plugins/mixins.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    //https:dev.auth.nuxtjs.org/
    "@nuxtjs/auth-next",
    // //https://github.com/avil13/vue-sweetalert2
    "vue-sweetalert2/nuxt",
  ],

  auth: {
    strategies: {
  
        //strategy "admin"
        admin: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/admin/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/admin/logout',
              method: 'post'
            },
            user: {
              url: '/api/admin/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },
  
        //strategy "wali"
        wali: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/wali/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/wali/logout',
              method: 'post'
            },
            user: {
              url: '/api/wali/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },
  
        santribaru: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/pendaftaran/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/pendaftaran/logout',
              method: 'post'
            },
            user: {
              url: '/api/pendaftaran/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },
  
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'http://backend-mthq.test'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  }
}
