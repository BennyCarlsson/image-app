import React from 'react'
import { Inner, StyledTopWrapper } from './styles'
const TopWrapper = ({ children }) => {
  return (
    <StyledTopWrapper>
      <Inner>{children}</Inner>
    </StyledTopWrapper>
  )
}
export default TopWrapper
