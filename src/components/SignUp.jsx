import React from "react"
import {useSelector} from 'react-redux'
import MultipleStepFlow from './MultipleStepFlow'
import Account from './signup/pages/Account'
import Privacy from './signup/pages/Privacy'
import Completed from './signup/pages/Completed'



const SignUp = ({className}) => {
  const account = useSelector( state => state.models.account )

  const logInfo = () => {
    console.log('User created', account)

  }

  return (
    <MultipleStepFlow name="SignUp" onComplete={logInfo}>
      <Account className={className} title="Your Account"/>
      <Privacy className={className} title="Your Privacy"/>
      <Completed className={className} title="All set!"/>
    </MultipleStepFlow>
  )
}

export default SignUp
