import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input`
  border-color: transparent;
  border-bottom: 1px solid #e9e9e9;
  outline-style: none;
  width: 320px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.25px;
  padding: 10px 0px;
  border-radius: 1px;
  &:focus {
    border-bottom: 1px solid #9b9b9b;
  }
`
export const Label = styled.label`
  margin-left: 0;
  padding-left: 0;
  color: #607bff;
  font-size: 13px;
  letter-spacing: -0.35px;
  font-weight: bold;
`
