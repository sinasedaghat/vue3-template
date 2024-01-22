export function useSessionStorage() {
  const saveData = (key: string, value: string) => {
    sessionStorage.setItem(key, value)
  }

  const getData = (key: string) => {
    return sessionStorage.getItem(key)
  }

  const removeData = (key: string) => {
    sessionStorage.removeItem(key)
  }

  const clearData = () => {
    sessionStorage.clear();
  }

  return { saveData, getData , removeData, clearData }
}