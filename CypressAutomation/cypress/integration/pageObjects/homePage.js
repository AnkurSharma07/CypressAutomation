class  homePage{

    getUserName(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getEmail(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getPassword(){
        return cy.get(':nth-child(3) > .form-control');
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1');
    }

    getDOB(){
        return cy.get(':nth-child(8) > .form-control');
    }

    getEmploymentStatus(){
        return cy.get('#inlineRadio3');
    }

    getAlert(){
        return cy.get('.alert');
    }

    getDataBinding(){
        return cy.get('.ng-untouched');
    }

    getSubmitButton(){
        return cy.get('.btn');
    }

    getShopLink(){
        return cy.get(':nth-child(2) > .nav-link');
    }
}
export default homePage;