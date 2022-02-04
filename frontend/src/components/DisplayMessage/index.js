import React from 'react'
import { DisplayMessageWrapper } from './styles'

const DisplayMessage = ({ message }) => {
  return (
    <DisplayMessageWrapper displayMessage={!!message} data-testid='message'>
      {message}
    </DisplayMessageWrapper>
  )
}

export default DisplayMessage
