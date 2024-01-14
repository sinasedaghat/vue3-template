import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useCounterStore } from "./counter"

export const useProCounterStore = defineStore('proCounter', () => {
  const counter = useCounterStore()
  const count = ref('')
  
  const printCount = computed(() => count.value)
  
  const initializationCount = () => {
    // count.value = `The counter is ${counter.doubleCount / 2}` // or
    count.value = `The counter is ${counter.ejectCount}`
  }
  const quantificationAdaptor = (quantity: number) => {
    if(quantity > 0) counter.suddenIncrease(quantity)
    else counter.suddenDecrease(quantity)
  }
  const quantification = (quantity: number) => {
    quantificationAdaptor(quantity)
    initializationCount()
  }

  return { 
    counter, // return counter from useCounterStore statemanagement not recommended
    count, 
    printCount,
    initializationCount, quantification 
  }
})
