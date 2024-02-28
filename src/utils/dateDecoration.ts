import { toFaNumber } from "./persianNumber"

const standardLocalDate = (date: Date, fa?: boolean) => {
  const returnDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  return fa ? toFaNumber(returnDate) : returnDate
}

const localTime = (date: Date, fa?: boolean) => {
  const returnDate = date.toLocaleTimeString().split(' ').reduce((newTime, section) => {
    return newTime += section.match(':') ? section.slice(0, 5) : `&nbsp;<small>${section}</small>` 
  }, '')
  return fa ? toFaNumber(returnDate) : returnDate
}

export {
  standardLocalDate,
  localTime
}