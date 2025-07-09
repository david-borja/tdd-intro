import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw error if no number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrowError()
  })

  it('should throw a specific error if no number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrowError('parameter must be a number')
  })

  it('should throw a specific error if NaN is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrowError('parameter must be a number')
  })

  it('should return 0 if number provided is 0', () => {
    expect(fizzbuzz(0)).toBe(0)
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // it('should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })

  it('should return "woff" if number provided is 7', () => {
    expect(fizzbuzz(7)).toBe('woff')
  })

  it('should return "fizzwoff" if number provided is 21', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
  })
})
