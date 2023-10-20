//<reference type='Cypress'/>

describe('First Test',() => {
    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
       

        cy.get('#product tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(val){
                     const priceVal = val.text()
                     cy.log(priceVal)
                     expect(priceVal).to.equal('25')
                })                
            }
        })


    })
})