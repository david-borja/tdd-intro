export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter must be a number')
  if (Number.isNaN(number)) throw new Error('parameter must be a number')
  if (number === 0) return 0

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }

  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output || number
}
