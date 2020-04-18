import React, {useState} from 'react'
import styled from 'styled-components'

import logo from '../ui/assests/logo.png'
import { get } from '../helpers/fetch'
import SetupAccount from './views/login'

const ErrorWrapper = styled.div`
  font-weight: 600;
  color: #fff;
  padding: 12px 0;
  text-align: center;
`

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;

  .center_login {
    width: 100%;
    display: table-cell;
    vertical-align: middle;
  }

  .login_container {
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    font-size: 35px;
    margin: 12px 0 0 0;
    padding: 0;
  }

  h3 {
    font-size: 16px;
    opacity: 0.8;
    margin: 12px;
    padding: 0;
  }

  .logo {
    width: 150px;
    margin: 0 auto;
  }

  input {
    background: rgba(0,0,0,0.6);
    padding: 22px 22px;
    margin: 10px;
    width: 410px;
    font-size: 16px;
    border: 0px solid #000;
    color: rgba(255,255,255,0.7);
    font-weight: 600;
    font-family: 'Sen', sans-serif;

    &:placeholder {
      color: rgba(255,255,255,0.4);
    }

    &:focus {
      outline: 2px solid #086a01;
    }
  }

  button {
    display: block;
    width: 410px;
    font-size: 16px;
    color: #fff;
    background: rgba(255,255,255,0.2);
    font-size: 16px;
    padding: 22px;
    text-transform: uppercase;
    font-weight: 600;
    border: 0px solid #000;
    margin: 0 auto;
    cursor: pointer;

    &:hover, &:focus {
      background: #066200;
      color: #fff;
      outline: 0px solid #fff;
    }
  }
`

const LoginComponent = ({ setAuth, general }) => {
  const [tempAccount, setTempAccount] = useState()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAuth = async () => {
    setLoading(true)
    const response = await fetch(`http://localhost:3030/login/${value}`, get)
    const account = await response.json()

    if (account && account.name && account.setup) {
      setAuth(account)
    } else if (account && account.name) {
      setTempAccount(account)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return <LoginWrapper>
    <div className='center_login'>
      <div className='login_container'>
        <img src={logo} alt='logo' className='logo' />
        <h1> Log into your account </h1>
        <h3> You should have received your credentials through a friend</h3>

        <input placeholder='Account username' value={value} onChange={(e) => setValue(e.target.value)} />
        <button disabled={value.length < 3} onClick={handleAuth}> {loading ? 'Fetching Account' :  error ? 'Account not found' : 'Login'} </button>
        <ErrorWrapper> {error ? 'Account not found, try again' : ''} </ErrorWrapper>
      </div>

      {
        tempAccount && <SetupAccount general={general} setAuth={setAuth} account={tempAccount} />
      }
    </div>
  </LoginWrapper>
}
export default LoginComponent
