import {createStore, applyMiddleware} from "redux"
import { createReducer } from '@reduxjs/toolkit'

const CREATE_WORKFLOW = 'CREATE_WORKFLOW'
function createWorkflow(workflowName, steps) {
  return { type: CREATE_WORKFLOW, workflowName, steps}
}


const MOVE = 'MOVE'
function move(workflowName, nextStep) {
  return {type: MOVE, workflowName, nextStep}
}

const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
function createAccount(account) {
  return {type: CREATE_ACCOUNT, account}
}

const CREATE_PRIVACY_DETAILS = 'CREATE_PRIVACY_DETAILS'
function createPrivacyDetails(privacy) {
  return {type: CREATE_PRIVACY_DETAILS, privacy }
}


const multipleStepReducer = createReducer({ui:{}, models:{}}, {
  CREATE_WORKFLOW: (state, action ) => void (state.ui[action.workflowName] = { steps: action.steps, currentStep: 0 }),
  MOVE: (state, action) => void(state.ui[action.workflowName].currentStep = action.nextStep),
  CREATE_ACCOUNT: (state, action) => void(state.models.account = action.account),
  CREATE_PRIVACY_DETAILS: (state, action) => void(state.models.account.privacy = action.privacy)
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

export { multipleStepStore, multipleStepReducer, move,
         createWorkflow,
          createAccount, createPrivacyDetails }
