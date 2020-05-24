import React from "react";

const ProgressIndicator = ({className, steps=[], currentStep=0}) => {
  const labelWidth = `w-1/${steps.length}`

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
    const Bullet = ({isActive}) => {
      const className = "w-6 h-6  border-2 border-white mx-auto rounded-full text-white"
        .split(" ")
        .concat( isActive ? 'bg-gray-800' : 'bg-gray-400')
        .join(" ")

     return (
       <div className="flex-1">
         <div className={className}>
         </div>
       </div>
     )
    }

    const Edge =({isActive}) => {
      const className = "text-xs leading-none py-1 w-full"
        .split(" ")
        .concat( isActive ? 'bg-gray-800' : 'bg-gray-400')
        .join(" ")

      return (
        <div className="w-full content-center items-center align-middle justify-between flex">
          <div className="flex-1">
            <div className={className}></div>
          </div>
        </div>
      )
    }

    const Step = ({isActive, stepNo}) => {
      return (
        <>
          <Bullet  isActive={stepNo === currentStep}/>
          <Edge isActive={stepNo === currentStep}/>
        </>
      )
    }
    const bar = (
      steps.map((step, i) => {
        if ( i < steps.length - 1 ) {
          return (<Step key={i} stepNo={i}/>)
        } else {
          return (<Bullet key={i} isActive={i === currentStep}/>)
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
