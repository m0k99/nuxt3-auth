import {type UseFetchOptions, useRequestHeaders} from '#app'

export function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
    let headers: any = {
        accept: "application/json",
        referer: "http://localhost:3000"
    }
    const token = useCookie('XSRF-TOKEN')

    const config = useRuntimeConfig()
    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
    }
    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["cookie"])
        }
    }
    return useFetch(config.public.apiBase + path, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
            ...options?.headers
        }
    })

}
