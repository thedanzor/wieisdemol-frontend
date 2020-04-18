import React from 'react'
import styled from 'styled-components'

import background from './assests/bg.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #01190c;
  font-family: 'Roboto Condensed', sans-serif;
  color: rgba(255,255,255,0.7);

  ${
    props => props.isLogin
      ? `
  @keyframes imageEffect {
    0% {
      opacity: 0.4;
    }
    50%  {
      opacity: 0.9;
    }
    100%  {
      opacity: 0.4;
    }
  }
      `
      : ``
  }

  > img {
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }

  ${
    props => props.isLogin
      ? `
  > img {
    animation-name: imageEffect;
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
      `
      : ``
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  div, input, button {
    box-sizing: border-box;
  }
`

export default ({ children, isLogin }) => {
  return <Wrapper isLogin={isLogin}>
    <img alt='background' src={background} />
    <div className='container'>
      {children}
    </div>
  </Wrapper>
}
