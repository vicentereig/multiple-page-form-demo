const createWorkflowReducer = (state, action ) => void (state.ui[action.workflowName] = { steps: action.steps, currentStep: 0 })
const moveReducer = (state, action) => void(state.ui[action.workflowName].currentStep = action.nextStep)

export {createWorkflowReducer, moveReducer}
