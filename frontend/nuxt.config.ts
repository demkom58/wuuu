// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
            './src/widgets/**/model/*.ts',
            './src/features/**/model/*.ts',
            './src/entities/**/model/*.ts',
            './src/shared/**/model/*.ts',
        ],
    },
    // css: [
    //     'primevue/resources/themes/aura-light-green/theme.css'
    // ]
    alias: {
        pinia: "node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    },
})
