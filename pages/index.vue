<template>
  <AppMainContainer>
    <div class="w-dvw h-dvh flex items-center justify-center px-3">
      <div
        class="w-full overflow-auto bg-white rounded-3xl grid transition-all duration-500 ease-in-out"
        :class="[loggedIn?'min-h-2/5 max-w-[600px] md:grid-cols-1 md:rounded-3xl':'md:grid-cols-2 h-5/6 max-w-[1100px] w-full md:rounded-[80px]']"
      >
        <LazyAppForm v-if="!loggedIn"/>
        <LazyAppUserDetails v-else/>
        <div v-show="!loggedIn" class="text-red-400 md:block hidden p-5 w-full h-full overflow-hidden">
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
