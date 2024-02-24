<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="className"
  >
    <slot v-if="!loading"></slot>
    <icon v-else name="svg-spinners:6-dots-scale"></icon>
  </button>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {button as buttonConfig} from "../../ui.config";
import {twJoin, twMerge} from "tailwind-merge";
import {useUI} from "~/composables/useUI";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const {ui} = useUI('button', buttonConfig)
    const className = computed(() => {
      return twMerge(twJoin(
        ui.base,
        ui.rounded,
        props.block ? ui.block : ui.inline,
      ))
    })
    return {
      className
    }
  }
})
</script>
<style scoped>

</style>
