import { multipleStepStore, createWorkflow, createSteps, move } from "./store";

describe('When working with multiple step workflows', () => {
  test('it creates an empty workflow', () => {
    multipleStepStore.dispatch(createWorkflow('test'))
    expect(multipleStepStore.getState()).toStrictEqual({ui:{test: {steps: [], currentStep: 0 }}})
  })

  test('it adds steps to a workflow', () => {
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    multipleStepStore.dispatch(createWorkflow(name))
    multipleStepStore.dispatch(createSteps(name, steps))

    expect(multipleStepStore.getState()).toStrictEqual({ui: {test: {steps, currentStep: 0}}})
  })

  test('it moves forward in a given workflow', () => {
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    multipleStepStore.dispatch(createWorkflow(name))
    multipleStepStore.dispatch(createSteps(name, steps))
    multipleStepStore.dispatch(move(name,1 ))
    expect(multipleStepStore.getState()).toStrictEqual({ui: {test: {steps, currentStep: 1}}})
  })
})

