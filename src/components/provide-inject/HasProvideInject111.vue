<script setup lang="ts">
import { inject, ref, toValue, type Ref } from 'vue';

const injectData = inject('provideTest') as string | Ref<string>

console.log('injectData in HasProvideInject111 component', toValue(injectData))
</script>

<template>
  <div class="border b-blue">
    <h6 class="title">This is HasProvideInject111 component</h6>
    <div class="chip blue bullet text-green">
      injectData from ProvideInjectView.vue Component ===> <b>{{ injectData }}</b>
    </div>
  </div>
</template>