import {createStore, applyMiddleware} from "redux";

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


function multipleStepReducer(state={ui:{}}, action) {
  switch(action.type) {
    case CREATE_WORKFLOW:
      return {...state, ...{ui: {[action.workflowName]: { steps: [], currentStep: 0}}}}
    case CREATE_STEPS:
      return {...state, ...{ui: {[action.workflowName]: { steps: [...action.steps], currentStep: 0}}}}
    case MOVE:
      return {...state, ...{ui: {[action.workflowName]: { steps: [...state.ui[action.workflowName].steps], currentStep: action.nextStep}}}}
    default: return state
  }
}
/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
const multipleStepStore = createStore(multipleStepReducer, applyMiddleware(logger))

export {multipleStepStore, createWorkflow, createSteps, move}
