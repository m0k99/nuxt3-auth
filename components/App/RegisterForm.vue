<script setup lang="ts">
import {computed, ref,} from "vue";
import {useAuthStore} from "~/stores/useAuthStore";

const emit = defineEmits(['toggle'])
const auth = useAuthStore()
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const registerPending = computed(() => auth.pending)

async function handelRegister() {
  const {error, data} = await auth.register(form.value)
  if (!error.value) {
    emit('toggle')
  } else {
    throw error
  }


}
</script>

<template>
  <form
    @submit.prevent="handelRegister"
    class="grid grid-cols-1 place-content-center max-w-[320px] mx-auto w-full gap-y-4">
    <MInput
      v-model="form.name"
      autofocus
      name="name"
      type="string"
      placeholder="Full name"
      trailing-icon="material-symbols:person-rounded"
    />
    <MInput
      v-model="form.email"
      name="email"
      type="email"
      placeholder="Email"
      trailing-icon="heroicons:envelope-solid"
    />
    <MInput
      v-model="form.password"
      required
      name="password"
      type="password"
      placeholder="Password"
      autocomplete="new-password"
    />
    <MInput
      v-model="form.password_confirmation"
      required
      name="password_confirmation"
      type="password"
      autocomplete="new-password"
      placeholder="Password Confirmation"
    />
    <MButton
      :loading="registerPending"
      type="submit"
      block
      class="h-12 text-white bg-medium-blue font-medium mt-4"
    >
      Register
    </MButton>
  </form>
</template>

<style scoped>

</style>
