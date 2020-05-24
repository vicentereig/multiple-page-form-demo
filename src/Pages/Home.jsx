import React from 'react'
import Account from '../components/signup/pages/Account'
import ProgressIndicator from "../components/ProgressIndicator";

const Home = () => {
  const progress = {
    steps:  [
      { title: 'Your Account', completed: true},
      { title: 'Your Privacy', completed: true},
      { title: 'All set!', completed: true}
    ],
    currentStep: 0
  }

  return (
    <article className="p-4">
      <header className="">
        <h1 className="font-serif tracking-tight font-medium text-3xl">Building a Multiple Step Sign-up Process</h1>
        <p className="font-light text-lg">
          We will go over how to build a form with multiple steps, representing
          the sign up process for a service.</p>
      </header>

      <h2 className="font-serif tracking-tight text-2xl font-medium leading-10">Storybook</h2>

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">ProgressIndicator</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <ProgressIndicator steps={progress.steps} currentStep={progress.currentStep}/>
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
            <Account
                className="w-full"
                steps={progress.steps} currentStep={0}
            />
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
