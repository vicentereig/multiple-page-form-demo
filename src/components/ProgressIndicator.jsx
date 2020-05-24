import React from "react";

const ProgressIndicator = ({className}) => {

  return (
    <div className={className}>
      <div className="flex content-center">
        <div className="w-1/3 text-left mx-auto text-gray-800 text-xs">
          Your Account
        </div>

        <div className="w-1/3 text-center mx-auto text-gray-800 text-xs">
          Your Privacy
        </div>

        <div className="w-1/3 text-right mx-auto text-gray-800 text-xs">
          All set!
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-800 border-2 border-white mx-auto rounded-full text-white">
          </div>
        </div>

        <div className="w-full content-center items-center align-middle justify-between flex">
          <div className="flex-1">
            <div className="bg-gray-800 text-xs leading-none py-1 w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white">
          </div>
        </div>

        <div className="w-full content-center items-center align-middle justify-between flex">
          <div className="bg-gray-100 flex-1">
            <div className="bg-gray-200 text-xs leading-none py-1 w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white">
            <span className="text-white text-center w-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
