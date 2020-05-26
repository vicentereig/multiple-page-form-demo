describe('Signup Workflow', () => {
  describe('When there are not input errors', () => {
    before(() => {
      cy.visit('/')
    })

    it('The user provides their Account details', () => {
      cy.get('#SignUp input.fullNameField').type('Jane Doe')
      cy.get('#SignUp input.roleField').type('Founder')
      cy.get('#SignUp input.emailField').type('jane@email.com')
      cy.get('#SignUp input.passwordField').type('Passw0rd12345')
      cy.get('#SignUp form').submit()


    })

    it('The user provides their Privacy details', () => {
      cy.get('#SignUp input.productUpdatesField').check()
      cy.get('#SignUp form').submit()
    })

    it('The user reaches successfully the final state', () => {
      cy.get('#SignUp h1').contains('You are all set')
    })
  })

  describe('When the user provides invalid information', () => {
    before(() => {
      cy.visit('/')
    })

    it('They can see the error messages for the invalid fields', () => {
      cy.get('#SignUp form').submit()

      cy.get('#SignUp h1').contains('Setup Your Account')
      cy.get('#SignUp .errorMessage-fullName').contains('Please enter your full name')
      cy.get('#SignUp .errorMessage-email').contains('Please enter your email address')
      cy.get('#SignUp .errorMessage-password').contains('In order to keep your account safe, you need to choose a password')
    })

    describe('When they attempt to choose a password', () => {
      it('that is too short', () => {
        cy.get('#SignUp input.passwordField').clear().type('DOB')
        cy.get('#SignUp .errorMessage-password').contains('Please enter a password at least 10 characters long')
      })

      it('that is missing at least a number', () => {
        cy.get('#SignUp input.passwordField').clear().type('a very long password')
        cy.get('#SignUp .errorMessage-password').contains('Your password needs to include at least one number')
      })

      it('that is missing at least one uppercase and one lowercase', () => {
        cy.get('#SignUp input.passwordField').clear().type('a very long password1')
        cy.get('#SignUp .errorMessage-password').contains('It should contain at least one uppercase and one lowercase character')
      })
    })
  })
})
