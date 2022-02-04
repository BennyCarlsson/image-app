import React from 'react'
import { render, screen } from '@testing-library/react'
import PreviewImage from '.'

describe('<PreviewImage />', () => {
  const src = 'test.jpg'

  it('should match snapshot', () => {
    const { asFragment } = render(<PreviewImage src={src} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<PreviewImage src={src} />)
    expect(screen).toBeTruthy()
  })

  it('should render img with src', () => {
    render(<PreviewImage src={src} />)
    expect(screen.getByAltText('Preview')).toHaveAttribute('src', src)
  })
})
