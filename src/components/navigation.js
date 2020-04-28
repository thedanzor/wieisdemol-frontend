import React from 'react'
import styled from 'styled-components'

import ResolveAvatar from '../core/helpers/resolve-avatar'

const NavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  ul {
    width: 100%;
    list-style: none;

    li {
      display: inline-block;
      padding: 12px 22px;
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`

export default ({ auth }) => {
  return <NavigationWrapper>
    <ul>
      <li> Home </li>
      <li> Manage Points </li>
      <li> Notes </li>
      <li> 
        <div className='user-area'>
          <ResolveAvatar name={auth.mostSuspected} size={40} />
          Welcome back {auth.name}
        </div>
      </li>
    </ul>
  </NavigationWrapper>
}