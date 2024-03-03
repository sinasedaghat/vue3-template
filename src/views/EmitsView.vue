<script setup lang="ts">
import { ref, toValue, type Ref } from 'vue'
import HasEmit1 from '@/components/emit/HasEmit1.vue'
import HasEmit2 from '@/components/emit/HasEmit2.vue'
  const emitClicked = (num: number, str: string) => {
    console.log('NUM from emitClicked() function in EmitsView emited from HasEmit1', num)
    console.log('STR from emitClicked() function in EmitsView emited from HasEmit1', str)
  }
  const valEmitRefTemplate: Ref<{num: number, str: string} | null> = ref(null)
  const emitRefTemplate = (val: {num: number, str: string}) => {
    console.log('VAL from emitRefTemplate() function in EmitsView emited from HasEmit1', val)
    valEmitRefTemplate.value = val
    console.log('valEmitRefTemplate from emitRefTemplate() function in EmitsView', valEmitRefTemplate.value)
  }
  const emitRefScript = (val:Ref<{num: number, str: string}> | {num: number, str: string}) => {
    console.log('VAL.value from emitRefScript() function in EmitsView emited from HasEmit1', toValue(val))
  }
</script>

<template>
  <div class="border">
    <h3 class="title text-green">This is Emits Page</h3>
    <div v-if="valEmitRefTemplate" class="chip blue bullet">val from emitRefTemplate EMIT: <b>{{ valEmitRefTemplate }}</b></div>
    <HasEmit1 
      @clicked="emitClicked"
      @emit-ref-template="emitRefTemplate"
      @emit-ref-script="emitRefScript"
    />
    <HasEmit2 />
  </div>
</template>
