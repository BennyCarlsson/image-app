import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

describe('<Input />', () => {
  const value = 'value text'
  const mockOnChange = jest.fn()

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Input onChange={mockOnChange} value={value} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<Input onChange={mockOnChange} value={value} />)
    expect(screen).toBeTruthy()
  })

  it('should render input with value', () => {
    render(<Input onChange={mockOnChange} value={value} />)
    expect(screen.getByRole('textbox')).toHaveValue(value)
  })

  it('should call onChange', () => {
    render(<Input onChange={mockOnChange} value={value} />)
    expect(mockOnChange).not.toHaveBeenCalled()
    userEvent.type(screen.getByRole('textbox'), 'Hello World')
    expect(mockOnChange).toHaveBeenCalledTimes(11)
  })
})
