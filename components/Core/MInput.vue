<script lang="ts">
import {ref, onMounted, toRefs, watch, computed} from 'vue'
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
    className: {
      type: String,
      default: ''
    },
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const {ui} = useUI('input', toRef(props, 'className'))

    const input = ref<HTMLInputElement | null>(null)


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
      input,
      onInput,
      onChange
    }
  }
})
</script>

<template>
  <div class="wrapper-class">
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

<style scoped>
body {
}
</style>
