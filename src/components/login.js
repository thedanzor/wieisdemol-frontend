import React, {useState} from 'react'
import styled from 'styled-components'

import logo from '../core/views/assests/logo.png'
import { get } from '../core/helpers/fetch'
import SetupAccount from './views/login'
import { H1, H3 } from '../core/views/typography'

import { PrimaryButton } from '../core/views/buttons'
import { InputField } from '../core/views/inputs'

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

  .logo {
    width: 150px;
    margin: 0 auto;
  }
`

const LoginComponent = ({ setAuth, general }) => {
  const [tempAccount, setTempAccount] = useState()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAuth = async () => {
    setLoading(true)
    const response = await fetch(`https://wieisdemol-node-backend.herokuapp.com/login/${value}`, get)
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
        <H1> Log into your account </H1>
        <H3> You should have received your credentials through a friend</H3>

        <InputField placeholder='Account username' value={value} onChange={(e) => setValue(e.target.value)} />
        <PrimaryButton disabled={value.length < 3} onClick={handleAuth}> {loading ? 'Fetching Account' :  error ? 'Account not found' : 'Login'} </PrimaryButton>
        <ErrorWrapper> {error ? 'Account not found, try again' : ''} </ErrorWrapper>
      </div>

      {
        tempAccount && <SetupAccount general={general} setAuth={setAuth} account={tempAccount} />
      }
    </div>
  </LoginWrapper>
}
export default LoginComponent
