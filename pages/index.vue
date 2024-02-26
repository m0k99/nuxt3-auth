<template>
  <AppMainContainer>
    <div class="w-dvw h-dvh p-4 flex items-center justify-center">
      <div
        class="max-w-[1100px] w-full h-5/6 overflow-auto md:rounded-[80px] bg-white rounded-3xl grid md:grid-cols-2">
        <AppForm/>
        <div class="text-red-400 md:block hidden p-5 w-full h-full overflow-hidden">
          <img
            src="/images/blue-background.jpg"
            class="w-full h-full object-cover object-center md:rounded-[60px]"
            alt=""
          >
        </div>
      </div>
    </div>
  </AppMainContainer>
</template>
<script setup lang="ts">
</script>
