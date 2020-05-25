import React from 'react'

import MultipleStepFlowStory from './MultipleStepFlowStory'
import Account from '../components/signup/pages/Account'
import Privacy from '../components/signup/pages/Privacy'
import ProgressIndicator from "../components/ProgressIndicator";
import Completed from "../components/signup/pages/Completed";
import SignUp from "../components/SignUp";
import {multipleStepStore} from "./MultipleStepFlowStory/store";
import {Provider} from "react-redux";


const steps = [
  { title: 'Your Account'},
  { title: 'Your Privacy'},
  { title: 'All set!'}
]


const Home = () => {
  return (
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

        <ol className="ml-12 list-decimal">
          <li><strong>Demo</strong></li>
          <li><strong>Overview of the API</strong>.</li>
          <li><strong>Storybook</strong>: with an overview of the component breakdown.</li>
        </ol>
      </header>

      <section>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Provider store={multipleStepStore}>
              <SignUp className="w-full"/>
            </Provider>
          </div>
          <div className="w-1/2">
          </div>
        </div>
      </section>

      <h2 className="font-serif tracking-tight text-2xl font-medium leading-10">Storybook</h2>

      <MultipleStepFlowStory/>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">ProgressIndicator</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <ProgressIndicator className="pb-8" currentStep={0} steps={steps}/>
            <ProgressIndicator className="pb-8" currentStep={1} steps={steps}/>
            <ProgressIndicator className="pb-8" currentStep={2} steps={steps}/>
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
            <Provider store={multipleStepStore}>
              <Account className="w-full" currentStep={0} steps={steps}/>
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
            <Provider store={multipleStepStore}>
              <Privacy className="w-full" currentStep={1} steps={steps}/>
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
            <Provider store={multipleStepStore}>
              <Completed className="w-full"  currentStep={2} steps={steps}/>
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
