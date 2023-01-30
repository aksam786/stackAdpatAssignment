import { Logout } from "./pages/log_out"
const logout = new Logout()

it('Logout', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    logout.clickSignIn()
    logout.email('muaaz.naeem1@gmail.com')
    logout.password('Nike-12345')
    logout.rememberMe()
    logout.signIn2()
    logout.clickUserName()
    cy.wait(2000)
    logout.logout2()


 
})