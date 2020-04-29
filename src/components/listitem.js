import React from 'react'
import styled from 'styled-components'

import { H3 } from '../core/views/typography'

// import Player from './player'
import ResolveAvatar from '../core/helpers/resolve-avatar'

const BetWrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 22px 12px;
  margin-bottom: 22px;
  border-bottom:  1px solid rgba(255,255,255,0.1);

  .bet-weekly-wrapper {
    > div {
      display: inline-block;
      vetical-align: top;
      height: 62px;
      max-height: 62px;
      overflow: hidden;
      line-height: 62px;
    }

    h3, h4, h5 {
      line-height: 62px;
      margin: 0;
    }

    .player-name {
      width: 75px;
      text-align: left;

       h3 {
         color: #fff !important;
       }
    }

    .player-points {
      width: 50px;
      text-align: center;
    }

    .player-bets {
      width: 100%;
      text-align: right;
      display: block;
      padding: 10px 0;

      div {
        display: inline-block;
      }
    }
  }
`

const ListComponent = ({ players, betWeek }) => {
  const { week } = betWeek
  const weeklyBet = []

  players.forEach(player => {
    if (betWeek[player.name]) {
      const data = {
        name: player.name,
        bets: [],
        points: player.points,
        noBets: false
      }
      
      const betsOfPlayer = betWeek[player.name]
      for (let key in betsOfPlayer) {
        if (betsOfPlayer[key]) {
          data.bets.push({
            name: key,
            spent: betsOfPlayer[key]
          })
        }
      }

      weeklyBet.push(data)
    } else {
      weeklyBet.push({
        name: player.name,
        bets: [],
        points: player.points,
        noBets: true
      })
    }
  })

  return <BetWrapper>
    <H3> Episode {week} </H3>
    
    {
      weeklyBet.map(mappedPlayer => <div className='bet-weekly-wrapper'>
        <div className='player-name'> <h3> {mappedPlayer.name} </h3> </div>
        <div className='player-points'> <h4> {mappedPlayer.points} </h4> </div>
        <div className='player-bets'>
          {
            mappedPlayer.noBets
              ? 'No points spent'
              : mappedPlayer.bets.map(contestent => <ResolveAvatar key={`contestent-${contestent.name}`} name={contestent.name} size={50} />)
          }
        </div>
      </div>)
    }
  </BetWrapper>
}
export default ListComponent
