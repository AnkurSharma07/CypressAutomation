//<reference type='Cypress'/>
//<reference type='cypress-iframe'/>


import 'cypress-iframe'

describe('Framework First SetUp', function() {

    this.beforeEach(function(){
        cy.visit(Cypress.env('url')+'/angularpractice/');
    })

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.wait(2000)

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get(':nth-child(2) > .form-control').type(this.data.email)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)   
        
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()

        cy.selectProduct('Blackberry')
        cy.contains('Checkout').click()
        
        


    })

    after(function(){
        cy.log('After Function is called')
    })

    this.afterEach(function(){
        cy.log('After Each Function is called')
    })
})