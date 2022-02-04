import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputFile from '.'

describe('<InputFile />', () => {
  const mockHandleFile = jest.fn()
  const file = new File(['test'], 'test.jpeg', {
    type: 'image/jpeg',
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<InputFile handleFile={mockHandleFile} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<InputFile handleFile={mockHandleFile} />)
    expect(screen).toBeTruthy()
  })

  it('should upload input file', () => {
    render(<InputFile handleFile={mockHandleFile} />)
    const input = screen.getByLabelText(/Select a file or drag here/i)
    userEvent.upload(input, file)
    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)
  })

  it('should call handleFile', () => {
    render(<InputFile handleFile={mockHandleFile} />)
    const input = screen.getByLabelText(/Select a file or drag here/i)
    expect(mockHandleFile).not.toBeCalled()
    userEvent.upload(input, file)
    expect(mockHandleFile).toBeCalledTimes(1)
  })
})
