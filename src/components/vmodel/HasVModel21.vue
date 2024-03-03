<script setup lang="ts">
  const model = defineModel()

  console.log('mode from HasVModel21.vue component', model.value)
</script>

<template>
  <div class="border b-pink">
    <h5 class="title">This is HasVModel21 component</h5>
    <p class="title">MODEL from HasVModel21: {{ model }}</p>
    <input type="text" v-model="model">
  </div>
</template>