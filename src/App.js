import React, {useState} from 'react'

// UI
import Wrapper from './ui/app-wrapper'

// Components
import Login from './components/login'
import ListView from './components/listview'

function App() {
  const [auth, setAuth] = useState(null)

  return <Wrapper isLogin={auth === null}>
    { auth === null && <Login auth={auth} setAuth={setAuth} /> }

    { auth !== null && <ListView auth={auth} /> }
  </Wrapper>
}

export default App
