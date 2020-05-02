import React from 'react'
import styled from 'styled-components'

import { H3 } from '../core/views/typography'

// import Player from './player'
import ResolveAvatar from '../core/helpers/resolve-avatar'

const BetWrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 0px 12px 0 0;
  margin-bottom: 22px;
  border-bottom:  1px solid rgba(255,255,255,0.1);
  padding-bottom: 22px;

  .bet-weekly-wrapper {
    padding: 0 12px 12px;
    background: rgba(255,255,255,0.08);
    margin-bottom: 10px;

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
      width: 100%;
      text-align: left;

       h3 {
         color: #fff !important;
         font-size: 18px;
         padding-left: 10px;

         span {
           font-size: 14px;
           font-weight: 600;
           border: 1px solid rgba(255,255,255,0.3);
           padding: 6px 18px;
           margin-left: 12px;
           border-radius: 50px;
         }
       }
    }

    .player-points {
      width: 50px;
      text-align: center;
    }

    .player-bets {
      width: 100%;
      text-align: left;
      display: block;
      padding: 0px 0;

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
        points: (betWeek.points && betWeek.points[player.name]) || 0,
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
        points: (betWeek.points && betWeek.points[player.name]) || 0,
        noBets: true
      })
    }
  })

  return <BetWrapper>
    {
      weeklyBet.sort((a, b) => b.points - a.points).map(mappedPlayer => <div className='bet-weekly-wrapper'>
        <div className='player-name'> <h3> {mappedPlayer.name} <span> {mappedPlayer.points} </span> </h3> </div>
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
