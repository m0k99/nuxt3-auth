// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE || 'http://localhost:8000'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: ''
    },
    css: ['~/assets/scss/main.scss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    devtools: {enabled: true},
    components: [
        {"path": "~/components/Core"},
        "~/components"
    ],
})
