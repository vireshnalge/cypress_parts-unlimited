import { email } from "../../fixtures/Generate Random Data"
export  class Registration_PO{

    navigate(){
        cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')
        cy.screenshot()

    }
    Login(){
        cy.contains('Log in')
        cy.get('#login-link').click()
        cy.get(':nth-child(6) > .action-link').click()

    }
    Email(){
        cy.get('#Email').type(email)

    }
    Password(){

        cy.get('#Password').type('Viru@123')
        cy.get('#ConfirmPassword').type('Viru@123')
    }
    Click(){
        cy.get('.btn').should('be.visible','REGISTER')
        cy.get('.btn').click()
    }
}