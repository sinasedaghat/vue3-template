import { persianNumber } from '@/data/persian_number'

const toFaNumber = (input: string | number): string => {
  return input.toString().replace(/\d/g, x => persianNumber[+x])
}

const toEnNumber = (input: string): string => {
  return input.toString().replace(/[۰-۹]/g, x => persianNumber[x as keyof typeof persianNumber].toString())
}

export {
  toFaNumber,
  toEnNumber
}