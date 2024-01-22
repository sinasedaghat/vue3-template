<script setup lang="ts">
import { useMouse } from '@/composables/mouse'
import { computed, ref } from 'vue';
  const { x, y } = useMouse()
  const xy = computed(() => x.value + y.value)
</script>

<template>
  <main>
    <h2 class="title">This is '/' route bind to HomeView component</h2>
    <p class="subtitle">Mouse position is at: {{ x }}, {{ y }}</p>
    <div class="chip-green">
      <div class="bullet">
        X + Y = {{ xy }}
      </div>
    </div>
  </main>
</template>
