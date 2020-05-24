import {createStore, applyMiddleware} from "redux"
import { createReducer } from '@reduxjs/toolkit'

const CREATE_WORKFLOW = 'CREATE_WORKFLOW'
function createWorkflow(workflowName) {
  return { type: CREATE_WORKFLOW, workflowName}
}
const CREATE_STEPS = 'CREATE_STEPS'
function createSteps(workflowName, steps) {
  return {type: CREATE_STEPS, workflowName, steps}
}

const MOVE = 'MOVE'
function move(workflowName, nextStep) {
  return {type: MOVE, workflowName, nextStep}
}


const multipleStepReducer = createReducer({ui:{}, models:{}}, {
  CREATE_WORKFLOW: (state, action ) => void (state.ui[action.workflowName] = { steps: [], currentStep: 0 }),
  CREATE_STEPS: (state, action) => void(state.ui[action.workflowName].steps = action.steps),
  MOVE: (state, action) => void(state.ui[action.workflowName].currentStep = action.nextStep)
})

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
const multipleStepStore = createStore(multipleStepReducer, applyMiddleware(logger))

export {multipleStepStore, multipleStepReducer, logger, createWorkflow, createSteps, move}
