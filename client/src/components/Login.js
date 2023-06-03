import React, { useState } from 'react'
import login from '../images/login.jpg'
import './style.css'

export default function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <>
      <div className='container'>
        <div className='row'>

          <div className='col-xs-12 col-sm-6 text-center '>
            <h1 className='text-center mb-5'>WELCOME</h1>
            {/* <div className='m-auto'> */}
            <label>Email:
              <input type='email' value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='enter your email'className='input'></input>
            </label>
            <br />
            <label>Password:
              <input type='text' value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='enter your password'className='input'></input>
            </label><br/>
            <input type='submit'></input>
            {/* </div> */}
          </div>
          <div className='col-xs-12 col-sm-6'>
            <img src={login} className='img-fluid'></img>
          </div>
        </div>
      </div>
    </>
  )
}
