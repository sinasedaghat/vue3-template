import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', () => {
  const info = ref({
    id: 4,
    name: 'information test',
    language: 'en',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    ip: '0.0.0.0'
  })
  const information = computed(() => {
    console.log('call information computed', info.value)
    return info.value
  })
  function overallInfo(obj: any) {
    console.log('call overall Info function', obj)
    info.value = { ...info, ...obj}
  }
  function partInfo(key?: string, value?: string) {
    console.log('call part Info function', key, value)
    // info.value = { ...info, ...obj}
  }
  function printInfo() {
    console.log('call print Info function', JSON.stringify(info.value))
    // info.value = { ...info, ...obj}
  }
  return { info, information, overallInfo, partInfo, printInfo }
})
