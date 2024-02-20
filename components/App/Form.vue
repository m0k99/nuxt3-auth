<script setup lang="ts">
import {computed, reactive, ref} from "vue";

const form = reactive({email: '', password: ''})
const passInputType = ref('password')
const passwordIcon = computed(() => {
  return passInputType.value === 'password' ? 'eva:eye-off-outline' : 'eva:eye-outline'
})
const togglePasswordType = () => {
  passInputType.value = passInputType.value === 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="grid grid-cols-1 gap-10 md:gap-20 place-content-center px-3 py-10">
    <div class="text-center">
      <img class="block mx-auto w-[40px] object-cover mb-5" src="/icons/house.png" alt="">
      <h1 class="text-4xl text-[40px] text-white font-semibold -tracking-[0.01em] mb-3">
        Welcome home
      </h1>
      <span class="text-white">
        Please enter your details.
      </span>
    </div>
    <form class="grid grid-cols-1 place-content-center max-w-[320px] mx-auto w-full">
      <MInput
        v-model="form.email"
        autofocus name="email"
        type="email"
        placeholder="Email"
        class="mb-4"
        trailing-icon="basil:envelope-solid"
      />
      <MInput v-model="form.password" name="password" :type="passInputType" placeholder="Password">
        <template #trailing>
          <Icon class="cursor-pointer" :name="passwordIcon" size="24px" color="#9ca3af" @click="togglePasswordType"/>
        </template>
      </MInput>
    </form>
  </div>
</template>

<style>
/* Add your custom styles here */
body {
}
</style>
