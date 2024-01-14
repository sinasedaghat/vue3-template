import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const ejectCount = computed(() => {
    return count.value
  })
  const doubleCount = computed(() => {
    console.log('call doubleCount computed', `count = ${count.value}`)
    return count.value * 2
  })

  function increment() {
    console.log('call increment function')
    count.value++
  }
  const suddenIncrease = (quantity: number) => {
    count.value += quantity 
  }
  const decrease = () => {
    console.log('call decrease function')
    count.value--
  }
  const suddenDecrease = (quantity: number) => {
    count.value -= (quantity * -1) 
  }

  const $reset = () => {  // In the Option Store, it does not need to be defined and it is there by default, but In Setup Stores, you need to create your own $reset() method:
    count.value = 0
  }
  return { 
    count, 
    ejectCount, doubleCount,
    increment, suddenIncrease, decrease, suddenDecrease, $reset 
  }
})
