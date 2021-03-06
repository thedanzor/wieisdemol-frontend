import React, {useState} from 'react'
import { get } from './core/helpers/fetch'

// UI
import Wrapper from './core/views/app-wrapper'
import Loader from './core/views/loader'

// Components
import Login from './components/login'
import MainWrapper from './main-wrapper'

function App() {
  const [auth, setAuth] = useState(null)
  const [state, setState] = useState({ ready: false })

  const getAppData = async () => {
    const response = await fetch('https://wieisdemol-node-backend.herokuapp.com/status', get)
    const { bets, general, players } = await response.json()

    setState({
      ready: true,
      bets,
      general: general[0],
      players
    })
  }

  React.useEffect(() => { 
    getAppData()
  }, [])

  const handleRefetch = () => {
    getAppData()
  }

  // Build the view
  const Component = () => {
    return <>
      { auth === null && <Login auth={auth} setAuth={setAuth} general={state.general} /> }

      { auth !== null && <MainWrapper auth={auth} refetchUser={handleRefetch} players={state.players} general={state.general} /> }
    </>
  }

  return <Wrapper>
    {
      !state.ready
        ? <Loader />
        : <Component /> 
    }
  </Wrapper>
}

export default App
