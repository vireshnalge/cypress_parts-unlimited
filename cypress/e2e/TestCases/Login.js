import { Registration_PO } from "../Page Object/Registration_Page.js";
import { LoginPage } from "../Page Object/Login_Page.js"
import { email } from "../../fixtures/Generate Random Data.js";

const registration_po = new Registration_PO()
const a =new LoginPage()

   
    describe('Login', () => {
      it('Login_Step', () => {
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

    //Url
    cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')
    cy.get('#login-link').click()
    //Email
    a.enterUsername(email);
    //Password
    a.enterPassword('Viru@123');
    //Login
    a.clickLogin()
  })
})