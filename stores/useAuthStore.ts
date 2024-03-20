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
        const {data, error} = await useApiFetch('/api/user')
        console.log(error)
        user.value = data.value as User

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

    return {user, pending, login, isLoggedIn, fetchUser, register}
})
