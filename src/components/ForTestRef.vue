<script setup lang="ts">
import { ref, type Ref } from 'vue';
  const testVariable: Ref<string> = ref('testVariable in ForTestRef.vue Component')

  const testFunction = (str?: string) => {
    console.log('called testFunction() Function from ForTestRef.vue Component', str)
  }
  defineExpose({
    testVariable,
    testFunction
  })
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is ForTestRef.vue component</h4>
    <span class="subtitle">{{ testVariable }}</span>
    <button class="link-button not-space" @click="testFunction('in component')">CLICKED</button>
  </div>
</template>