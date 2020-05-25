const CREATE_PRIVACY_DETAILS = 'CREATE_PRIVACY_DETAILS'
function createPrivacyDetails(privacy) {
  return {type: CREATE_PRIVACY_DETAILS, privacy }
}

export {createPrivacyDetails, CREATE_PRIVACY_DETAILS}
