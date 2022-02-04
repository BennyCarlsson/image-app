import styled from 'styled-components'

export const DisplayMessageWrapper = styled.div`
  opacity: ${({ displayMessage }) => (displayMessage ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  margin-bottom: 24px;
  width: 100%;
  background-color: #eefaf8;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #373150;
`
