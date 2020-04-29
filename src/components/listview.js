import React, { useState } from 'react'
import styled from 'styled-components'

// helpers
import { get } from '../core/helpers/fetch'

// Views
import { H1 } from '../core/views/typography'

// Childeren
import BetContainer from './listitem'
import PlaceBet from './place-bets'
import Loader from '../core/views/loader'
import EleminatedPlayers from './eleminated-players'

// Data
// import data from '../mock/list'

const SectionTitle = styled.div`
  text-transform: uppercase;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  display: block;
  text-align: left;
  padding: 12px 22px;
  margin-bottom: 12px;
  margin-right: 12px;
`

const ListWrapper = styled.div`
  h1 {
    font-size: 35px;
    margin: 0;
    padding: 0;
    color: rgba(255,255,255,0.6);

    span {
      color: #fff;
      text-transform: capitalize;
    }
  }
  h3 {
    font-size: 16px;
    opacity: 0.8;
    margin: 12px;
    padding: 0;

    span {
      color: #fff;
    }
  }

  .loader-wrapper {
    position: relative;
    min-height: 150px;
  }

  .action-element-wraper {
    padding: 12px 0 0 0;

    .action-element {
      cursor: pointer;
      border-top: 1px solid rgba(255,255,255,0.2);
      padding: 12px 44px;
      color: #fff;

      &:hover {
        color: #066200;
      }
    }
  }

  .bets-placed {
    width: 25%;
    display: inline-block;
    vertical-align: top;
  }

  .giant-episode-cards {
    width: 75%;
    display: inline-block;
    vertical-align: top;
  }

  .mainscreen-container {
    padding: 42px 0;
  }

  .author-points {
    display: inline-block;
    padding: 8px 24px;
    font-size: 18px;
    color: #fff;
    margin-left: 12px;
    position: relative;
    top: -4px;
    border: 1px solid #066200;
    border-radius: 80px;
  }
`

const ListComponent = ({ auth, general, players, refetchUser }) => {
  const [open, setOpen] = useState(false)
  const [processing, setProcessing] = useState(true)
  const [bets, setBets] = useState([])
  const currentWeek = bets && bets[0] && bets[0].week

  const updateData = async () => {
    setProcessing(true)

    const response = await fetch(`https://wieisdemol-node-backend.herokuapp.com/bets`, get)
    const bets = await response.json()

    const sortedBets = bets.sort((a, b) => b.week - a.week)

    setBets(sortedBets)
    setProcessing(false)
  }

  React.useEffect(() => {
    updateData()
  }, [])

  return <ListWrapper>
    <div>
      <H1>
        <span> {auth.name} </span>
        <div className='author-points'> {auth.points} </div>
      </H1>

      <p className='action-element-wraper'> 
        <strong onClick={updateData} className='action-element'> Fetch the latest data </strong> |
        <strong onClick={() => setOpen(true)} className='action-element'> Spend your points </strong>
      </p>

      <div className='mainscreen-container'>
        <div className='giant-episode-cards'>
          <SectionTitle> Current Progress - Week {currentWeek} </SectionTitle>
          <EleminatedPlayers general={general} />
        </div>
        <div className='bets-placed'>
          <SectionTitle> Current Standings </SectionTitle>
          {
            processing
              ? <div className='loader-wrapper'> <Loader /> </div>
              : bets && bets.length > 0
                ? <BetContainer players={players} betWeek={bets[0]} />
                : 'No data found'
          }
        </div>
      </div>

      {
        open && <PlaceBet 
          fetchNew={() => {
            updateData()
            refetchUser()
          }}
          general={general}
          bets={bets[0]}
          auth={auth}
          handleClose={() => setOpen(false)} />
      }
    </div>
  </ListWrapper>
}
export default ListComponent
