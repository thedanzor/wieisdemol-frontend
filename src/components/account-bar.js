import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../core/helpers/resolve-avatar'

const AccountBar = styled.div`
  position: absolute;
  top: 42px;
  right: 42px;
  text-align: left;

  .user-area {
    padding-left: 82px;

    .avatar {
      float: left;
      padding-top: 0px;
      margin-left: -82px;
    }

    .account-info {
      font-size: 18px;

      span {
        color: #fff;
      }
    }

    .account-button {
      color: #fff;
      padding: 6px 0;
      cursor: pointer;

      &:hover {
        color: #066200;
      }
    }
  }
`

export default ({ auth, setActivePage }) => {
  return <AccountBar>
    <div className='user-area'>
      <div className='avatar'> <ResolveAvatar name={auth.mostSuspected} size={50} /> </div>
      <div className='manage-account'>
        <div className='account-info'> Welcome back <span> {auth.name} </span></div>
        <div className='account-button' onClick={() => setActivePage('account')}> Manage Account </div>
      </div>
    </div>
  </AccountBar>
}