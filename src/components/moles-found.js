import React from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'
import { map } from '../helpers/resolve-avatar'

// Swipable views
const styles = {
  slide: {
    padding: 25,
    minHeight: 550
  },
  slideContainer: {
    padding: '0px 0 0 0'
  }
}

// Style
const CardContainer = styled.div`
  width: 100%;
  height: 350px;
  padding-left: 50px;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  .execution-card {
    width: 100%;
    border-radius: 12px;
    margin:12px;
    overflow: hidden;
    height: 350px;
    box-shadow: 0px 22px 22px rgba(000,000,000,0.4);
    position: relative;
    opacity: 0.5;

    .overlay-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(000,000,000,0.3);
      padding: 270px 40px;
      text-align: center;

      &.executed {
        background: rgba(206,18,18,0.5);
      }

      h3 {
        font-size: 32px;
        text-transform: capitalize;
      }
      
      h3, h4 {
        color: #fff;
        margin: 0;
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
  const [index, setIndex] = React.useState((executions.length - 1))

  const sortedExcutions = executions.reverse()
  const remainingPlayers = cast.filter(castMember => {
    return sortedExcutions.indexOf(castMember) === -1
  })

  const tooDisplay = [
    ...sortedExcutions,
    ...remainingPlayers
  ]

  return <CardContainer>
    <SwipeableViews enableMouseEvents style={{ padding: '0px 380px 0 40px' }} slideStyle={styles.slideContainer} index={index} onChangeIndex={(newIndex) => setIndex(newIndex)}>
      {
        tooDisplay.map((player, playerIndex) => <div key={`executed-player-${player}`} style={styles.slide}>
          <div className={`execution-card ${playerIndex === index ? 'active-card' : ''}`}>
            <img src={map[player]} alt={player} />

            <div className={`overlay-info ${sortedExcutions.indexOf(player) >= 0 ? 'executed' : ''}`}>
              <h3> {player} </h3>
              {
                sortedExcutions.indexOf(player) >=0 && <h4> Episode {playerIndex +1} </h4>
              }
            </div>
            <div className='execution-overlay'></div>
          </div>
      </div>)
      }
    </SwipeableViews>
  </CardContainer>
}