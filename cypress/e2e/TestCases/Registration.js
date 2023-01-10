import { email } from "../../fixtures/Generate Random Data";

import { Registration_PO } from "../Page Object/Registration_Page";
const registration_po = new Registration_PO()

describe('Registration', () => {
   it('Registration_Step', () => {
     //Url
     registration_po.navigate('https://partsunlimited-web-apps.azurewebsites.net/');
     //Login
     registration_po.Login();
     //Email
     registration_po.Email(email);
     //Password
     registration_po.Password('Viru@123');
     //Click
     registration_po.Click();
    })
  })

    //  cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')//Url
    //  cy.screenshot()
    //  cy.contains('Log in')
    //  cy.get('#login-link').click()//Click on login
    //  cy.get(':nth-child(6) > .action-link').click()
    //  cy.get('#Email').type(email)//Email
    //  cy.get('#Password').type('Viru@123')//Password
    //  cy.get('#ConfirmPassword').type('Viru@123')//ConfirmPassword
    //  cy.get('.btn').should('be.visible','REGISTER')//Resister
    //  cy.get('.btn').click()
  
 
