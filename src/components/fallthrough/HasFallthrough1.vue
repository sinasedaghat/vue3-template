<script setup lang="ts">
import HasFallthrough11 from '@/components/fallthrough/HasFallthrough11.vue';
import HasFallthrough12 from '@/components/fallthrough/HasFallthrough12.vue';

  defineOptions({
    inheritAttrs: false
  })
</script>

<template>
  <!--  class="border b-red" -->
  <div>
    <h4 class="title">This is HasFallthrough1 component</h4>
    <p class="subtitle">class of root DIV added from parent component (FallthroughView)</p>
    {{  $attrs.class }}
    <!-- <HasFallthrough12 :class="$attrs.class" @click="$attrs.onClick"/> -->
  </div>
  <HasFallthrough11 :class="$attrs.class" @click="$attrs.onClick"/>
  <HasFallthrough12 :class="$attrs.class" @click="$attrs.onClick" />
</template>