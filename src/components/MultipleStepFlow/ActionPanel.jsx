import React from "react";

const ActionPanel = ({children}) => {
  return (
    <div className="w-full flex justify-end">
      {children}
    </div>
  )
}

export default ActionPanel
