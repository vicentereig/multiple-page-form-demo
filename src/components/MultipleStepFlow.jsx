import React, {Children, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createWorkflow, createSteps, move} from 'components/MultipleStepFlow/actions'
import CurrentStep from 'components/MultipleStepFlow/CurrentStep'

/**
 * MultipleStepFlow allows you to present the user with a
 * task that must be accomplished in several steps, one at the time.
 *
 * Usually, after the user completes a task, they click on a button
 * to move onto the next step.
 *
 * Steps can be any kind of Component. MultipleStepFlow makes sure
 * they have access via props to information related to
 * where the user is at in the current workflow,
 * and how to move onto the next task.
 *
 * Steps are rendered sequentially in the order they are defined
 * in the JSX template. The last Step is considered the Final State.
 *
 * When the MultipleStepFlow renders the Final State, it invokes
 * a callback, to notify the parent Component that the overall set
 * of tasks are completed.
 *
 * Every Step has access to the following properties:
 *  - `title`: a short description of the current task at hand.
 *  - `currentStep`: An index representing the current step, starts at 0.
 *  - `steps`: A sorted collection of steps with their title attributes. Useful to render progress bars.
 *  - `moveSteps`: A callback function to instruct the Workflow to move certain amount of steps forward or backwards.
 *
 * ```jsx
 * const Step = ({title, currentStep, steps, moveSteps}} => {
 *   return (
 *     <h1>{title}</h1>
 *     Progress: {currentStep+1}/{steps.length}
 *     <button onClick={() => moveSteps(currentStep+1)}>
 *   )
 * }
 *
 * <MultipleStepFlow>
 *   <Step title="First Step"/>
 *   <Step title="Second Step"/>
 *   <Step title="Final Step"/>
 * </MultipleStepFlow>
 * ```
 *
 * @param name The identificator used to persist the state to redux.
 * @param children The pages that will be rendered one at the time.
 * @param onComplete A callback that will be fired when the last pages has been rendered
 */
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
