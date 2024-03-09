<script setup lang="ts">
import HasProvideInject11 from '@/components/provide-inject/HasProvideInject11.vue'

  const model = defineModel()
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasProvideInject1 component</h4>
    <input type="text" v-model="model">
    <HasProvideInject11 />
  </div>
</template>