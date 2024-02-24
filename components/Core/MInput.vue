<template>
  <div :class="ui.wrapperClass">
    <input
      ref="input"
      :id="id"
      :type="type"
      :name="name"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="className"
      @input="onInput"
      @change="onChange"
    >
    <span v-if="leadingIcon || $slots.leading" class="absolute left-5 top-1/2 -translate-y-1/2">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <Icon :name="leadingIcon" size="20px" color="#9ca3af"/>
      </slot>
    </span>
    <span v-if="trailingIcon || $slots.trailing" class="absolute md:right-8 right-5 top-1/2 -translate-y-1/2">
      <slot name="trailing" :disabled="disabled" :loading="loading">
        <Icon :name="trailingIcon" size="20px" color="#9ca3af"/>
      </slot>
    </span>
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
      default: 500
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    leadingIcon: {
      type: String,
      required: false,
      default: null
    },
    trailingIcon: {
      type: String,
      required: false,
      default: null
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
        ui.transition
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
