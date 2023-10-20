//<reference type='Cypress'/>


describe('My First Test', () => {
    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', () => {
       cy.visit('https://example.cypress.io/')

       //cy.contains('get').click()
       //cy.url().should('include','/commands/querying')
        cy.contains('type').click()
        cy.get('.action-email').type('ankurrishi20@gmail.com').should('have.value','ankurrishi20@gmail.com')

        cy.get('.action-disabled').type('Disabled Error Checking', {force:true}).should('have.value','Disabled Error Checking')
        cy.wait(2000)
        cy.visit('https://example.cypress.io/')
        cy.get('.home-list li>a').should('have.value',110)
        
    
    })
})