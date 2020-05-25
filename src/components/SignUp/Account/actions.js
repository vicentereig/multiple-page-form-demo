const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
function createAccount(account) {
  return {type: CREATE_ACCOUNT, account}
}

export  {createAccount, CREATE_ACCOUNT}
