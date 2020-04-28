import React, {useState} from 'react'
import Home from './components/listview'
import SpendPoints from './components/place-bets'

const PageMapper = {
  home: Home,
  spendPoints: SpendPoints
}

export default () => {
  const [activePage, setActivePage] = useState('home')
  const ActiveView = PageMapper[activePage]

  return <>
    <ActiveView />
  </>
}
