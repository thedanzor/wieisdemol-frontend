import styled from 'styled-components'

const sharedValues = `
  background: rgba(0,0,0,0.6);
  margin: 10px;
  font-size: 16px;
  border: 0px solid #000;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  font-family: 'Sen', sans-serif;

  &:placeholder {
    color: rgba(255,255,255,0.4);
  }

  &:focus {
    outline: 2px solid #086a01;
  }
`

export const InputField = styled.input`
  ${sharedValues}
  width: 410px;
  padding: 22px;
`

export const SmallInput = styled.input`
  ${sharedValues}
  width: calc(100% - 24px);
  margin: 12px 12px 0;
  padding: 12px;
`