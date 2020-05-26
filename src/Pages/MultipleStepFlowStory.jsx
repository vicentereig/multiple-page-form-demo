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
    <section className="pt-4">
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
        <div className="pl-8 w-1/2">
          <p>
            A Multiple Step Workflow supports an arbitrary amount of steps. In this example,
            each step specifies a title, and additionally needs to be completed before moving
            forward.
          </p>

          <p>Steps are represented as children React components, which are rendered one at the time.</p>

          <p>Every time a Step is rendered, the <code>MultipleStepFlow</code> provides them with
            additional properties such as <code>currentStep</code> and <code>steps</code>. This way
            the current step is able to show progress back to the user.</p>

          <p>
            In this naive scenario, completion is marked when the button Completed is cliked.
          </p>
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
