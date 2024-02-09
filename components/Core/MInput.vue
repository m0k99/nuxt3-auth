<script lang="ts">
import {ref, onMounted} from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
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
  <div>
    <input
      ref="input"
      :id="id"
      :name="name"
      :value="modelValue"
      :type="type"
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
