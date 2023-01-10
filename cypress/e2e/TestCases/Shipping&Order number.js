import { Registration_PO } from "../Page Object/Registration_Page.js";
import { LoginPage } from "../Page Object/Login_Page.js";
import { AddtoCart } from "../Page Object/AddToCart_Page.js";
import { Shipping } from "../Page Object/Shipping_Page.js";
import { email } from "../../fixtures/Generate Random Data.js";

const registration_po = new Registration_PO()
const shipping  = new Shipping()
const addtocart = new AddtoCart()
const loginPage = new LoginPage()

describe('ShippingInformation',()=>{
    it('ShippingInformation',()=>{
         registration_po.navigate('https://partsunlimited-web-apps.azurewebsites.net/');//Url
         registration_po.Login(); //Login
         registration_po.Email(email);//Email
         registration_po.Password('Viru@123');//Password
         registration_po.Click();//Click
    
         loginPage.navigate('https://partsunlimited-web-apps.azurewebsites.net/');
         loginPage.enterUsername(email);
         loginPage.enterPassword('Viru@123');
         loginPage.clickLogin()

         addtocart.enterUrl()
         addtocart.enterProduct()
         addtocart.Checkout()

         shipping.enterShippingDetails()//ShippingDetails
         shipping.enterPromocode()//Promocode
         shipping.Submit()//Submit
         shipping.Logout()//Logout
   })
})
    


  
    // it('Shipping Informatio & Order Number',() =>{


    // shipping.enterShippingDetails()
    // shipping.enterPromocode()
    // shipping.Submit()
    
    // //Name
    // cy.get('#Name').type('Viresh')
    // //Phone
    // cy.get('#Phone').type('6070809880')
    // //Email
    // cy.get('#Email').should('conatin','Exten@gmail.com')
    // //Address
    // cy.get('#Address').type('OmSantee Nivas')
    // //City
    // cy.get('#City').type('Pune')
    // //State
    // cy.get('#State').type('Maharastra')
    // //PostalCode
    // cy.get('#PostalCode').type('423569')
    // //Country
    // cy.get('#Country').type('India')
    // //PromoCode
    // cy.get('#PromoCode').type('FREE').should('be.visible','FREE')
    // //Submit Order
    // cy.get('.wide-col-padding > :nth-child(4) > input').click()

