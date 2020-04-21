import styled from 'styled-components'

export const InputField = styled.input`
  background: rgba(0,0,0,0.6);
  padding: 22px 22px;
  margin: 10px;
  width: 410px;
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