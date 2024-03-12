<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
import {computed} from "vue";

const auth = useAuthStore()
const user = computed(() => auth.user)
const userJson = JSON.stringify(user.value, null, 4)


async function handleLogout() {
  await auth.logout()
}
</script>

<template>
  <div class="px-3 py-10 overflow-hidden">
    <div class="rounded-xl overflow-hidden">
        <highlightjs
          autodetect
          language="json"
          :code="userJson"
        />
    </div>
    <MButton @click="handleLogout" class="h-12 text-white bg-medium-blue font-medium mt-4" block>
      Logout
    </MButton>
  </div>
</template>

<style scoped>

</style>
