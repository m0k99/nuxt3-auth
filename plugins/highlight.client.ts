import 'highlight.js/styles/tokyo-night-dark.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin)
})
