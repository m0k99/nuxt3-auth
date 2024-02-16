<template>
  <div :class="ui.wrapperClass">
    <input
      ref="input"
      :id="id"
      :name="name"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="className"
      @input="onInput"
      @change="onChange"
    >
  </div>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent} from 'vue'
import {input as inputConfig} from "../../ui.config";
import {twJoin, twMerge} from "tailwind-merge";
import {useUI} from "~/composables/useUI";

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },
    autofocusDelay: {
      type: Number,
      required: false,
      default: 100
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: ''
    },
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const {ui} = useUI('input', inputConfig)
    const input = ref<HTMLInputElement | null>(null)
    const className = computed(() => {
      return twMerge(twJoin(
        ui.base,
        ui.rounded,
        ui.placeholder,
        ui.padding,
      ), props.inputClass)
    })
    const autoFocus = () => {
      if (props.autofocus) {
        input.value?.focus()
      }
    }

    const onInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
    }

    const onChange = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
    }

    onMounted(() => {
      setTimeout(() => {
        autoFocus()
      }, props.autofocusDelay)
    })

    return {
      ui,
      className,
      input,
      onInput,
      onChange
    }
  }
})
</script>

<style scoped>
body {
}
</style>
