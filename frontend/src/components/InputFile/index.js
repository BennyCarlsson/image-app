import React from 'react'
import { Button, Input, Label, Text } from './styles'

const InputFile = ({ handleFile }) => {
  return (
    <Label>
      <Text> Select a file or drag here</Text>
      <Input
        type='file'
        // accept='image/jpeg, image/png'
        onChange={(e) => {
          handleFile(e)
        }}
      />
      <Button>Upload Image</Button>
    </Label>
  )
}

export default InputFile
