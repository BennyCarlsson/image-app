import React from 'react'
import { render, screen } from '@testing-library/react'
import TopWrapper from '.'

describe('<TopWrapper />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<TopWrapper />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<TopWrapper />)
    expect(screen).toBeTruthy()
  })

  it('should render child', () => {
    render(
      <TopWrapper>
        <p>I'm TopWrapper child</p>
      </TopWrapper>
    )
    expect(screen.getByText("I'm TopWrapper child")).toBeInTheDocument()
  })
})
