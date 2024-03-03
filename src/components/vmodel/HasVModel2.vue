<script setup lang="ts">
import HasVModel21 from '@/components/vmodel/HasVModel21.vue'
import { ref, type Ref } from 'vue';
  const msg: Ref<string> = ref('default msg')
</script>

<template>
  <div class="border b-red">
    <h4 class="subtitle">This is HasVModel2 component</h4>
    <p class="subtotle">MSG from HasVModel2: {{ msg }}</p>
    <HasVModel21 v-model="msg" />
  </div>
</template>