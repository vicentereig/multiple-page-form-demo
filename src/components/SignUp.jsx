import React from "react"
import {useSelector} from 'react-redux'
import MultipleStepFlow from './MultipleStepFlow'
import Account from './signup/pages/Account'
import Privacy from './signup/pages/Privacy'
import Completed from './signup/pages/Completed'



const SignUp = () => {
  // const user = useSelector( state => state.models.User )
  const logInfo = () => {
    console.log('Done')
  }

  return (
    <MultipleStepFlow name="SignUp" onComplete={logInfo}>
      <Account title="Your Account"/>
      <Privacy title="Your Privacy"/>
      <Completed title="All set!"/>
    </MultipleStepFlow>
  )
}

export default SignUp
