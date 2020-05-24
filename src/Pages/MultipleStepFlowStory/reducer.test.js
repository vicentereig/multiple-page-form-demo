import { multipleStepReducer, logger, createWorkflow, createSteps, move } from "./store";
import {createStore, applyMiddleware} from "redux";



describe('When working with multiple step workflows', () => {
  test('it creates an empty workflow', () => {
    const store = createStore(multipleStepReducer, applyMiddleware(logger))
    store.dispatch(createWorkflow('test'))
    expect(store.getState()).toStrictEqual({models:{}, ui:{test: {steps: [], currentStep: 0 }}})
  })

  test('it adds steps to a workflow', () => {
    const store = createStore(multipleStepReducer, applyMiddleware(logger))
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(name))
    store.dispatch(createSteps(name, steps))

    expect(store.getState()).toStrictEqual({models:{}, ui: {test: {steps, currentStep: 0}}})
  })

  test('it moves forward in a given workflow', () => {
    const store = createStore(multipleStepReducer, applyMiddleware(logger))
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(name))
    store.dispatch(createSteps(name, steps))
    store.dispatch(move(name,1 ))
    expect(store.getState()).toStrictEqual({models:{}, ui: {test: {steps, currentStep: 1}}})
  })


  test('it supports multiple workflows in an app', () => {
    const store = createStore(multipleStepReducer, applyMiddleware(logger))
    const firstFlow = 'firstFlow'
    const name = 'secondFlow'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(name))
    store.dispatch(createWorkflow(firstFlow))
    store.dispatch(createSteps(name, steps))
    store.dispatch(move(name,1 ))
    expect(store.getState()).toStrictEqual({models:{}, ui: {firstFlow: {steps: [], currentStep: 0},
        secondFlow: {steps, currentStep: 1}}})
  })
})

