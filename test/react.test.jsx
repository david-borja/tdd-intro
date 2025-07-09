import { render, screen, cleanup, fireEvent } from '@testing-library/react' // en lugar de fireEvent, podríamos usar userEvent de @testing-library/user-event
import { afterEach, describe, expect, it } from 'vitest'
import { Calculator, EQUAL_SIGN, operators } from '../src/Calculator'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('Calculator', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operators', () => {
    render(<Calculator />)
    operators.forEach((operator) => {
      screen.getByText(operator)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  // si tuviéramos un montón de inputs, podríamos ponerle un data attribute
  // o buscanr el formulario como elemento padre y a partir de ahí buscar el name
  // el rol de un input es textbox por defecto
  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)
    const equalSign = screen.getByText(EQUAL_SIGN)
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })

  it('should be able to do one operation after another', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)
    const equalSign = screen.getByText(EQUAL_SIGN)
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')

    const times = screen.getByText('*')
    fireEvent.click(times)

    const three = screen.getByText('3')
    fireEvent.click(three)
    fireEvent.click(equalSign)
    expect(input.value).toBe('6')
  })
})
