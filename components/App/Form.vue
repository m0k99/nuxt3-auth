<script setup lang="ts">
import {ref} from "vue";
import LoginForm from "~/components/App/LoginForm.vue";
import RegisterForm from "~/components/App/RegisterForm.vue";

const form = {
  LoginForm,
  RegisterForm
}

const activeForm = ref('LoginForm')
const toggleComponent = () => {
  if (activeForm.value === 'LoginForm') {
    activeForm.value = 'RegisterForm'
  } else {
    activeForm.value = 'LoginForm'
  }
}
</script>

<template>
  <div class="grid grid-cols-1 gap-8 md:gap-8 place-content-center px-3 py-10">
    <div class="text-center md:mb-10">
      <img class="block mx-auto w-[40px] object-cover mb-5" src="/icons/house.png" alt="">
      <h1 class="text-4xl text-[40px] dark:text-white font-semibold -tracking-[0.01em] mb-3">
        Welcome home
      </h1>
      <span class="dark:text-white">
        Please enter your details.
      </span>
    </div>
    <component :is="form[activeForm]" @toggle="toggleComponent"/>
    <div class="relative max-w-[320px] mx-auto w-full">
      <div class="bg-gray-300 dark:bg-emerald-500 h-px w-full"></div>
      <span class="absolute text-gray-300 dark:text-emerald-500 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-3 bg-white dark:bg-slate-900">Or</span>
    </div>
    <div class="text-center">
      <span v-if="activeForm === 'LoginForm'" class="text-gray-500 dark:text-gray-400">
        Are you new?
        <MButton
          class="underline text-medium-blue dark:text-emerald-500"
          @click="toggleComponent"
        >
          Create an account
        </MButton>
      </span>
      <span v-else class="text-gray-500 dark:text-gray-400">
        Have an account?
        <MButton
          class="underline text-medium-blue dark:text-emerald-500"
          @click="toggleComponent"
        >
          Login
        </MButton>
      </span>

    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
body {
}
</style>
