class  shopPage{

    getCheckoutButton(){
        return cy.contains('Checkout').click();
    }

    getCountry(){
        return cy.get('#country');
    }
     
}
export default shopPage;