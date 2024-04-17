// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Wuuu addresses the needs of storytelling and provide interactive stories'
                },
                {name: 'msapplication-TileColor', content: '#2e6479'},
                {name: 'msapplication-TileImage', content: '/favicon-144x144.png'},
                {name: 'msapplication-config', content: '/browserconfig.xml'},
                {name: 'theme-color', content: '#17313c'},
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
                {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png'},
                {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57x57.png'},
                {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60x60.png'},
                {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72x72.png'},
                {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76x76.png'},
                {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon-114x114.png'},
                {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon-120x120.png'},
                {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon-144x144.png'},
                {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon-152x152.png'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180x180.png'},
                {rel: 'manifest', href: '/manifest.json'},
            ],
        },
    },
    runtimeConfig: {
        public: {
            NUXT_OAUTH_REDIRECT_URI: process.env.NUXT_OAUTH_REDIRECT_URI,
            NUXT_OAUTH_CLIENT_ID: process.env.NUXT_OAUTH_CLIENT_ID,
            NUXT_OAUTH_AUTH_HEADER: process.env.NUXT_OAUTH_AUTH_HEADER,
            NUXT_OAUTH_URL: process.env.NUXT_OAUTH_URL,
        }
    },
    srcDir: 'src/',
    typescript: {
        strict: true,
    },
    vue: {
        propsDestructure: true,
    },
    dir: {
        assets: 'app/assets',
        public: 'app/public',
        static: 'app/public',
        pages: 'app/routes',
        middleware: 'app/providers/router/middleware',
    },
    modules: [
        '@nuxt/eslint',
        '@unocss/nuxt',
        '@nuxt/image',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        // '@hebilicious/authjs-nuxt',
        'nuxt-graphql-client',
        'nuxt-primevue',
        'nuxt-icon',
    ],
    devtools: {
        enabled: true
    },
    components: [
        {
            path: 'widgets',
            pathPrefix: false,
        },
        {
            path: 'features',
            pathPrefix: false,
        },
        {
            path: 'entities',
            pathPrefix: false,
        },
        {
            path: 'shared',
            pathPrefix: false,
        },
    ],
    pinia: {
        storesDirs: [
            'app/providers/stores/**/*.ts',
        ],
    },
    // css: [
    //     'primevue/resources/themes/aura-light-green/theme.css'
    // ]
})
