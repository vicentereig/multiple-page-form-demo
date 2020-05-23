import React from 'react'
import { useForm } from 'react-hook-form'
import { atLeastOneNumber, atLeastOneUpperAndLower, emailPattern } from '../../../lib/validators'

const defaultClassName = "border rounded-lg border-gray-300 p-4 w-1/2".split()

const ProgressIndicator = ({}) => {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex-no-grow">
          <div className="w-6 h-6 bg-gray-800 border-2 border-white mx-auto rounded-full
        text-white flex">
          </div>
        </div>

        <div className="w-full items-center justify-between content-center flex">
          <div className="w-full items-center align-middle align-center flex-1">
            <div className="bg-gray-800 text-xs leading-none py-1  w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white flex items-center">
          </div>
        </div>

        <div className="w-full align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
            <div className="bg-gray-200 text-xs leading-none py-1 w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white flex items-center">
            <span className="text-white text-center w-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Account = ({className=[]}) => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return (
    <div className={defaultClassName.concat(className)}>
      <ProgressIndicator/>
      <h1 className="font-bold tracking-tight pt-4">Setup Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <label className="block pt-4">
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

        <button className="bg-gray-800 text-white mt-4 py-2 px-4 rounded-full" type="submit">Next</button>
      </form>
    </div>
  )
}

export default Account
