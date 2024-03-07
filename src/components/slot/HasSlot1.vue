<script setup lang="ts">
import { ref, type Ref } from 'vue';
  const text: Ref<string> = ref('text from HasSlot1 component pass from slot (Scoped Slots)')
  const id: Ref<number> = ref(100)
</script>

<template>
  <div class="border b-red">
    <slot name="top-slot">
      <p class="subtitle">this is top-slot content from component itself</p>
    </slot>
    <slot textDefault="text" idDefault="29">
      <h4 class="title">This is HasSlot1 component</h4>
    </slot>
    <slot name="bottom-slot">
      <p class="subtitle">this is bottom-slot content from component itself</p>
    </slot>
    <slot name="data-slot" :text="text" :id="id"></slot>
  </div>
</template>