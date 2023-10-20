//<reference type='Cypress'/>

describe('First Test',() => {
    it('CheckOut the Cypress Guide - Help Doc for Better Understanding', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)

        cy.get('#opentab').then(function(el){
           const url = el.prop('href')
           cy.visit(url)
           cy.origin(url,()=>{
                cy.get("div.sub-menu-bar a[href*='about']").click()
                //We have to put all the commands which we want to execute in another domain or 
                //website on which we moved
                
           })
           cy.visit(url)
        })

        

    })
})