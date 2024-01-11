import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => {
    console.log('call doubleCount computed', `count = ${count.value}`)
    return count.value * 2
  })
  function increment() {
    console.log('call increment function')
    count.value++
  }
  const decrease = () => {
    console.log('call decrease function')
    count.value--
  } 
  return { count, doubleCount, increment, decrease }
})
