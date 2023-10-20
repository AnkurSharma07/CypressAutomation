//<reference type='Cypress'/>

describe('First Test',() => {
    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productDiv')
        cy.get('@productDiv').find('.product').should('have.length',4)

        cy.get('@productDiv').find('.product').each(($el, index, $list) => {
            const veg = $el.find('h4.product-name').text()
            if (veg.includes('Capsicum')){
                cy.wrap($el).find('button').click()
            }
        })
        
        cy.get('.brand').then(function(logoEle){
            cy.log(logoEle.text());
        })

        


    })
})

