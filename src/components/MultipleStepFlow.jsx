import React, {Children, cloneElement, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createWorkflow, createSteps, move} from 'components/MultipleStepFlow/actions'

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


  return Children.map(children, (child, index) => {
    if ( index === workflow.currentStep ) {
      return cloneElement(child, { currentStep: workflow.currentStep, steps: workflow.steps, moveSteps})
    }
  })
}

const MultipleStepFlow = ({name, children, onComplete}) => {
  const dispatch = useDispatch()
  const workflow = useSelector( state => state.ui[name])

  const buildSteps = () => {
    const steps = Children.map(children, ({props}) => {
      return { title: props.title  }
    })

    dispatch(createWorkflow(name, steps))
  }

  useEffect(buildSteps, [])



  if (!workflow) {
    return null
  }

  return (
    <CurrentStep name={name} workflow={workflow} onFinalStepComplete={onComplete}>
      {children}
    </CurrentStep>
  )
}

export default MultipleStepFlow
