<script setup lang="ts">
import VueSkeletonLoader from 'vue3-skeleton-loader';
import 'vue3-skeleton-loader/dist/style.css';

import {useAuthStore} from "~/stores/useAuthStore";
import {computed} from "vue";

const auth = useAuthStore()
const user = computed(() => auth.user)
const pending = computed(() => auth.pending)
const userJson = JSON.stringify(user.value, null, 4)
async function handleLogout() {
  await auth.logout()
}
</script>

<template>
  <div class="px-3 py-5 overflow-hidden">
    <VueSkeletonLoader v-if="pending" type="image"></VueSkeletonLoader>
    <div v-else class="rounded-xl overflow-hidden">
        <highlightjs
          autodetect
          language="json"
          :code="userJson"
        />
    </div>
    <MButton @click="handleLogout" class="w-full h-12 text-white bg-medium-blue font-medium mt-4 md:rounded-xl transition-all duration-500 ease-in-out" block>
      Logout
    </MButton>
  </div>
</template>

<style scoped>

</style>
