import {useAuthStore} from "~/stores/useAuthStore";
import {useApiFetch} from "~/composables/useApiFetch";

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()
    if (!auth.isLoggedIn) {
        await auth.fetchUser()
    }
})
