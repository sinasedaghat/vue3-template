<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore()
  // const buttonColor = '#42b883'
  // const buttonColor = 'seagreen'
  // const 
</script>

<template>
  <h3 class="title">This is '/about' route bind to AboutView component use stores/counter import localy</h3>
  <!-- use counter.doubleCount -->
  <div>
    <div class="chip blue striated">
      doubleCount from useCounterStore ==> {{ counter.doubleCount }} <small>(counte &times; 2)</small>
    </div>
  </div>
  <!-- use counter.doubleCount / 2 -->
  <div>
    <div class="chip blue bullet">
      count from useCounterStore ==> {{ counter.doubleCount /2 }}
    </div>
  </div>
  <!-- buttons -->
  <div>
    <!-- counter.increment call -->
    <button class="button" @click="counter.decrease()">
      increase count use increment() useCounterStore
    </button>

    <!-- counter.$reset() call -->
    <button class="button" @click="counter.$reset()">
      reset useCounterStore statemanagement use $reset() useCounterStore
    </button>
  </div>
</template>

<style scoped lang="scss">
  $button-color: #42b883;
  .button {
    border: 2px solid  $button-color;
    // border: 2px solid  var(--button-color);
    border-radius: 5px;
    background-color: $button-color;
    // background-color: var(--button-color);
    color: white;
    margin: 50px 10px;
    padding: 5px 9px;
    &:hover {
      cursor: pointer;
    }
  }
</style>