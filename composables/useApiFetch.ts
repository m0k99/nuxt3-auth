import type {UseFetchOptions} from '#app'
import {defu} from "defu";

export function useApiFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
    const token = useCookie('XSRF-TOKEN')
    const headers: any = {}
    const config = useRuntimeConfig()
    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
    }
    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.apiBase as string,
        key: url as string,
        credentials: 'include',
        headers: {
            ...headers
        },
        onResponse(_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },
        onResponseError(_ctx) {
            // throw new myBusinessError()
        }
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}
