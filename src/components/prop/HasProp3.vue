<script setup lang="ts">
import HasProp31 from '@/components/prop/HasProp31.vue'
import HasProp32 from '@/components/prop/HasProp32.vue'
</script>

<template>
  <div class="border b-red">
    <h4 class="title">This is HasProp3 component</h4>
    <p class="subtitle">this component has props definition with generics</p>

    <HasProp31 
      propA="propA Value"
    />

    <HasProp32
      msg="msg Value"
    />
  </div>
</template>