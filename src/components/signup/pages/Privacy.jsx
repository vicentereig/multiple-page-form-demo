import React from 'react'
import { useForm } from 'react-hook-form'
import ProgressIndicator from '../../ProgressIndicator'

const defaultClassName = "border rounded-lg border-gray-300 p-4 w-1/2".split()

const Privacy = ({className, currentStep, steps}) => {
  const { handleSubmit, formState } = useForm()
  const { isValid } = formState

  const onSubmit = values => {
    console.log(values)
    if  (isValid) {
      console.log('Move forward to the next page')
    }
  }

  return (
    <div className={defaultClassName.concat(className).join(' ')}>
      <ProgressIndicator className="pb-8" steps={steps} currentStep={currentStep}/>

      <h1 className="font-bold tracking-tight pt-4 text-lg">Your Privacy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="block">
          <span className="text-gray-700">
            Choose what we can do with your personal data
          </span>
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox"/>
                  <span className="ml-2">
                    Receive updates about Tray.io product by email
                  </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox"/>
                  <span className="ml-2">
                    Receive communication by email for other products

                  </span>
              </label>
            </div>

          </div>
        </div>

        <button className="bg-gray-800 text-white mt-4 py-2 px-4 rounded-full"
                type="submit">Next</button>
      </form>
    </div>
  )
}

export default Privacy
