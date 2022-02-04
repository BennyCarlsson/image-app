import React from 'react'
import { StyledInput } from './styles'

const Submit = ({ disabled = false }) => {
  return <StyledInput type='submit' value='Submit' disabled={disabled} />
}

export default Submit
