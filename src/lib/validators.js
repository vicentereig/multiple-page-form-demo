const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const atLeastOneUpperAndLower = (value) => {
  return value.replace(/([A-Z][a-z])+/g,"").length < value.length ||
    'It should contain at least one uppercase and one lowercase character'
}

const atLeastOneNumber = (value) => {
  return value.replace(/[\d]+/g,"").length < value.length  ||
    'Your password needs to include at least one number'
}

export {atLeastOneNumber, atLeastOneUpperAndLower, emailPattern }
