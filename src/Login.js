import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"

function Login() {

  const signIn = () => {
    /// sign in ...
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg" alt="" />
        <img src="facebook-title.png" alt=""/>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
