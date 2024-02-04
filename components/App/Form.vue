<script setup lang="ts">
import {ref} from "vue";

const input = ref('')
</script>

<template>
  <div class="grid grid-cols-1 gap-10 md:gap-20 place-content-center">
    <div class="text-center">
      <img class="block mx-auto w-[40px] object-cover mb-5" src="/icons/house.png" alt="">
      <h1 class="text-4xl text-[40px] font-semibold -tracking-[0.01em] mb-3">
        Welcome home
      </h1>
      <span>
        Please enter your details.
      </span>
    </div>
    <div>
      <MInput v-model="input" type="text"/>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
body {
}
</style>
