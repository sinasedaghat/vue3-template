<script setup lang="ts">
import HasProvideInject1 from '@/components/provide-inject/HasProvideInject1.vue'
import { provide, ref, type Ref } from 'vue';
  const provideData: Ref<string> = ref('provide string')
  provide('provideTest', provideData)
</script>

<template>
  <div class="border">
    <h3 class="title text-green">This is Provide / Inject Page</h3>
    <input type="text" v-model="provideData">
    <HasProvideInject1 v-model="provideData"/>
  </div>
</template>
