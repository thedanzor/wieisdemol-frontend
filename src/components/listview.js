import React from 'react'
import styled from 'styled-components'

// Logo
import Logo from '../ui/assests/logo.png'

// Childeren
import Player from './player'

// Data
import data from '../mock/list'

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;
  padding: 160px 0;

  > div {
    width: 1200px;
    max-width: 96%;
    margin: 0 auto;
  }

  h1 {
    font-size: 45px;
    margin: 0;
    padding: 0;
    color: rgba(255,255,255,0.6);

    span {
      color: #fff;
      text-transform: capitalize;
    }
  }
  h3 {
    font-size: 18px;
    opacity: 0.8;
    margin: 12px;
    padding: 0;

    span {
      color: #fff;
    }
  }

  .logo-wrapper {
    width: 80px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  button {
    display: block;
    width: 650px;
    font-size: 16px;
    color: #fff;
    background: rgba(255,255,255,0.2);
    font-size: 16px;
    padding: 22px;
    text-transform: uppercase;
    font-weight: 600;
    border: 0px solid #000;
    margin: 20px auto;
    cursor: pointer;

    &:hover, &:focus {
      background: #066200;
      color: #fff;
      outline: 0px solid #fff;
    }
  }
`

const ListComponent = ({ auth }) => {
  return <ListWrapper>
    <div>
      <h1> Welcome back <span> {auth.name} </span> </h1>
      <h3> You currently have <span> ${auth.points || 100} </span> points to spend </h3>
      <img src={Logo} alt='logo' className='logo-wrapper' />
      { data.map(player => <Player key={player.name} player={player} />) }

      <button> Update your weekly bet </button>
    </div>
  </ListWrapper>
}
export default ListComponent
