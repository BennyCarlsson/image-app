import React from 'react'
import { render, screen } from '@testing-library/react'
import Submit from '.'

describe('<Submit />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Submit />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<Submit />)
    expect(screen).toBeTruthy()
  })

  it('should render button not disabled', () => {
    render(<Submit />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).not.toBeDisabled()
  })

  it('should render button disabled', () => {
    render(<Submit disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
