import { SignUp } from "./pages/sign_up"
const signUp = new SignUp()

it('Sign Up', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    signUp.signUp2('Ahsan Saleem', 'muaaz.ca7@gmail.com', 'Nike-12345')
    cy.get('thead > tr > :nth-child(1)')
        .should('contain', 'My Tasks')

 
})
