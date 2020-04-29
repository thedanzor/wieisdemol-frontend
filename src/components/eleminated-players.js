import React from 'react'
import styled from 'styled-components'
// import SwipeableViews from 'react-swipeable-views'
import { map } from '../core/helpers/resolve-avatar'
import { H3 } from '../core/views/typography'

// Style
const CardContainer = styled.div`
  width: 100%;

  .execution-card {
    width: 180px;
    display: inline-block;
    vertical-align: top;
    border-radius: 12px;
    margin:12px;
    overflow: hidden;
    height: 250px;
    box-shadow: 0px 22px 22px rgba(000,000,000,0.4);
    position: relative;
    opacity: 0.7;
    margin: 12px;

    .overlay-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(000,000,000,0.3);
      padding: 70px 20px;
      text-align: center;

      &.executed {
        background: rgba(206,18,18,0.5);
      }

      h3 {
        font-size: 28px;
        text-transform: capitalize;
      }
      
      h3, h4 {
        color: #fff;
      }
    }

    img {
      min-height: 100%;
      width: 100%;
    }
  }

  .active-card {
    transform: scale(1.1);
    opacity: 1;
  }
`

// Component
export default ({ general }) => {
  const { executions, cast } = general
  const [carasel, setCarasel] = React.useState([])
  const [sortedExcutions, setsortedExcutions] = React.useState([])

  React.useEffect(() => {
    const newlysortedExcutions = executions
    const remainingPlayers = cast.filter(castMember => {
      return newlysortedExcutions.indexOf(castMember) === -1
    })

    const tooDisplay = [
      ...newlysortedExcutions,
      ...remainingPlayers
    ]

    setsortedExcutions(newlysortedExcutions)
    setCarasel(tooDisplay)
  }, [cast, executions])

  if (!carasel || carasel.length === 0) {
    return null
  }

  return <CardContainer>
    {
      carasel.map((player, playerIndex) => <div className={`execution-card`}>
        <img src={map[player]} alt={player} />

        <div className={`overlay-info ${sortedExcutions.indexOf(player) >= 0 ? 'executed' : ''}`}>
          <H3> {player} </H3>
          {
            sortedExcutions.indexOf(player) >=0 && <h4> Episode {playerIndex +1} </h4>
          }
        </div>
        <div className='execution-overlay'></div>
      </div>)
    }
  </CardContainer>
}