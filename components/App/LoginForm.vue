<script setup lang="ts">

import {computed, ref,} from "vue";
import {useAuthStore} from "~/stores/useAuthStore";

const auth = useAuthStore()
const form = ref({email: '', password: ''})
const loginPending = computed(() => auth.pending)

async function handleLogin() {
  await auth.login(form.value)
}
</script>

<template>
  <form
    @submit.prevent="handleLogin "
    class="grid grid-cols-1 place-content-center max-w-[320px] mx-auto w-full gap-y-4">
    <MInput
      v-model="form.email"
      autofocus
      name="email"
      type="email"
      placeholder="Email"
      trailing-icon="heroicons:envelope-solid"
    />
    <MInput v-model="form.password" required name="password" type="password" placeholder="Password"/>
    <MButton
      :loading="loginPending"
      type="submit"
      block
      class="h-12 text-white bg-medium-blue font-medium mt-4"
    >
      Login
    </MButton>
  </form>
</template>

<style scoped>

</style>
