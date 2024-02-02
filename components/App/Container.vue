<script setup lang="ts">

</script>

<template>
  <div>
    <div class="w-dvw h-dvh fixed -z-20">
      <div class="backdrop-blur-xl bg-white/20 absolute w-full h-full">
      </div>
      <img src="/blue-background.jpg" class="w-full h-full object-cover object-center" alt=""/>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
