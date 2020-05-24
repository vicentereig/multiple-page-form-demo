import React from 'react'
import Account from '../components/signup/pages/Account'
import Privacy from '../components/signup/pages/Privacy'
import ProgressIndicator from "../components/ProgressIndicator";
import SignupComplete from "../components/signup/pages/SignupComplete";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  ui: {
    SignUp: {
      steps: [
        { title: 'Your Account'},
        { title: 'Your Privacy'},
        { title: 'All set!'}
      ],
      currentStep: 0
    }
  }
}
function rootReducer(state, action) {
  switch (action.type) {
    default: return state
  }
}

function firstStepReducer(state=initialState, action) {
  return rootReducer(state, action)
}
const firstStepStore = createStore(firstStepReducer)

const secondStepState = {...initialState, ...{ui: {SignUp: { steps: [...initialState.ui.SignUp.steps], currentStep: 1}}}}
function secondStepReducer(state=secondStepState, action) {
  return rootReducer(state, action)
}
const secondStepStore = createStore(secondStepReducer)

const lastStepState = {...initialState, ...{ui: {SignUp: { steps: [...initialState.ui.SignUp.steps], currentStep: 2}}}}
function lastStepReducer(state=lastStepState, action) {
  return rootReducer(state, action)
}

const lastStepStore = createStore(lastStepReducer)



const Home = () => {
  return (
    <article className="p-4">
      <header className="border-b-2 border-gray-400 pb-8 mb-8">
        <h1 className="font-serif tracking-tight font-medium text-4xl leading-normal pt-4">Building a Multiple Step Sign-up Process</h1>
        <a href="https://github.com/vicentereig/multiple-page-form-demo" className="text-gray-600">View on Github</a>
        <p className="font-light text-md pt-2">
          We will go over how to build a form with multiple steps, representing
          the sign up process for a service.
        </p>
      </header>

      <h2 className="font-serif tracking-tight text-2xl font-medium leading-10">Storybook</h2>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">ProgressIndicator</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={firstStepStore}>
              <ProgressIndicator className="pb-8"/>
            </Provider>
            <Provider store={secondStepStore}>
              <ProgressIndicator className="pb-8"/>
            </Provider>
            <Provider store={lastStepStore}>
              <ProgressIndicator className="pb-8"/>
            </Provider>
          </div>
          <div className="w-1/2">
            <ul className="list-disc pl-8">
              <li>Support an arbitrary amount of steps</li>
              <li>Ability to mark which steps have been completed and which are pending</li>

            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Accounts Detail Page</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={firstStepStore}>
              <Account className="w-full"/>
            </Provider>
          </div>
          <div className="w-1/2">
            <ul className="list-disc pl-8">
              <li>name, email, and password fiels are required</li>
              <li>password should be greater than 9 chars and at least one
              number, one char uppercase, one char lowercase.</li>
              <li>
                Next button initially renders disabled, blocking form progress.
                It's enabled when this step of the form is valid.
              </li>
              <li>It will show a progress bar indicating the name
              of the current page, what's being completed, and what's ahead.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Privacy Detail Page</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={secondStepStore}>
              <Privacy className="w-full"/>
            </Provider>
          </div>
          <div className="w-1/2">
            <ul className="list-disc pl-8">
              <li>name, email, and password fiels are required</li>
              <li>password should be greater than 9 chars and at least one
                number, one char uppercase, one char lowercase.</li>
              <li>
                Next button initially renders disabled, blocking form progress.
                It's enabled when this step of the form is valid.
              </li>
              <li>It will show a progress bar indicating the name
                of the current page, what's being completed, and what's ahead.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Signup Complete</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={secondStepStore}>
              <SignupComplete className="w-full"/>
            </Provider>
          </div>
          <div className="w-1/2">
            <ul className="list-disc pl-8">
              <li>name, email, and password fiels are required</li>
              <li>password should be greater than 9 chars and at least one
                number, one char uppercase, one char lowercase.</li>
              <li>
                Next button initially renders disabled, blocking form progress.
                It's enabled when this step of the form is valid.
              </li>
              <li>It will show a progress bar indicating the name
                of the current page, what's being completed, and what's ahead.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Home
