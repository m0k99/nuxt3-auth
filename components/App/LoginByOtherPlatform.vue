<script setup lang="ts">
const loginTypes = ['logos:apple', 'logos:google-icon', 'logos:facebook']
</script>

<template>
  <div class="flex gap-2 items-center justify-center">
    <button
      v-for="(logo , index) in loginTypes"
      :key="index"
      class="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center"
    >
      <icon :name="logo"></icon>
    </button>
  </div>
</template>

<style scoped>

</style>
