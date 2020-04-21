import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../core/helpers/resolve-avatar'
import { post } from '../core/helpers/fetch'
import { H1, H3 } from '../core/views/typography'
import { PrimaryButton } from '../core/views/buttons'
import { InputField } from '../core/views/inputs'

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
    const response = await fetch(`https://wieisdemol-node-backend.herokuapp.com/bets/${currentWeek}/${auth.name}`, post(mappedData))
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
      <H1 onClick={handleClose}> Wie is de mol? </H1>
      <H3> Spend your points on your mole suspects. </H3>

      <div className='score-board'>
        You have <strong> {auth.points - spent} </strong> points to spend.
      </div>

      <div className='options'>
        {cast
          .map(person => <div key={`list.${person}`} className={`option ${executions.indexOf(person) > -1 ? 'executed' : ''}`}>
          <ResolveAvatar name={person} size={70} />
          <span>
            {person}
            <InputField disabled={executions.indexOf(person) > -1} type='number' value={mappedData[person] || 0} onChange={e => handleChange(e.target.value, person)} />
          </span> 
        </div>)}
      </div>

      {
        saveButton && <PrimaryButton onClick={handleSave}> Save </PrimaryButton>
      }
    </div>
  </Wrapper>
}