<script setup lang="ts">
// defineOptions({
//   inheritAttrs: false
// })
</script>

<template>
  <!-- <div> -->
  <div class="border b-pink">
    <div v-bind="$attrs">
      <h5 class="title text-green">This is HasFallthrough11 component</h5>
      <p class="title">class of root DIV added from parent component (HasFallthrough1)</p>
    </div>
  </div>
</template>