<script setup lang="ts">
interface Props {
  title: string
  addButtonLabel: string
}

defineProps<Props>()
defineEmits<{ (e: 'add'): void }>()
</script>

<template>
  <div class="repeatable-section rounded-lg border border-gray-200 p-4">
    <h3 class="text-lg font-medium text-secondary mb-3">{{ title }}</h3>
    <slot />
    <button
      type="button"
      class="mt-2 px-3 py-1.5 text-sm rounded border border-primary text-primary hover:bg-primary hover:text-white"
      @click="$emit('add')"
    >
      {{ addButtonLabel }}
    </button>
  </div>
</template>
