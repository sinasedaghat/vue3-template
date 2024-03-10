<script setup lang="ts">
import { computed, reactive, ref, type Ref } from 'vue';

  const priceRef: Ref<string> = ref ('')
  const activeRef: Ref<boolean> = ref(false)
  const refValue: Ref<string> = ref('REF Value String')
  const reactiveValue: {value: string} = reactive({
    value: 'REACTIVE Value String'
  })

  const computedValue = computed<string>(() => 'COMPUTED Value String')
  const priceComputed = computed<string>({
    get() {
      return `$${priceRef.value}`
    },
    set(newValue: string) {
      priceRef.value = newValue.replace(/\$/g, "").toString()
    } 
  })

</script>

<template>
  <h4 class="title text-green">This is HomeView Page</h4>
  <div class="border">
    <div class="chip green bullet">
      refValue ===> <b>{{ refValue }}</b>
    </div>
  
    <div class="chip blue bullet">
      reactiveValue ===> <b>{{ reactiveValue }}</b>
    </div>
  </div>
  <div class="border">
    <div class="chip green bullet">
      computedValue ===> <b>{{ computedValue }}</b>
    </div>
    <br>
    <input type="text" v-model="priceComputed">
    <div class="chip green bullet">
      priceRef ===> <b>{{ priceRef }}</b>
    </div>
  </div>
  <div class="border">
    <input type="checkbox" v-model="activeRef">
    <br>
    <div class="chip blue bullet" v-show="activeRef">
     test condition v-show
    </div>
    <div class="chip blue bullet" v-if="activeRef">
     test condition v-if
    </div>
  </div>
</template>
