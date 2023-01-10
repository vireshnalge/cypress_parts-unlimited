import { email } from "../../fixtures/Generate Random Data"
export class LoginPage{  
    navigate(){
        cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')
        cy.get('#login-link').click()
    }
     enterUsername(){
        cy.get('#Email').type(email)
    }
    enterPassword(){
        cy.get('#Password').type('Viru@123')
    }
    clickLogin(){
     cy.get('.btn').click()
    } 
}
