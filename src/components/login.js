import React, {useState} from 'react'
import styled from 'styled-components'

import logo from '../ui/assests/logo.png'

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
    font-size: 45px;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 18px;
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

const LoginComponent = ({ auth, setAuth }) => {
  const [value, setValue] = useState('')

  const handleAuth = () => {
    setAuth({
      name: value
    })
  }

  return <LoginWrapper>
    <div className='center_login'>
      <div className='login_container'>
        <img src={logo} alt='logo' className='logo' />
        <h1> Log in to your account </h1>
        <h3> You should have recieved your credentials through a friend</h3>

        <input placeholder='Account username' value={value} onChange={(e) => setValue(e.target.value)} />
        <button disabled={value.length < 3} onClick={handleAuth}> Login </button>
      </div>
    </div>
  </LoginWrapper>
}
export default LoginComponent
