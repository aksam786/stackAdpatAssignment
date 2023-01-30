/// <reference types="cypress"/>

it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').click()
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')

    // expect(true).to.be.true

    // assert.equal(4,'4', 'NOT EQUAL')
    // assert.strictEqual(4,'4', 'NOT STRICTLY EQUAL')
})