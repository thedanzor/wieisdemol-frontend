import React from 'react'
import styled from 'styled-components'

// helpers
import ResolveAvatar from '../helpers/resolve-avatar'

const PlayerWrapper = styled.div`
  width: 100%;

  .player_wrapper {
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding: 22px;
    width: 650px;
    margin: 0 auto;
  }

  .col {
    height: 60px;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }

  .col1 {
    width: 80px;
  }

  .col2 {
    width: 120px;
    padding: 16px 0;
    font-size: 25px;
    font-weight: 600;
    padding-left: 22px;
  }

  .col3 {
    width: 120px;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 600;
    opacity: 0.7;
  }

  .col4 {
    width: calc(100% - 320px);
    padding: 10px 0;
  }
`

const ListComponent = ({ player }) => {
  const { name, points, bettedOn, mostSuspected } = player
  const size = 65

  return <PlayerWrapper>
    <div className='player_wrapper'>
      <div className='col col1'> <ResolveAvatar name={mostSuspected} size={size} /> </div>
      <div className='col col2'> { name } </div>
      <div className='col col3'> ${ points } </div>
      <div className='col col4'> { bettedOn.map(player => <ResolveAvatar key={`${name}.${player}`} name={player} size={45} />)} </div>
    </div>
  </PlayerWrapper>
}
export default ListComponent
