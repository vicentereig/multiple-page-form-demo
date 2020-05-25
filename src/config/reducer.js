import { createReducer } from '@reduxjs/toolkit'

import { CREATE_ACCOUNT } from "components/SignUp/Account/actions"
import { CREATE_PRIVACY_DETAILS} from "components/SignUp/Privacy/actions"
import { CREATE_WORKFLOW, MOVE } from "components/MultipleStepFlow/actions"
import createAccountReducer from "components/SignUp/Account/reducer"
import privacyDetailsReducer from "components/SignUp/Privacy/reducer"
import {createWorkflowReducer, moveReducer} from "components/MultipleStepFlow/reducer"


const initialState = {
  ui: {},
  models: {}
}

const reducers = {
  CREATE_WORKFLOW: createWorkflowReducer,
  MOVE: moveReducer,
  CREATE_ACCOUNT: createAccountReducer,
  CREATE_PRIVACY_DETAILS: privacyDetailsReducer
}


const rootReducer = createReducer(initialState, reducers)

export default rootReducer
