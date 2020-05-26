import React from "react";

const ErrorMessage = ({errors, fieldName}) => {
  if (!errors[fieldName]) {
    return null
  }
  const className = `text-red-500 text-xs errorMessage-${fieldName}`
  const {message} = errors[fieldName]
  return (
    <span className={className}>{message}</span>
  )
}

export default ErrorMessage
