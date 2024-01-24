<script setup lang="ts">
import { onBeforeUnmount, computed, ref } from 'vue';
import { useMouse } from '@/composables/mouse'
import { useSessionStorage } from '@/composables/session_storage';
  const { saveData } =  useSessionStorage()
  const { x, y } = useMouse()
  const xy = computed(() => x.value + y.value)

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount from HomeView Component', xy.value)
    saveData('x+y', xy.value.toString())
  })
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
