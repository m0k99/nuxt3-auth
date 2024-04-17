<template>
  <div :class="ui.wrapperClass">
    <input
      ref="input"
      :id="id"
      :type="inputType"
      :name="name"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="className"
      :autocomplete="autocomplete"
      @input="onInput"
      @change="onChange"
    >
    <span v-if="leadingIcon || $slots.leading" class="absolute left-5 top-1/2 -translate-y-1/2">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <Icon :name="leadingIcon" size="20px" color="#9ca3af"/>
      </slot>
    </span>
    <span class="absolute md:right-8 right-5 top-1/2 -translate-y-1/2">
      <slot v-if="trailingIcon || $slots.trailing" name="trailing" :disabled="disabled" :loading="loading">
        <Icon :name="trailingIcon" size="20px" color="#9ca3af"/>
      </slot>
      <Icon v-else class="cursor-pointer" :name="passwordIcon" size="24px" color="#9ca3af" @click="togglePasswordType"/>
    </span>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent, computed} from 'vue'
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
    autocomplete: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const {ui} = useUI('input', inputConfig)
    const input = ref<HTMLInputElement | null>(null)
    const inputType = ref(props.type)
    const className = computed(() => {
      return twMerge(twJoin(
        ui.base,
        ui.dark,
        ui.rounded,
        ui.placeholder,
        ui.padding,
        ui.transition,
      ), props.inputClass)
    })

    const autoFocus = () => {
      if (props.autofocus) {
        input.value?.focus()
      }
    }
    const passwordIcon = computed(() => {
      if (props.type === 'password' && inputType.value === 'password') {
        return 'eva:eye-off-outline'
      } else if (props.type === 'password' && inputType.value === 'text') {
        return 'eva:eye-outline'
      } else {
        return ''
      }
    })
    const togglePasswordType = () => {
      inputType.value = inputType.value === 'password' ? 'text' : 'password'
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
      inputType,
      ui,
      className,
      input,
      passwordIcon,
      togglePasswordType,
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
