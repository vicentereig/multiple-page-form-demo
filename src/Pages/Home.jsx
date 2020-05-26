import React from 'react'

import MultipleStepFlowStory from './MultipleStepFlowStory'

import Account from 'components/SignUp/Account'
import Privacy from 'components/SignUp/Privacy'
import Completed from "components/SignUp/Completed"
import SignUp from "components/SignUp";

import ProgressIndicator from "../components/ProgressIndicator";

import store from "config/store"
import {Provider} from "react-redux";


const steps = [
  { title: 'Your Account'},
  { title: 'Your Privacy'},
  { title: 'All set!'}
]


const Home = () => {
  return (
    <>
    <article className="p-4">
      <header className="border-b-2 border-gray-400 pb-8 mb-8">
        <h1 className="font-serif tracking-tight font-medium text-4xl leading-normal pt-4">Building a Multiple Step Sign-up Process</h1>
        <a href="https://github.com/vicentereig/multiple-page-form-demo" className="text-gray-600">View on Github</a>
        <p className="font-light text-md pt-2">
          Hi there!

          Thanks for taking a look at this project. The goal is to
          write a Multiple Page Form that is easy to extend. This document will
          walk you through over the following sections:
        </p>

        <ol className="font-light text-md pt-2 ml-12 list-decimal">
          <li><strong>Interactive Demo</strong></li>
          <li><strong>Storybook</strong>: a breakdown of the low-fi components used in the multiple step form.</li>
        </ol>

        <p className="font-light text-md pt-2">Head over to the <a class="text-blue-400 underline font-medium" href="https://github.com/vicentereig/multiple-page-form-demo/blob/master/README.md">
            README.md
          </a> to learn how to use the code, set it up, and extend it.
        </p>
      </header>


      <section>
        <h2 className="font-serif tracking-tight text-2xl font-medium leading-10">Interactive Demo</h2>
        <p>When you have completed the three steps in the workflow, it will `console.log` a JSON object
          containing all the information you entered.</p>
        <div className="pt-8 flex flex-row">
          <div className="mx-auto w-1/3">
            <Provider store={store}>
              <SignUp className="w-full"/>
            </Provider>
          </div>
        </div>
      </section>
    </article>

    <article className="p-4">
      <h1 className="font-serif tracking-tight text-3xl font-medium leading-10">Storybook</h1>
      <p>Find below a collection of low-fidelity components used to build the multiple step workflow incrementally.</p>

      <MultipleStepFlowStory/>

      <section className="pt-4">
        <h2 className="font-serif tracking-tight text-xl font-medium leading-10">ProgressIndicator</h2>
        <div className="flex flex-row">
          <div className="w-1/2">
            <ProgressIndicator className="pb-8" currentStep={0} steps={steps}/>
            <ProgressIndicator className="pb-8" currentStep={1} steps={steps}/>
            <ProgressIndicator className="pb-8" currentStep={2} steps={steps}/>
          </div>
          <div className="pl-8 w-1/2">
            <p>
              Here's a simple progress indicator. It takes an arbitrary set of steps with their titles,
              and renders them, while being able to make a difference whether they are completed or not.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Accounts Detail Page</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={store}>
              <Account className="w-full" currentStep={0} steps={steps}/>
            </Provider>
          </div>
          <div className="pl-8 w-1/2">
            <p>
              The first step in the workflow collects relevant information to let a user create an account.
            </p>

            <p>
              It receives via props the <code>currentStep</code> and <code>steps</code> in the workflow, which
              will be passed by the <code>MultipleStepFlow</code> component governing the rendering and progress
              in the experience.
            </p>

            <p>This form is considered valid when the following validation rules are met:</p>

            <ul className="list-disc pl-12">
              <li>name, email, and password fiels are required.</li>
              <li>password should be greater than 9 chars and at least one
              number, one char uppercase, one char lowercase.
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section className="pt-4">
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Privacy Detail Page</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={store}>
              <Privacy className="w-full" currentStep={1} steps={steps}/>
            </Provider>
          </div>
          <div className="pl-8 w-1/2">
            <p>Checkboxes in this step are optional, so the user can skip to the last step if they want to.</p>
          </div>
        </div>
      </section>

      <section className="pt-4">
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Signup Complete</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={store}>
              <Completed className="w-full"  currentStep={2} steps={steps}/>
            </Provider>
          </div>
          <div className="pl-8 w-1/2">
            <p>
              While the final step shows a confirmation message, it notifies the <code>MultipleStepFlow</code>
              component that the user has reached the end. This way we can act in consequence, in this very case,
              it <code>console.log</code> the JSON structure representing the sign up.
            </p>
          </div>
        </div>
      </section>
    </article>
    </>
  )
}

export default Home
