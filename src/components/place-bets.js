import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../helpers/resolve-avatar'

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

  .options {
    margin-top: 40px;
  }
`

const contestents = [
  'bella', 'emilio', 'jan', 'jean', 'loes', 'olcay', 'ron', 'ruben', 'simone', 'stine'
]

export default ({ auth, handleClose }) => {
  const [mappedData, setMappedData] = React.useState(auth.bets)

  const handleChange = (value, name) => {
    const newData = { ...mappedData }
    newData[name] = value

    setMappedData(newData)
  }

  return <Wrapper>
    <div className='child'>
      <h1 onClick={handleClose}> Who is the mole? </h1>
      <h3> Spend your points on who you think the mole is </h3>

      <div className='score-board'>
        You have ${auth.points - auth.spent} points to spend.
      </div>

      <div className='options'>
        {contestents.map(person => <div key={`list.${person}`} className='option'>
          <ResolveAvatar name={person} size={70} />
          <span>
            {person}
            <input type='number' value={mappedData[person] || 0} onChange={e => handleChange(e.target.value, person)} />
          </span> 
        </div>)}
      </div>
    </div>
  </Wrapper>
}