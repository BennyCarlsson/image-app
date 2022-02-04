import React, { useState } from 'react'
import './App.css'
import PreviewImage from './components/PreviewImage'
import Input from './components/Input'
import { saveFile } from './utils/db'
import Submit from './components/Submit'
import TopWrapper from './components/TopWrapper'
import InputFile from './components/InputFile'
import DisplayMessage from './components/DisplayMessage'

function App() {
  const [name, setName] = useState('')
  const [file, setFile] = useState()
  const [message, setMessage] = useState('')
  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('...')
    saveFile(file, name)
      .then(() => setMessage('Success!'))
      .catch(() => setMessage('Something went wrong :/'))

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
        <DisplayMessage message={message} />
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
