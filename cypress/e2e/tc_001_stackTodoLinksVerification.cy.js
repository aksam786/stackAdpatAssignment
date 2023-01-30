
import { LinksVerification } from "./pages/links_Verification"
const mvp = new LinksVerification()


it('Stack Adapt Links Verification', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    mvp.signUp()
    cy.get('#submit')
        .should('contain', 'Sign up')
    cy.wait(1000)
    mvp.login()
    cy.get('#submit')
        .should('contain', 'Sign in')
    cy.wait(1000)
    mvp.calendar()
    cy.get('.mt-5')
        .should('contain', 'Coming soon!')
    cy.wait(1000)
    mvp.integration()
    cy.get('.mt-5')
        .should('contain', 'Coming soon!')
    cy.wait(1000)
    mvp.faq()
    cy.get('.mt-5')
        .should('contain', 'Coming soon!')
 
})
