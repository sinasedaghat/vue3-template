import { useSessionStorage } from "./session_storage"

export function usePrint() {
  const { getData } = useSessionStorage()

  const printCosole = (key: string) => {
    console.log(getData(key))
  }

  const printString = (key: string): string => {
    return `value of ${key} in sessionStorage is ${getData(key)}`
  }

  return { printCosole, printString }
}