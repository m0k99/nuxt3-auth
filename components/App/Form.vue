<script setup lang="ts">
import {computed, ref,} from "vue";
import {useAuthStore} from "~/stores/useAuthStore";

const auth = useAuthStore()
const form = ref({email: '', password: ''})
const loginTypes = ['logos:apple', 'logos:google-icon', 'logos:facebook']
const user = computed(() => auth.user)
const loginPending = computed(() => auth.pending)

async function handleLogin() {
  await auth.login(form.value)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-8 md:gap-8 place-content-center px-3 py-10">
    <div class="text-center md:mb-10">
      <img class="block mx-auto w-[40px] object-cover mb-5" src="/icons/house.png" alt="">
      <h1 class="text-4xl text-[40px] font-semibold -tracking-[0.01em] mb-3">
        Welcome home
      </h1>
      <pre>
        {{ user }}
      </pre>
      <span>
        Please enter your details.
      </span>
    </div>
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
      <!--      <MCheckbox v-model="form.remember" name="remember" label="Remember me 30 days"/>-->
      <MButton
        :loading="loginPending"
        type="submit"
        block
        class="h-12 text-white bg-medium-blue font-medium mt-4"
      >
        Login
      </MButton>
    </form>
    <div class="relative max-w-[320px] mx-auto w-full">
      <div class="bg-gray-300 h-px w-full"></div>
      <span class="absolute text-gray-300 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-3 bg-white">or</span>
    </div>
    <div class="flex gap-2 items-center justify-center">
      <button
        v-for="(logo , index) in loginTypes"
        :key="index"
        class="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center"
      >
        <icon :name="logo"></icon>
      </button>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
body {
}
</style>
