<script setup lang="ts">
import type { ModelRef, Ref } from 'vue';
  // const model: ModelRef<number> = defineModel()
  const model: any = defineModel()
  const increase = () => {
    model.value += 1
    console.log('model from increase() function in HasVModel1', model.value)
  }
</script>

<template>
  <div class="border b-red">
    <h4 class="subtitle">This is HasVModel1 component</h4>
    <p class="title">parent bound v-model is: {{ model }} (HasVModel1.vue)</p>
    <div class="chip blue bullet c-pointer" @click="increase">&#10506;</div>
  </div>
</template>