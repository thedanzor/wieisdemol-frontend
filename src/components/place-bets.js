import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../helpers/resolve-avatar'
import { post } from '../helpers/fetch'

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;

  .child {
    width: 900px;
    height: 650px;
    padding: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -325px 0 0 -450px;
    background: #2a342b;
    box-shadow: 0px 12px 22px rgba(0,0,0,0.6);
  }

  h1 {
    font-size: 45px;
    margin: 0;
    padding: 0;
    color: #fff !important;
  }
  h3 {
    font-size: 18px;
    opacity: 0.8;
    margin: 12px;
    padding: 0;
  }

  .option {
    width: 20%;
    display: inline-block;
    height: 160px;
    vertical-align: top;

    span {
      position: relative;
      top: 10px;
      text-transform: capitalize;
    }

    > div {
      float: none !important;
      display: block;
      margin: 0 auto;
    }

    input {
      border: 0;
      outline: 0;
      background: rgba(0,0,0,0.5);
      padding: 10px;
      color: #fff;
      font-size: 16px;
      width: 90%;
      margin: 8px auto 0;
      text-align: center;
      
      &:focus, &:hover {
        outline: 2px solid #086a01;
      }
    }
  }

  .executed {
    opacity: 0.4;
  }

  .options {
    margin-top: 40px;
  }
`

export default ({ auth, handleClose, bets, general, fetchNew }) => {
  const [mappedData, setMappedData] = React.useState(bets[auth.name] || {})
  const { cast, executions, currentWeek } = general
  const [spent, setSpent] = React.useState(0)
  const saveButton = (auth.points - spent) === 0

  const handleChange = (value, name) => {
    const currentData = mappedData || {}
    const newData = { ...currentData }
    newData[name] = parseInt(value)

    setMappedData(newData)
  }

  const handleSave = async () => {
    const response = await fetch(`http://localhost:3030/bets/${currentWeek}/${auth.name}`, post(mappedData))
    const responseMessage = await response.json()

    if (responseMessage) {
      fetchNew()
    }
  }

  React.useEffect(() => {
    let totalPoints = 0
    for (let bet in mappedData) {
      if (mappedData[bet]) {
        totalPoints = totalPoints + mappedData[bet]
      }
    }

    setSpent(totalPoints)
  }, [mappedData])

  return <Wrapper>
    <div className='child'>
      <h1 onClick={handleClose}> Wie is de mol? </h1>
      <h3> Spend your points on your mole suspects. </h3>

      <div className='score-board'>
        You have <strong> {auth.points - spent} </strong> points to spend.
      </div>

      <div className='options'>
        {cast
          .map(person => <div key={`list.${person}`} className={`option ${executions.indexOf(person) > -1 ? 'executed' : ''}`}>
          <ResolveAvatar name={person} size={70} />
          <span>
            {person}
            <input disabled={executions.indexOf(person) > -1} type='number' value={mappedData[person] || 0} onChange={e => handleChange(e.target.value, person)} />
          </span> 
        </div>)}
      </div>

      {
        saveButton && <button onClick={handleSave}> Save </button>
      }
    </div>
  </Wrapper>
}