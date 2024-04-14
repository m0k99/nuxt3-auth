<template>
  <div>
    <AppThemeMode class="right-3 top-3"></AppThemeMode>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
useHead({
  title: 'Nuxt 3 auth',
  meta: [
    {name: 'theme-color', content: '#292E49'}
  ],
})
</script>
