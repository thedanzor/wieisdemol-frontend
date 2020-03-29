import React from 'react'
import styled from 'styled-components'

import background from './assests/bg.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #01190c;
  font-family: 'Roboto Condensed', sans-serif;
  color: rgba(255,255,255,0.7);

  ${'' /* @keyframes imageEffect {
    0% {
      opacity: 0.4;
      -webkit-filter: blur(100px);
      filter: blur(100px);
    }
    50%  {
      opacity: 0.5;
      -webkit-filter: blur(50px);
      filter: blur(50px);
    }
    100% {
      opacity: 0.4;
      -webkit-filter: blur(100px);
      filter: blur(100px);
    }
  } */}

  > img {
    width: 100%;
    height: 100%;
    opacity: 0.4;
    -webkit-filter: blur(100px);
    filter: blur(100px);
    ${'' /* animation-name: imageEffect;
    animation-iteration-count: infinite;
    animation-duration: 8s; */}
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

export default ({ children }) => {
  return <Wrapper>
    <img alt='background' src={background} />
    <div className='container'>
      {children}
    </div>
  </Wrapper>
}
