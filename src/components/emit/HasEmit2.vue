<script setup lang="ts">
import HasEmit21 from '@/components/emit/HasEmit21.vue'
import HasEmit22 from '@/components/emit/HasEmit22.vue'

  const submitFunc = (payload: { email: string, password: string }) => {
    console.log('payload from submitFunc() function in HasEmit2.vue emited from HasEmit21', payload)
  }

  const changeID = (id: number) => {
    console.log('ID from changeID() function in HasEmit2.vue emited from HasEmit22', id)
  }

  const updateVAL = (val: string) => {
    console.log('VAL from updateVAL() function in HasEmit2.vue emited from HasEmit22', val)
  }
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasEmit2 component</h4>
    <HasEmit21 
      @submit="submitFunc"
    />

    <HasEmit22 
      @changeID="changeID"
      @updateVAL="updateVAL"
    />
  </div>
</template>