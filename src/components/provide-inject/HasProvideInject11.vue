<script setup lang="ts">
import HasProvideInject111 from '@/components/provide-inject/HasProvideInject111.vue'
import { inject } from 'vue';

  const mainMessage = inject('mainMessage') as string
  console.log('mainMessage in HasProvideInject11 component', mainMessage)
</script>

<template>
  <div class="border b-pink">
    <h5 class="title text-green">This is HasProvideInject11 component</h5>
    <div class="chip green bullet text-blue">
      mainMessage from main.ts File ===> <b>{{ mainMessage }}</b>
    </div>
    <HasProvideInject111 />
  </div>
</template>