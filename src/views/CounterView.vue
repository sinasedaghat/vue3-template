<script setup lang="ts">
  import { useProCounterStore } from '@/stores/proCounter'
  import { ref, onMounted, type Ref } from 'vue';
  const proCounter = useProCounterStore()

  const quantity: Ref<number> = ref(0)

  proCounter.initializationCount()
  const quantification = () => {
    console.log('quantity', quantity.value)
    proCounter.quantification(quantity.value)
  }







  console.log('before onMounted /counter route')
  onMounted(() => {
    console.log('in onMounted /counter route')
  })
  console.log('after onMounted /counter route')
  console.log('count variable in usecounterStore statemanagement from useProCounterStore statemanagement', proCounter.counter.count)
</script>

<template>
  <h2 class="title">This is '/counter' route bind to CounterView</h2>

  <!-- proCounter.printCount -->
  <div>
    <div class="chip-green">
      <div class="bullet">
        {{ proCounter.printCount }}
      </div>
    </div>
  </div>

  <div class="row">
    <!-- input -->
    <div class="item">
      <input class="input-text-field" type="number" v-model="quantity">
    </div>
    <!-- button -->
    <div class="item">
      <button style="margin: 4px 10px;" @click="quantification">
        quantification
      </button>
    </div>
  </div>





</template>