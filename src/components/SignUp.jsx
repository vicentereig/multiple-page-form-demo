import React from "react"
import {useSelector} from 'react-redux'
import MultipleStepFlow from 'components/MultipleStepFlow'
import Account from 'components/SignUp/Account'
import Privacy from 'components/SignUp/Privacy'
import Completed from 'components/SignUp/Completed'



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
