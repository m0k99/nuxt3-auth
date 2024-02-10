import type {Ref} from 'vue'
import {getUi} from "~/utils";

export const useUI = <T>(key: string, $config?: Ref<T> | T) => {
    const ui = getUi(key)
    return {ui: key};
}
