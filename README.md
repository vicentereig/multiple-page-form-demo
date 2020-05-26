# Multiple Step Workflow

 `MultipleStepFlow` allows you to present the user with a
 task that must be accomplished in several steps completed one at the time.

 You can find a demo at https://vicentereig.github.io/multiple-page-form-demo/. 

 Usually, after the user completes a task, they click on a button
 to move onto the next step.

 Steps can be any kind of Component. `MultipleStepFlow` makes sure
 they have access via props to information related to
 where the user is at in the current workflow,
 and how to move onto the next task.

 Steps are rendered sequentially in the order they are defined
 in the JSX template. The last Step is considered the Final State.

 When the MultipleStepFlow renders the Final State, it invokes
 a callback, to notify the parent Component that the overall set
 of tasks are completed.

 Every Step has access to the following properties:
  - `title`: a short description of the current task at hand.
  - `currentStep`: An index representing the current step, starts at 0.
  - `steps`: A sorted collection of steps with their title attributes. Useful to render progress bars.
  - `moveSteps`: A callback function to instruct the Workflow to move certain amount of steps forward or backwards.

 ```jsx
 const Step = ({title, currentStep, steps, moveSteps}} => {
   return (
     <h1>{title}</h1>
     Progress: {currentStep+1}/{steps.length}
     <button onClick={() => moveSteps(currentStep+1)}>
   )
 }

 <MultipleStepFlow>
   <Step title="First Step"/>
   <Step title="Second Step"/>
   <Step title="Final Step"/>
 </MultipleStepFlow>
 ```


## Development Setup
 
In order to get yourself ready to run this locally, you need to follow these steps:

1. Clone the repo: `git clone git@github.com:vicentereig/multiple-page-form-demo.git` 
2. Install the dependencies: `cd multiple-page-form-demo && yarn install`

Once you've set the project up, spawn the development web server by typing `yarn start`
and point your browser to http://localhost:3000

If you want to update the contents of the [demo page](https://vicentereig.github.io/multiple-page-form-demo/),
type `yarn build` and commit the changes in the `docs/` directory.

## Running Tests

The project comes with unit and end to end tests for the most important
parts of the code. 
- to run the unit tests type `yarn test` 
- to run the end to end test `npx cypress run`



