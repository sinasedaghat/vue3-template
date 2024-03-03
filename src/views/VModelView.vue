<script setup lang="ts">
import { ref, type Ref } from 'vue'
import HasVModel1 from '@/components/vmodel/HasVModel1.vue'
import HasVModel2 from '@/components/vmodel/HasVModel2.vue'
import HasVModel3 from '@/components/vmodel/HasVModel3.vue'

  const count: Ref<number> = ref(0) 
  const decrease = () => {
    --count.value
    console.log('model from decrease() function in VModelView', count.value)
  }
</script>

<template>
  <div class="border">
    <h3 class="title text-green">This is VModel Page</h3>
    <p class="title">count is: {{ count }} (VModelView.vue)</p>
    <div class="chip blue bullet c-pointer" @click="decrease">&#10507;</div>
    <HasVModel1 v-model="count" />
    <hr style="margin: 30px;">
    <HasVModel2 />
    <hr style="margin: 30px;">
    <HasVModel3 />
  </div>
</template>
