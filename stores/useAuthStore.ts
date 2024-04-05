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

type RegistrationInfo = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const pending = ref(false)
    const isLoggedIn = computed(() => !!user.value)

    async function fetchUser() {
        pending.value = true
        const {data} = await useApiFetch('/api/user')
        user.value = data.value as User
        pending.value = false

    }

    async function login(credentials: Credentials) {
        pending.value = true

        await useApiFetch('/sanctum/csrf-cookie')

        const login = await useApiFetch('/login', {
            method: 'POST',
            body: credentials
        })

        await fetchUser()

        pending.value = false

        return login
    }

    async function register(info: RegistrationInfo) {
        pending.value = true

        await useApiFetch('/sanctum/csrf-cookie')


        const register = await useApiFetch('/register', {
            method: 'POST',
            body: info
        })
        await fetchUser()
        pending.value = false
        return register
    }

    async function logout() {
        await useApiFetch('/logout', {method: 'POST'})
        user.value = null

    }

    return {user, pending, login, isLoggedIn, fetchUser, register, logout}
})
