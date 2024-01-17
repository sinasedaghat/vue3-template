const upperLetter = (str: string): string => {
  return str.split('_').map(letter => `${letter.slice(0, 1).toUpperCase()}${letter.slice(1).toLowerCase()}`).join(' ')
}

export default upperLetter