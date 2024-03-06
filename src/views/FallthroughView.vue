<script setup lang="ts">
import HasFallthrough1 from '@/components/fallthrough/HasFallthrough1.vue'
import HasFallthrough2 from '@/components/fallthrough/HasFallthrough2.vue'

  const clicked = () => {
    console.log('clicked')
  }
</script>

<template>
  <div class="border">
    <h3 class="title text-green">This is Fallthrough Page</h3>
    <HasFallthrough1 class="border b-red" @click="clicked" />
    <HasFallthrough2 class="border b-pink" id="HasFallthrough2" @click="clicked" />
  </div>
</template>
