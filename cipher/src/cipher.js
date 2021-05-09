const CCLMI = 97 // char code lowercase min
const CCLMA = 122 // char code lowercase max
const CCUMA = 65 // char code uppercase min
const CCUMI = 90 // char code uppercase max
const EA = 26 // english alphabet

const uppercaseLetters = (char) => char >= CCUMA && char <= CCUMI
const lowercaseLetters = (char) => char >= CCLMI && char <= CCLMA
const validCipherLetters = (char) => char.match(/[A-Za-z]/)

const cipher = (input, shift) => {
  let output = ''

  if (shift < 0) {
    shift = (shift % EA) + EA
  }

  input.split('').forEach((char) => {
    if (validCipherLetters(char)) {
      const code = char.charCodeAt(0)
      let coded
      const uppercaseShift = code - CCUMA + shift
      const lowercaseShift = code - CCLMI + shift

      if (uppercaseLetters(code)) {
        coded = (uppercaseShift % EA) + CCUMA
      } else if (lowercaseLetters(code)) {
        coded = (lowercaseShift % EA) + CCLMI
      }

      output += String.fromCharCode(coded)
    } else {
      output += char
    }
  })

  return output
}

module.exports = cipher
