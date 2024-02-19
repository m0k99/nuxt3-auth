<template>
  <AppMainContainer>
    <div class="w-dvw h-dvh p-4 flex items-center justify-center">
      <div
        class="max-w-[1200px] w-full h-5/6 overflow-auto md:rounded-[80px] bg-white backdrop-blur-[100px] bg-opacity-10 rounded-3xl grid sm:grid-cols-2">
        <AppForm/>
        <div class="text-red-400 sm:block hidden">
          grid
        </div>
      </div>
    </div>
  </AppMainContainer>
</template>
<script setup lang="ts">
</script>
