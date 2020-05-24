import React, {Children, cloneElement, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createWorkflow, createSteps, move} from '../Pages/MultipleStepFlowStory/store'

const MultipleStepFlow = ({name, children, onComplete}) => {
  const dispatch = useDispatch()


  const buildSteps = () => {
    const steps = Children.map(children, ({type, props}) => {
      return { title: props.title  }
    })

    dispatch(createWorkflow(name))
    dispatch(createSteps(name, steps))
  }

  buildSteps()


  const CurrentStep = () => {
    const currentStep = useSelector(state => state.ui[name].currentStep)
    const steps = useSelector(state => state.ui[name].steps)

    const moveSteps = (nextStep) => {
      dispatch(move(name, nextStep))
    }

    useEffect(() => {
      if (currentStep === steps.length - 1 ) {
        onComplete()
      }
    }, [currentStep])

    return Children.map(children, (child, index) => {
      if ( index === currentStep ) {
        return cloneElement(child, {currentStep, steps, moveSteps})
      }
    })
  }

  return (<CurrentStep/>)
}

export default MultipleStepFlow
