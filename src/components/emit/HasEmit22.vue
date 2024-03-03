<script setup lang="ts">
  // const emit = defineEmits<{
  //   (e: 'changeID', id: number): void
  //   (e: 'updateVAL', value: string): void
  // }>()

  const emit = defineEmits<{
    changeID: [id: number]
    updateVAL: [value: string]
}>()
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasEmit22 component</h5>
    <button class="link-button not-space" @click="$emit('changeID', 3)">CHANGEID</button>
    <!-- <button class="link-button not-space" @click="$emit('updateVAL', 2)">UPDATEVAL</button> ==> has error -->
    <button class="link-button not-space" @click="$emit('updateVAL', '2')">UPDATEVAL</button>
  </div>
</template>