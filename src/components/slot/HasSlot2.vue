<script setup lang="ts">
import { ref, type Ref } from 'vue';

  const items: Ref<any[]> = ref([])
  items.value = [
    { id: 0, title: 'Title 1', subtitle: 'This is Subtitle ONE', color: 'green' },
	  { id: 1, title: 'Title 2', subtitle: 'This is Subtitle Two', color: 'blue' }
  ]
</script>

<template>
  <div class="border">
    <h4 class="title">This is HasSlot1 component</h4>
    <slot />
    <div v-for="item in items" :key="item.id" class="border b-green">
      <div class="chip blue striated">
        ID from HasSlot2 ===> <b>{{ item.id }}</b>
      </div>
      <slot name="item" v-bind="item" />
    </div>
  </div>
</template>
