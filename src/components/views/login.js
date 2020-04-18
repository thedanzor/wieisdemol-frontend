import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../../helpers/resolve-avatar'
import SwipeableViews from 'react-swipeable-views'
import { post } from '../../helpers/fetch'

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;

  .child {
    width: 700px;
    height: 480px;
    padding: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -240px 0 0 -400px;
    background: #2a342b;
    box-shadow: 0px 12px 22px rgba(0,0,0,0.6);
    color: rgba(255,255,255,0.6);

    strong {
      color: rgba(255,255,255,1) !important;
    }
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

  .users-preview {
    width: 450px;
    text-align: center;
    display: block;
    height: 180px;
    margin: 22px auto 0;

    > div {
      margin-bottom: 10px !important;
    }
  }

  .user-wrapper-image {
    border-radius: 70px;
    border: 2px solid rgba(255,255,255,0.1);

    &:focus, &:hover {
      border: 2px solid rgba(255,255,255,0.1);
      cursor: pointer;
      transform: scale(1.2);      
    }
  }

  hr {
    opacity: 0.1;
  }

  .field-input {
    text-align: left;
    font-weight: 600;
    padding-left: 128px;
    color: #fff;
  }

  input {
    margin-bottom: 10px !important;
  }
`

const styles = {
  slide: {
    padding: 15,
    minHeight: 225
  }
}

export default ({ account, setAuth, general }) => {
  const [index, setIndex] = React.useState(0)
  const [processing, setProcessing] = React.useState(false)
  const [accountDetails, setAccountDetails] = React.useState(account)
  const { cast } = general

  const handleAccountUpdate = (value, field) => {
    setAccountDetails({
      ...accountDetails,
      [field]: value
    })
  }

  const updateAccount = async () => {
    setProcessing(true)
  
    // Do the post request
    const response = await fetch(`https://wieisdemol-node-backend.herokuapp.com/update/${account.username}`, post({
      ...accountDetails,
      setup: true
    }))
    const responseMessage = await response.json()

    if (responseMessage) {
      setAuth(accountDetails)
    }
  }

  const handleAvatarClick = (name) => {
    handleAccountUpdate(name, 'mostSuspected')
    setIndex(1)
  }

  return <Wrapper>
    <div className='child'>
      <h1> Welcome {accountDetails.name} </h1> <br />

      <strong> This is the first time you are logging in. Let's finish setting up your account. </strong> 
      <br /><br /><br />
      
      <hr />

      <SwipeableViews index={index} onChangeIndex={(newIndex) => setIndex(newIndex)}>
        <div style={Object.assign({}, styles.slide)}>
          <h3> Wie is jouw mol? Select an avatar to use. </h3>

          <div className='users-preview'>
          { cast && cast.map(person => <ResolveAvatar handleClick={() => handleAvatarClick(person)} name={person} size={70} />) } <br /><br />
          </div>

          You can change this at any time.
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <div className='field-input'> Username: </div>
          <input value={accountDetails.username} onChange={(e) => handleAccountUpdate(e.target.value, 'username')} />

          <div className='field-input'> Display name: </div>
          <input value={accountDetails.name} onChange={(e) => handleAccountUpdate(e.target.value, 'name')} />

          <button onClick={updateAccount}> { processing ? 'Updating account...' : 'Update Account'} </button>
        </div>
      </SwipeableViews>
    </div>
  </Wrapper>
}