// https://vuejs.org/guide/reusability/composables.html#accepting-reactive-state
import { watchEffect, toValue, type Ref } from 'vue'

export function useReactivePrint(str: Ref<string> | string) {
  const printReactiveCosole = () => {
    console.log(`reactiv data ===> ${toValue(str)}`)
  }

  const printCosole = () => {
    console.log(`NOT reactiv data ===> ${str}`)
  }

  const printReactiveString = (message: string): string => {
    return `${message} <b>${toValue(str)}</b> <small>reactiv data</small>`
  }

  const printString = (message: string): string => {
    return `${message} <b>${str}</b> <small>NOT reactiv data</small>`
  }

  watchEffect(() => {
    console.log('watchEffect')
    printReactiveCosole
    printReactiveString
  })

  return {
    printReactiveCosole,
    printCosole,
    printReactiveString,
    printString
  }
}