import React from "react";

const ErrorMessage = ({errors, fieldName}) => {
  if (!errors[fieldName]) {
    return null
  }

  return (
    <span className="text-red-500 text-xs">{errors[fieldName] && errors[fieldName].message}</span>
  )
}

export default ErrorMessage
