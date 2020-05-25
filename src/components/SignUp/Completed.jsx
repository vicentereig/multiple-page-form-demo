import React from 'react'
import ProgressIndicator from 'components/ProgressIndicator'

const defaultClassName = "border rounded-lg border-gray-300 p-4 w-1/2".split()

const Completed = ({className, currentStep, steps}) => {
  return (
    <div className={defaultClassName.concat(className).join(' ')}>
      <ProgressIndicator className="pb-8" steps={steps} currentStep={currentStep}/>

      <h1 className="font-bold tracking-tight pt-4 text-lg">You are all set!</h1>
      <p>Welcome to Tray.io, proceed to sign in and start using the product.</p>

    </div>
  )
}

export default Completed
