<template>
  <div>
    <div :class="[classMode] + ' w-dvw h-dvh fixed -z-20'"></div>
    <div class="w-dvw h-dvh fixed">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {computed} from "vue";

const colorMode = useColorMode()
const classMode = computed(() => colorMode.preference === 'dark' ? 'container-background-dark' : 'container-background')
</script>
<style lang="scss" scoped>
.container-background {
  /* Light mode gradient */
  background: #536976;
  background: -webkit-linear-gradient(#292E49, #536976);
  background: linear-gradient(#292E49, #536976);
}

/* Define dark mode variant */
.container-background-dark {
  /* Dark mode gradient */
  background: #141E30;
  background: -webkit-linear-gradient(#243B55, #141E30);
  background: linear-gradient(#243B55, #141E30);
}
</style>
