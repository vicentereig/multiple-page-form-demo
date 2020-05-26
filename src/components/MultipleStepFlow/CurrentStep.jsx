import React, {Children, cloneElement, useEffect} from "react"
import {useDispatch} from "react-redux"
import {move} from 'components/MultipleStepFlow/actions'

/**
 * CurrentStep renders a single Step. It also enhances the children
 * with the following properties:
 *
 *  - `title`: a short description of the current task at hand.
 *  - `currentStep`: An index representing the current step, starts at 0.
 *  - `steps`: A sorted collection of steps with their title attributes. Useful to render progress bars.
 *  - `moveSteps`: A callback function to instruct the Workflow to move certain amount of steps forward or backwards.
 *
 * @param name Name of the workflow
 * @param children the Steps passed as React components in the Component body.
 * @param workflow An object keeping track of the state of the workflow: {currentStep, steps:[]}
 * @param onFinalStepComplete A mechanism to notify the parent when the Final State has been reached
 *
 */
const CurrentStep = ({name, children, workflow, onFinalStepComplete}) => {
  const dispatch = useDispatch()

  const notifyParentWhenFlowIsComplete = () => {
    if ( workflow.currentStep === workflow.steps.length - 1 ) {
      onFinalStepComplete()
    }
  }

  useEffect(notifyParentWhenFlowIsComplete, [workflow.currentStep, workflow.steps.length, onFinalStepComplete])


  const moveSteps = (nextStep) => {
    dispatch(move(name, nextStep))
  }


  const currentChild = Children.map(children, (child, index) => {
    if ( index === workflow.currentStep ) {
      return cloneElement(child, { currentStep: workflow.currentStep, steps: workflow.steps, moveSteps: moveSteps})
    }
  })

  return (<div id={name}>{currentChild}</div>)
}

export default CurrentStep
