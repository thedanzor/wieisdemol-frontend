import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;

  .child {
    width: 600px;
    height: 650px;
    padding: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -325px 0 0 -300px;
    background: #2a342b;
    box-shadow: 0px 12px 22px rgba(0,0,0,0.6);
  }

  h1 {
    font-size: 45px;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 18px;
    opacity: 0.8;
    margin: 12px;
    padding: 0;
  }
`

export default ({ auth, handleClose }) => {
  return <Wrapper>
    <div className='child'>
      <h1 onClick={handleClose}> Who is the mole? </h1>
      <h3> Spend your points on who you think the mole is </h3>
    </div>
  </Wrapper>
}