import styled from 'styled-components'

export const StyledInput = styled.input`
  line-height: 14px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  text-decoration: none;
  background-color: #607bff;
  color: #fff;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1.3rem 4rem;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 25rem;
  border: none;
  margin-top: 64px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #6099ff;
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`
