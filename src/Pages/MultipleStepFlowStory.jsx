import React, {useState} from "react"
import {Provider} from "react-redux"
import store from "config/store"

import ProgressIndicator from "components/ProgressIndicator"
import MultipleStepFlow from 'components/MultipleStepFlow'

const MultipleStepFlowStory = () => {
  const logCompletion = () => {
    console.log('Completed!')
  }

  return (
    <section>
      <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Multiple Step Flow</h3>
      <div className="flex flex-row">
        <div className="w-1/2">
          <Provider store={store}>
            <MultipleStepFlow name="Sample Flow" onComplete={logCompletion}>
              <Step title="First Step"/>
              <Step title="Second Step"/>
              <Step title="Third Step"/>
              <FinalStep title="Fin."/>
            </MultipleStepFlow>
          </Provider>
        </div>
        <div className="w-1/2">
          <ul className="list-disc pl-8">
            <li>Support an arbitrary amount of steps</li>
            <li>Each Step requires to be marked as `completed` before moving forward.</li>

          </ul>
        </div>
      </div>
    </section>

  )
}


const Step = ({title, currentStep, steps, moveSteps }) => {
  const [isComplete, setComplete] = useState(false)

  const stepCompleted = () => {
    setComplete(true)
  }

  const moveForwardIfCompleted = () => {
    if (isComplete) {
      moveSteps(currentStep+1)
    }
  }

  return (
    <div className="border border-gray-400 rounded-lg p-4">
      <ProgressIndicator steps={steps} currentStep={currentStep} className="pb-8"/>
      <h1>{title}</h1>
      <button onClick={stepCompleted}
              className="bg-gray-800 text-white mt-4 py-2 px-4 rounded-full"
              type="submit">Complete</button>

      <button onClick={moveForwardIfCompleted}
              className="bg-gray-800 text-white mt-4 py-2 px-4 rounded-full"
              type="submit">Next</button>
    </div>
  )
}

const FinalStep = ({title, steps, currentStep}) => {
  return (
    <div className="border border-gray-400 rounded-lg p-4">
      <ProgressIndicator steps={steps} currentStep={currentStep} className="pb-8"/>
      <h1>{title}</h1>
    </div>
  )
}

export default MultipleStepFlowStory
