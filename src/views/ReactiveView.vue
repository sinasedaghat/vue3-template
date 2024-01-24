<script setup lang="ts">
import { useReactivePrint } from '@/composables/reactive_printer';
import { ref } from 'vue';
const val = ref('initial value')
const { printReactiveCosole, printCosole, printReactiveString, printString } = useReactivePrint(val)
// const { printReactiveCosole, printCosole, printReactiveString, printString } = useReactivePrint(val.value)

const randomString = () => {
  let counter = 0;
  val.value = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  while (counter < 10) {
    val.value += characters.charAt(Math.floor(Math.random() * 10));
    counter += 1;
  }

  
}
</script>

<template>
  <h2 class="title">This is '/reactive' route bind to ReactiveView component</h2>

  <div class="row">
    <!-- input -->
    <div class="item">
      <input class="input-text-field" v-model="val">
    </div>
    <!-- reactive console button -->
    <div class="item">
      <button style="margin:4px 10px;" @click="printReactiveCosole()">
        console.log reactive
      </button>
    </div>
    <!-- not reactive console button -->
    <div class="item">
      <button style="margin:4px 10px;" @click="printCosole()">
        console.log NOT reactive
      </button>
    </div>
  </div>

  <div class="row">
    <div class="item">
      <button style="margin:4px 10px;" @click="randomString">
        change val random
      </button>
    </div>
  </div>

  <div>
    <p class="subtitle" v-html="printReactiveString(`${val} reactive message`)" />
    <p class="subtitle" v-html="printString(`${val} NOT reactive message`)" />
  </div>
</template>
