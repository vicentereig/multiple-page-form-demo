import Account from 'signup/pages/Account'
import Privacy from 'signup/pages/Privacy'
import React from "react"
import {useSelector} from 'react-redux'

const SignUp = () => {
  const user = useSelector( state => state.models.User )
  const logInfo = () => {
    console.log(user)
  }

  return (
    <MultipleStepFlow name="SignUp" onComplete={logInfo}>
      <Account title="Your Account"/>
      <Privacy title="Your Privacy"/>
      <SignupComplete title="All set!"/>
    </MultipleStepFlow>
  )
}

export default SignUp
