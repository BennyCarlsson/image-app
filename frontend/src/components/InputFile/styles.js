import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`

export const Text = styled.p`
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-shadow: 0px 1px 3px #484848;
  z-index: 1;
`
export const Button = styled.span`
  background-color: #50cdb1;
  color: #fff;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 25rem;
  border: none;
  margin-top: 2.4rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  z-index: 2;
`
