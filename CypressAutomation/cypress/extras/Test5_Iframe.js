//<reference type='Cypress'/>
//<reference type='cypress-iframe'/>


import 'cypress-iframe'

describe('First Test', function() {
    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        
        

    })
})