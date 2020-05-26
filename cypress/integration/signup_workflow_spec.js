describe('Signup Workflow', () => {
  describe('Testing the happy path', () => {
    it('Fills up the multiple step form', () => {
      cy.visit('/')
      cy.get('#SignUp input.fullNameField').type('Jane Doe')
      cy.get('#SignUp input.roleField').type('Founder')
      cy.get('#SignUp input.emailField').type('jane@email.com')
      cy.get('#SignUp input.passwordField').type('Passw0rd12345')
      cy.get('#SignUp form').submit()

      cy.get('#SignUp input.productUpdatesField').check()
      cy.get('#SignUp form').submit()

      cy.get('#SignUp > .border > .font-bold').contains('You are all set')
    })

  })
})
