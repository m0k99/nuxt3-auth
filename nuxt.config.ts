// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
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
