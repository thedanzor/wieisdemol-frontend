import styled from 'styled-components'

export const PrimaryButton = styled.button`
  display: block;
  width: 410px;
  font-size: 16px;
  color: #fff;
  background: rgba(255,255,255,0.2);
  font-size: 16px;
  padding: 22px;
  text-transform: uppercase;
  font-weight: 600;
  border: 0px solid #000;
  margin: 0 auto;
  cursor: pointer;

  &:hover, &:focus {
    background: #066200;
    color: #fff;
    outline: 0px solid #fff;
  }
`