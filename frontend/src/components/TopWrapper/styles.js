import styled from 'styled-components'

export const StyledTopWrapper = styled.div`
  display: flex;
  background-color: #ffe8e5;
  width: 100%;
  height: 500px;
  border-radius: 0 0 50% 50% / 0 0 30% 30%;
  transform: scaleX(1.3);
  overflow: hidden;
  box-shadow: 0px 2px 17px -11px rgb(96 96 96);
  margin-bottom: 24px;
`
export const Inner = styled.span`
  transform: scaleX(calc(1 / 1.3));
  width: 100%;
  height: 100%;
`
