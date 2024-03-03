<script setup lang="ts">
import { ref, type Ref } from 'vue'
import HasVModel31 from '@/components/vmodel/HasVModel31.vue'
  const titleParent: Ref<string> = ref('titleParent text')
  const subtitleParent: Ref<string> = ref('subtitleParent text')
</script>

<template>
  <div class="border b-red">
    <h4 class="subtitle">This is HasVModel3 component</h4>
    <p class="subtotle">TITLE-PARENT from HasVModel2: {{ titleParent }}</p>
    <p class="subtotle">SUBTITLE-PARENT from HasVModel2: {{ subtitleParent }}</p>
    <button class="link-button not-space" @click="titleParent = 'title Change from parent'">CHANGE TITLE</button>
    <HasVModel31 
      v-model:title="titleParent"
      v-model:subtitle="subtitleParent"
    />
  </div>
</template>