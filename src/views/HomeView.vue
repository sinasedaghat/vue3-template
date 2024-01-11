<script setup lang="ts">
  import { ref } from 'vue';
  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia'
  import type { Ref } from 'vue';

  const counter = useCounterStore()
  const { count: x, doubleCount: y } = storeToRefs(counter)
  const { count, doubleCount } = storeToRefs(counter)
  const z: Ref<number> = ref(0)
  z.value = doubleCount.value / 2

  const increase_count = () => {
    counter.increment()
    console.log('count ==> ', count.value)
    console.log('x ==> ', x.value)
    console.log('y ==> ', y.value, y.value / 2)
    console.log('z ==> ', z.value)
  }
</script>

<template>
  <h3 class="title">This is '/' route bind to HomeView component use stores/counter import localy</h3>
  <!-- use useCounterStore -->
  <div>
    <!-- use counter.doubleCount -->
    <div class="chip-green">
      <div class="striated">
        doubleCount from useCounterStore ==> {{ counter.doubleCount }} <small>(counte &times; 2)</small>
      </div>
    </div>
  </div>
  <!-- use local variable -->
  <div>
    <!-- use count -->
    <div class="chip-green">
      <div class="bullet">
        COUNT from local variable ==> {{ count }}
      </div>
    </div>
    <!-- use x -->
    <div class="chip-green">
      <div class="bullet">
        X from local variable bind to count ==> {{ x }}
      </div>
    </div>
    <!-- use y -->
    <div class="chip-green">
      <div class="bullet">
        Y from local variable bind to doubleCount ==> {{ y / 2 }} <small>(y &divide; 2)</small>
      </div>
    </div>
    <br>
    <!-- use z -->
    <div class="chip-green">
      <div class="bullet">
        Z from local variable bind to doubleCount / 2 ==> {{ z }} <small><b>
        [ does not work right ]</b></small> <small>
        (the initial value is set when the component is created)</small>
      </div>
    </div>
  </div>
  <!-- buttons -->
  <div>
    <!-- increase_count call -->
    <button @click="increase_count">
      increase count use increase_count() local function
    </button>
    <!-- counter.increment call -->
    <button @click="counter.increment()">
      increase count use increment() useCounterStore
    </button>
  </div>
</template>