import {defineStore} from 'pinia'
import {useApiFetch} from "~/composables/useApiFetch";

type User = {
    id: number;
    name: string;
    email: string;
}
type Credentials = {
    email: string;
    password: string;
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const pending = ref(false)

    async function login(credentials: Credentials) {
        pending.value = true
        await useApiFetch('/sanctum/csrf-cookie')

        const login = await useApiFetch('/login', {
            method: 'POST',
            body: credentials
        })

        const {data} = await useApiFetch('/api/user')
        user.value = data.value as User
        pending.value = false
        return login
    }

    return {
        user,
        pending,
        login
    }
})
