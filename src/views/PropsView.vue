<script setup lang="ts">
import { ref, type Ref } from 'vue';
import HasProp1 from '@/components/prop/HasProp1.vue'
import HasProp2 from '@/components/prop/HasProp2.vue'
import HasProp3 from '@/components/prop/HasProp3.vue'

  const num: Ref<number> = ref(0)

  const increase = () => {
    ++num.value
  }
</script>

<template>
  <div class="border">
    <div style="display: inline-block; width: 100%;">
      <h3 class="title text-green inline-block">This is Props Page</h3>
      <div class="chip blue bullet c-pointer" @click="increase">&#10506;</div>
      <div class="chip blue bullet c-pointer" @click="--num">&#10507;</div>
    </div>
    <div style="display: inline-block; width: 43%; margin-right: 6px">
      <HasProp1 
        title="title"
        :counter="num"
      />
      <HasProp2 
        :a="2"
        b="4"
        c="prop C"
        f="success"
      />
    </div>
    <div style="display: inline-block; width: 55%; margin-left: 6px;">
      <HasProp3 />
    </div>
  </div>
</template>