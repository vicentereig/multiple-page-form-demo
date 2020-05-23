import React from "react";

const ProgressIndicator = () => {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex-no-grow">
          <div className="w-6 h-6 bg-gray-800 border-2 border-white mx-auto rounded-full
        text-white flex">
          </div>
        </div>

        <div className="w-full items-center justify-between content-center flex">
          <div className="w-full items-center align-middle align-center flex-1">
            <div className="bg-gray-800 text-xs leading-none py-1  w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white flex items-center">
          </div>
        </div>

        <div className="w-full align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
            <div className="bg-gray-200 text-xs leading-none py-1 w-full"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-6 h-6 bg-gray-400 border-2 border-white mx-auto rounded-full
        text-md text-white flex items-center">
            <span className="text-white text-center w-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
