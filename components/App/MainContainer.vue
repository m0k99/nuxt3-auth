<template>
  <div>
    <div class="container-background w-dvw h-dvh fixed -z-20"></div>
    <div class="w-dvw h-dvh fixed">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-background {
  background: #536976;
  background: -webkit-linear-gradient(#292E49, #536976);
  background: linear-gradient(#292E49, #536976);
}
</style>
