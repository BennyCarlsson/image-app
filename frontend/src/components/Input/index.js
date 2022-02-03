import React from 'react'
import { InputWrapper, Label, StyledInput } from './styles'

const Input = ({ onChange, value }) => {
  return (
    <InputWrapper>
      <Label htmlFor='filename'>Image name</Label>
      <StyledInput
        name='filename'
        id='filename'
        placeholder='Enter name...'
        type='text'
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  )
}

export default Input
