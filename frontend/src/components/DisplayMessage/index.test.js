import React from 'react'
import { render, screen } from '@testing-library/react'
import DisplayMessage from '.'

describe('<DisplayMessage />', () => {
  const message = 'message text'

  it('should match snapshot', () => {
    const { asFragment } = render(<DisplayMessage message={message} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<DisplayMessage message={message} />)
    expect(screen).toBeTruthy()
  })

  it('should render message', () => {
    render(<DisplayMessage message={message} />)
    expect(screen.getByText(message)).toBeInTheDocument()
  })

  it('should render have 0 opacity if no message prop', () => {
    render(<DisplayMessage />)
    expect(screen.getByTestId('message')).toHaveStyle({
      opacity: 0,
    })
  })

  it('should render have 1 opacity if message prop', () => {
    render(<DisplayMessage message={message} />)
    expect(screen.getByText(message)).toHaveStyle({ opacity: 1 })
  })
})
