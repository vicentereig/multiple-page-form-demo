import React, { useState } from "react";

const ProgressIndicator = ({className, steps, currentStep}) => {

  const labelWidth = useState(`w-1/${steps.length}`)

  const StepLabel = ({title}) => {
    let className = "mx-auto text-gray-800 text-xs  text-center first:text-left last:text-right".split(" ").concat(labelWidth)

    return (
      <li className={className.join(" ")}>
        {title}
      </li>
    )
  }

  const Labels = ({steps}) => {
    const labels = steps.map((step, i) => <StepLabel key={i}  title={step.title}/>)

    return (
      <ul className="flex content-center">
        {labels}
      </ul>
    )
  }

  const ProgressBar = ({steps, currentStep}) => {

    const Bullet = ({isPending}) => {
      const className = "w-6 h-6  border-2 border-white mx-auto rounded-full text-white"
        .split(" ")
        .concat( isPending ? 'bg-gray-400' : 'bg-gray-800')
        .join(" ")

     return (
       <div className="flex-1">
         <div className={className}>
         </div>
       </div>
     )
    }

    const Edge =({isPending}) => {
      const className = "text-xs leading-none py-1 w-full"
        .split(" ")
        .concat( isPending ? 'bg-gray-400' : 'bg-gray-800')
        .join(" ")

      return (
        <div className="w-full content-center items-center align-middle justify-between flex">
          <div className="flex-1">
            <div className={className}></div>
          </div>
        </div>
      )
    }

    const Step = ({isPending}) => {
      return (
        <>
          <Bullet isPending={isPending}/>
          <Edge isPending={isPending}/>
        </>
      )
    }
    const bar = (
      steps.map((step, i) => {
        if ( i < steps.length - 1 ) {
          return (<Step key={i} isPending={i > currentStep}/>)
        } else {
          return (<Bullet key={i} isPending={i > currentStep}/>)
        }
      })
    )

    return (
      <div className="flex">
        {bar}
      </div>
    )
  }

  return (
    <div className={className}>
      <Labels steps={steps}/>
      <ProgressBar steps={steps} currentStep={currentStep}/>
    </div>
  )
}

export default ProgressIndicator
