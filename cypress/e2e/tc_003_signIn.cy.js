import { SignIn } from "./pages/sign_in"
const signIn = new SignIn()

it('Sign In', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    signIn.clickSignIn()
    signIn.email('muaaz.naeem1@gmail.com')
    signIn.password('Nike-12345')
    signIn.rememberMe()
    signIn.signIn2()
    cy.get('thead > tr > :nth-child(1)')
        .should('contain', 'My Tasks')

 
})