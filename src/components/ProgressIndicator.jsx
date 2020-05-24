import React, { useState } from "react";
import { useSelector } from 'react-redux'

const ProgressIndicator = ({className}) => {
  const currentStep = useSelector( state => state.ui.SignUp.currentStep )
  const allSteps = useSelector( state => state.ui.SignUp.steps )

  const labelWidth = useState(`w-1/${allSteps.length}`)

  const StepLabel = ({title, isFirst, isLast}) => {
    let className = "mx-auto text-gray-800 text-xs".split(" ").concat(labelWidth)

    if (isFirst) {
      className.push('text-left')
    } else if (isLast) {
      className.push('text-right')
    } else {
      className.push('text-center')
    }

    return (
      <div className={className.join(" ")}>
        {title}
      </div>
    )
  }

  const Labels = ({steps}) => {
    const labels = steps.map((step, i) => <StepLabel key={i} isFirst={i === 0} isLast={i === steps.length - 1} title={step.title}/>)

    return (
      <div className="flex content-center">
        {labels}
      </div>
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
      <Labels steps={allSteps}/>
      <ProgressBar steps={allSteps} currentStep={currentStep}/>
    </div>
  )
}

export default ProgressIndicator
