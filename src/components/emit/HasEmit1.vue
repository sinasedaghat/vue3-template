<script setup lang="ts">
import { ref, type Ref } from 'vue';
  const val:Ref<{
    num: number
    str: string
  }> = ref({
    num: 20,
    str: 'String'
  })

  const emit = defineEmits(['clicked', 'emitRefTemplate', 'emitRefScript'])
  const emitRefScript = () => {
    emit('emitRefScript', val)
  }
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasEmit1 component</h4>
    <button class="link-button not-space" @click="$emit('clicked', 1, 'test')">CLICKED</button>
    <button class="link-button not-space" @click="$emit('emitRefTemplate', val)">EMIT REF TEMPLATE</button>
    <button class="link-button not-space" @click="emitRefScript">EMIT REF SCRIPT</button>
  </div>
</template>