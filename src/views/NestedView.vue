<script setup lang="ts">
import { usePrint } from '@/composables/printer';

const { printCosole, printString } = usePrint()

</script>

<template>
  <h2 class="title">This is '/nested' route bind to NestedView component</h2>

  <!-- printString call -->
  <div class="chip-green">
    <div class="striated">
      <span class="subtitle">{{ printString('x+y') }}</span>
    </div>
  </div>

  <!-- printConsole call -->
  <div>
    <button @click="printCosole('x+y')">
      console log value of 'X + Y' from sessionStorage
    </button>
  </div>
</template>
