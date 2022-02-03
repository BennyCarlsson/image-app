import React, { useState } from 'react'
import './App.css'
import PreviewImage from './components/PreviewImage'
import Input from './components/Input'
import { saveFile } from './utils/db'
import Submit from './components/Submit'
import TopWrapper from './components/TopWrapper'
import InputFile from './components/InputFile'

function App() {
  const [name, setName] = useState('')
  const [file, setFile] = useState()

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveFile(file, name)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))

    setName('')
    setFile(undefined)
  }

  const disableSubmit = () => !name || !file

  return (
    <div className='App'>
      <form onSubmit={handleSubmit} className='Form'>
        <TopWrapper>
          <InputFile handleFile={handleFile} />
          {file && <PreviewImage src={URL.createObjectURL(file)} />}
        </TopWrapper>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Submit disabled={disableSubmit()} />
      </form>
    </div>
  )
}

export default App
