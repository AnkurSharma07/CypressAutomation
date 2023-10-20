// <reference types="Cypress" />


import homePage from "../pageObjects/homePage";
import shopPage from "../pageObjects/shopPage";


describe('Home Page Suite', function () {

    this.beforeEach(function () {
        cy.visit(Cypress.env('url') + '/angularpractice/')
    });

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('First Test', function () {
        const homePg = new homePage();
        const shopPg = new shopPage();
        
        homePg.getUserName().type(this.data.name);
        homePg.getUserName().should('have.attr','minlength',2);

        homePg.getEmail().type(this.data.email);
        homePg.getGender().select(this.data.gender);

        homePg.getEmploymentStatus().should('be.disabled');
        homePg.getSubmitButton().click();
        homePg.getAlert().should('be.visible');
        homePg.getAlert().then(function(val){
            const value = val.text();
            cy.log(value);
        })

        homePg.getShopLink().click();

        this.data.products.forEach(function(productName){
            cy.selectProduct(productName);
        });

        //shopPg.getCheckoutButton().click();
        //cy.wait(8000);
        //shopPg.getFinalCheckoutButton().click();
        cy.contains('Checkout').click();
        cy.wait(2000);
        cy.get('').each(($e1,index,$list) => {

        });



        cy.contains('Checkout').click();
        shopPg.getCountry().type('India');
        
        cy.get('.suggestions ul>li>a').click();        
        cy.get('#checkbox2').click({force:true});
        cy.get('input[type="submit"]').click();
        cy.get('.alert').then(function(val){
            const text = val.text();
            expect(text.includes('Success')).to.be.true;
        });

    });
    
    





    after(function () {
        cy.log('After Function is called')
    })

    this.afterEach(function () {
        cy.log('After Each Function is called')
    })


})