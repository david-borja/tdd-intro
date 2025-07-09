import { useState } from 'react'
import { evaluate } from 'mathjs'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
export const EQUAL_SIGN = '='
export const operators = ['+', '-', '*', '/']

export const Calculator = () => {
  const [value, setValue] = useState('')
  const createHandleClick = (buttonValue) => () =>
    setValue(value.concat(buttonValue))

  const createHandleEqualClick = (value) => () =>
    setValue(evaluate(value).toString())

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map((number) => (
              <button onClick={createHandleClick(number)} key={number}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {operators.map((operator) => (
          <button onClick={createHandleClick(operator)} key={operator}>
            {operator}
          </button>
        ))}
        <button onClick={createHandleEqualClick(value)}>{EQUAL_SIGN}</button>
      </div>
    </section>
  )
}
