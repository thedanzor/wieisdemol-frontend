import React, { useState } from 'react'
import styled from 'styled-components'

// helpers
import { get } from '../helpers/fetch'

// Logo
import Logo from '../ui/assests/logo.png'

// Childeren
import BetContainer from './listitem'
import PlaceBet from './place-bets'
import Loader from '../ui/loader'
import MolesFound from './moles-found'

// Data
// import data from '../mock/list'

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
    width: 35%;
    display: inline-block;
    vertical-align: top;
  }

  .giant-episode-cards {
    width: 65%;
    display: inline-block;
    vertical-align: top;
  }

  .mainscreen-container {
    padding: 42px 0;
  }
`

const ListComponent = ({ auth, general, players, refetchUser }) => {
  const [open, setOpen] = useState(false)
  const [processing, setProcessing] = useState(true)
  const [bets, setBets] = useState([])

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
      <h1> Welcome back <span> {auth.name} </span> </h1>
      <h3> You currently have <span> {auth.points - auth.spent} </span> points to spend this episode </h3>
      <img src={Logo} alt='logo' className='logo-wrapper' />

      <p className='action-element-wraper'> 
        <strong onClick={updateData} className='action-element'> Fetch the latest data </strong> |
        <strong onClick={() => setOpen(true)} className='action-element'> Spend your points </strong>
      </p>

      <div className='mainscreen-container'>
        <div className='bets-placed'>
          {
            processing
              ? <div className='loader-wrapper'> <Loader /> </div>
              : bets && bets.length > 0
                ? <BetContainer players={players} betWeek={bets[0]} />
                : 'No data found'
          }
        </div>
        <div className='giant-episode-cards'>
          <MolesFound general={general} />
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
