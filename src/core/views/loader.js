import React from 'react'
import styled from 'styled-components'

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  margin: -40px 0 0 -40px;

  .lds-wieisdemol {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-wieisdemol div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-wieisdemol 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-wieisdemol div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-wieisdemol div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-wieisdemol div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-wieisdemol {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`

export default () => {
  return <Loader>
    <div className="lds-wieisdemol"><div></div><div></div><div></div></div>
  </Loader>
}