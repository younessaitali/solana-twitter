<script setup lang="ts">
import { toRefs } from "vue";

const emit = defineEmits(["search", "update:modelValue"]);
const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
});

const { modelValue, placeholder, disabled } = toRefs(props);

const emitSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="relative border-b">
    <input
      type="text"
      class="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emitSearchInput"
      @keydown.enter="emit('search')"
    />
    <div
      class="absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2"
      :class="modelValue ? 'text-gray-700' : 'text-gray-400'"
    >
      <slot name="icon"></slot>
    </div>
    <div class="absolute right-0 inset-y-0 flex items-center pr-8">
      <button
        class="rounded-full px-4 py-1 font-semibold"
        :class="
          !disabled
            ? 'text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white'
            : 'text-gray-400 bg-gray-200 cursor-not-allowed'
        "
        :disabled="disabled"
        @click="emit('search')"
      >
        Search
      </button>
    </div>
  </div>
</template>
