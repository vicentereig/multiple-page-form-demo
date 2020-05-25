import React from 'react'
import { useForm } from 'react-hook-form'
import { atLeastOneNumber, atLeastOneUpperAndLower, emailPattern } from 'lib/validators'
import ProgressIndicator from 'components/ProgressIndicator'
import { createAccount } from 'components/SignUp/Account/actions'
import { useDispatch } from 'react-redux'

const defaultClassName = "border rounded-lg border-gray-300 p-4 w-1/2".split()
const Account = ({className=[], steps, currentStep, moveSteps}) => {
  const { handleSubmit, register, errors, formState } = useForm()
  const { isValid } = formState
  const dispatch = useDispatch()

  const onSubmit = values => {
    if (isValid) {
      dispatch(createAccount(values))
      moveSteps(currentStep+1)
    }
  }

  return (
    <div className={defaultClassName.concat(className).join(' ')}>
      <ProgressIndicator className="pb-8" steps={steps} currentStep={currentStep}/>
      <h1 className="font-bold tracking-tight pt-4 text-lg">Setup Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-medium text-gray-700 tracking-tight text-md">Your Personal Details</h2>

        <label className="block">
          <span className="text-gray-700 text-sm">Name</span>
          <input name="fullName"
                 placeholder="Jane Doe"
                 className="form-input text-sm mt-1 block w-full"
                 ref={register({required: 'Please enter your full name'})}
          />
          <span className="text-gray-800 text-sm">{errors.fullName && errors.fullName.message}</span>
        </label>

        <label className="block pt-4">
          <span className="text-gray-700 text-sm">Role</span>
          <input className="form-input text-sm mt-1 block w-full" name="role" placeholder="Software Engineer"/>
        </label>

        <h2 className="font-medium text-gray-700 tracking-tight text-md pt-4">Your User Details</h2>
        <label className="block">
          <span className="text-gray-700 text-sm">Email</span>
          <input className="form-input text-sm mt-1 block w-full" name="email" placeholder="jane@email.com"
                   ref={register({
                     required: 'Please enter your email address',
                     pattern: {
                       value: emailPattern,
                       message: 'Please enter a valid email'
                     }
                  })}
          />
          <span className="text-gray-800 text-sm">{errors.email && errors.email.message}</span>
        </label>

        <label className="block pt-4">
          <span className="text-gray-700 text-sm">Password</span>
          <input type="password"
                 name="password"
                 placeholder="Your password"
                 className="form-input text-sm mt-1 block w-full"
                 ref={register({
                   required: 'In order to keep your account safe, you need to choose a password',
                   minLength: {
                     value: 10,
                     message: 'Please enter a password at least 10 characters long'
                   },
                   validate: { atLeastOneNumber, atLeastOneUpperAndLower}
                 })}
          />
          <span className="text-gray-800">{errors.password && errors.password.message}</span>
        </label>

        <button className="bg-gray-800 text-white mt-4 py-2 px-4 rounded-full"
                type="submit">Next</button>
      </form>
    </div>
  )
}

export default Account
