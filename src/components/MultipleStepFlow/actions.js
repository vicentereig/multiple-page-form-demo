const CREATE_WORKFLOW = 'CREATE_WORKFLOW'
function createWorkflow(workflowName, steps) {
  return { type: CREATE_WORKFLOW, workflowName, steps}
}

const MOVE = 'MOVE'
function move(workflowName, nextStep) {
  return {type: MOVE, workflowName, nextStep}
}

export { createWorkflow, move, CREATE_WORKFLOW, MOVE}
