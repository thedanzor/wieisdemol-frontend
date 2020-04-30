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
    padding: 160px 0 100px;

    .disclaimer {
      padding-bottom: 30px;
      padding-top: 30px;
      text-align: center;
      font-size: 12px;
      text-transform: uppercase;
    }

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
      padding:  4px 22px;
      border-right: 1px solid rgba(255,255,255,0.3);
      font-size: 17px;
      margin: 4px 0;
      
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
    <div>
      <div>
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
      </div>
      <div className='disclaimer'>
        This app is not affiliated or operated by WIE IS DE MOL, AVROTROS or related parties. <br />
        It is owned and operated by fans for fans.
      </div>
    </div>
  </MainWrapper>
}
