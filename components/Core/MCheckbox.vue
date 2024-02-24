<template>
  <div :class="ui.wrapperClass">
    <input
      :id="inputId"
      v-model="toggle"
      :name="name"
      :disabled="disabled"
      :required="required"
      type="checkbox"
      :class="className"
    />
    <div v-if="label || $slots.label">
      <label :for="inputId" :class="ui.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="ui.required">*</span>
      </label>
      <p v-if="help" :class="ui.help">
        {{ help }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from 'vue'
import {checkbox as checkboxUi} from "../../ui.config";
import {twJoin, twMerge} from "tailwind-merge";
import {useUI} from "~/composables/useUI";
import {randomId} from "~/utils/randomId";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: String,
      default: ''
    },
    help: {
      type: String,
      default: null
    },
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const {ui} = useUI('checkbox', checkboxUi)

    const className = computed(() => {
      return twMerge(twJoin(
        ui.base,
        ui.required,
        ui.rounded,
        ui.label
      ), props.inputClass)
    })

    const toggle = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
    })
    let inputId = ref('')
    onMounted(() => {
      inputId.value = props.id || randomId('checkbox')
    })
    return {
      toggle,
      ui,
      className,
      inputId
    }
  }
})
</script>


<style scoped>

</style>
