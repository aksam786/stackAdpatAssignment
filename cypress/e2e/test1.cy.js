/// <reference types="cypress"/>

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Muaaz Naeem{Enter}')
    cy.wait(2000)
    
})
