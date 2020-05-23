import React from 'react'
import Account from '../components/signup/pages/Account'

const Home = () => {
  return (
    <article className="p-4">
      <header className="">
        <h1 className="font-serif tracking-tight font-medium text-2xl">Building a Multiple Step Sign-up Process</h1>
        <p className="font-light text-lg">
          We will go over how to build a form with multiple steps, representing
          the sign up process for a service.</p>


      </header>

      <section>
        <h2 className="font-serif tracking-tight text-xl font-medium leading-10">Storybook</h2>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Account className="w-full"/>
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
