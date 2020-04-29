import React from 'react'
import styled from 'styled-components'

// Logo
import Logo from './core/views/assests/logo.png'

// Components
import ListView from './components/listview'
import AccountBar from './components/account-bar'

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;

  > div {
    position: relative;
    padding: 160px 0;

    > div {
      max-width: 92%;
      min-width: 1000px;
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  .logo-wrapper {
    width: 80px;
    position: absolute;
    top: 20px;
    left: 30px;
  }
`

const NavigationWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 90px;

  ul {
    list-style: none;

    li {
      display: inline-block;
      padding:  8px 22px;
      border-right: 1px solid rgba(255,255,255,0.3);
      font-size: 18px;
      
      color: rgba(255,255,255,0.5);

      &:last-child {
        border: 0px solid #fff;
      }

      &.active,
      &:hover {
        color: #fff;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`

export default (props) => {
  const [activePage, setActivePage] = React.useState('home')

  return <MainWrapper>
    <div><div>
      <img src={Logo} alt='logo' className='logo-wrapper' />

      <NavigationWrapper>
        <ul>
          <li setActivePage={() => setActivePage('home')} className={`${activePage === 'home' ? 'active' : ''}`}> 
            Home
          </li>
          <li setActivePage={() => setActivePage('points')} className={`${activePage === 'points' ? 'active' : ''}`}>
            My Points
          </li>
          <li setActivePage={() => setActivePage('notes')} className={`${activePage === 'notes' ? 'active' : ''}`}>
            My Notes
          </li>
        </ul>
      </NavigationWrapper>

      <AccountBar {...props} />
      <ListView {...props} />
    </div></div>
  </MainWrapper>
}
