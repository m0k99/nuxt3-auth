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
useHead({
  title: 'Nuxt 3 auth',
  meta: [
    {name: 'theme-color', content: '#292E49'}
  ],
})
</script>
