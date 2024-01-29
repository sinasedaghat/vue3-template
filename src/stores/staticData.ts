import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import sample from '@/services/sample'

export const useStaticData = defineStore('staticData', () => {
  const statics: Ref<any> = ref(null)

  const allStatics = computed(() => {
    if(!statics.value) {
      sample.pric().then((response: any) => {
        setAllStatics(response)
      })
    }
    return statics.value
  })

  function setAllStatics(data: any) {
    statics.value = data
  }

  return { 
    statics,
    allStatics,
    setAllStatics,
  }
})
