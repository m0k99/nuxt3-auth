export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // @ts-ignore
        if (error.value) {
            // @ts-ignore
            console.log(error.value.data.message)
        }
    }
})
