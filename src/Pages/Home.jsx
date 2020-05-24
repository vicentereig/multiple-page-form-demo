import React from 'react'
import Account from '../components/signup/pages/Account'
import Privacy from '../components/signup/pages/Privacy'
import ProgressIndicator from "../components/ProgressIndicator";
import SignupComplete from "../components/signup/pages/SignupComplete";

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
      <header className="border-b-2 border-gray-400 pb-8 mb-8">
        <h1 className="font-serif tracking-tight font-medium text-4xl leading-normal pt-4">Building a Multiple Step Sign-up Process</h1>
        <a href="https://github.com/vicentereig/multiple-page-form-demo" class="text-gray-600">View on Github</a>
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
            <ProgressIndicator className="pb-8" steps={progress.steps} currentStep={0}/>
            <ProgressIndicator className="pb-8" steps={progress.steps} currentStep={1}/>
            <ProgressIndicator className="pb-8" steps={progress.steps} currentStep={2}/>
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

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Privacy Detail Page</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Privacy
              className="w-full"
              steps={progress.steps} currentStep={1}
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

      <section>
        <h3 className="font-serif tracking-tight text-xl font-medium leading-10">Signup Complete</h3>
        <div className="flex flex-row">
          <div className="w-1/2">
            <SignupComplete
              className="w-full"
              steps={progress.steps} currentStep={2}
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
