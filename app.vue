<template>
  <AppMainContainer>
    <div class="fixed right-0 top-0 flex items-center justify-end gap-5 p-5 z-20">
      <AppThemeMode></AppThemeMode>
      <a href="https://github.com/m0k99/nuxt3-auth" target="_blank">
        <Icon name="mdi:github" size="28" class="text-[#e2e8f0]"></Icon>
      </a>
    </div>
    <NuxtPage></NuxtPage>
  </AppMainContainer>
</template>
<script setup>
import {computed} from "vue";

const colorMode = useColorMode()

const color = computed(() => colorMode.preference === 'dark' ? '#243B55' : '#292E49')
useHead({
  title: 'Nuxt 3 auth',
  meta: [
    {ey: 'theme-color', name: 'theme-color', content: color}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
