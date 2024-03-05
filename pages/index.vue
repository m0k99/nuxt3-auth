<template>
  <AppMainContainer>
    <div class="w-dvw h-dvh flex items-center justify-center">
      <div
        class="container-w w-full h-5/6 overflow-auto md:rounded-[80px] bg-white rounded-3xl grid md:grid-cols-2 transition-all ease-in-out duration-500"
        :class="[loggedIn?'h-full md:rounded-none max-w-full':'max-w-[1100px]']"
      >
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
import {useAuthStore} from "~/stores/useAuthStore";
import {computed} from "vue";

const auth = useAuthStore()
const loggedIn = computed(() => auth.isLoggedIn)
</script>

<style lang="scss" scoped>
//style
</style>
