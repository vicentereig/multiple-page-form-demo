import rootReducer from "config/reducer"
import {createStore, applyMiddleware} from "redux"
import {logger} from "config/middleware"
import {createWorkflow} from "./actions"
import {move} from "./actions"


describe('When working with multiple step workflows', () => {
  let store;

  beforeEach( () => {
    store = createStore(rootReducer, applyMiddleware(logger))
  })
  test('it creates an empty workflow', () => {
    store.dispatch(createWorkflow('test', []))
    expect(store.getState()).toStrictEqual({models:{}, ui:{test: {steps: [], currentStep: 0 }}})
  })

  test('it adds steps to a workflow', () => {
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(name, steps))

    expect(store.getState()).toStrictEqual({models:{}, ui: {test: {steps, currentStep: 0}}})
  })

  test('it moves forward in a given workflow', () => {
    const name = 'test'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(name, steps))
    store.dispatch(move(name,1 ))
    
    expect(store.getState()).toStrictEqual({models:{}, ui: {test: {steps, currentStep: 1}}})
  })


  test('it supports multiple workflows in an app', () => {
    const firstFlow = 'firstFlow'
    const secondFlow = 'secondFlow'
    const steps = [{title: 'First step'}, {title: 'Final step'}]

    store.dispatch(createWorkflow(firstFlow, []))
    store.dispatch(createWorkflow(secondFlow, steps))
    store.dispatch(move(secondFlow,1 ))

    expect(store.getState()).toStrictEqual({models:{}, ui: {firstFlow: {steps: [], currentStep: 0},
        secondFlow: {steps, currentStep: 1}}})
  })
})

