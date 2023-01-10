import { Registration_PO } from "../Page Object/Registration_Page.js";
import { LoginPage } from "../Page Object/Login_Page.js";
import { AddtoCart } from "../Page Object/AddToCart_Page.js";
import { email } from "../../fixtures/Generate Random Data.js";

const registration_po = new Registration_PO()
const a =new LoginPage()
const addtocart = new AddtoCart()

  describe("Product Search",function(){
    it('Addtocart ', () => {
    registration_po.navigate('https://partsunlimited-web-apps.azurewebsites.net/');//Url
    registration_po.Login(); //Login
    registration_po.Email(email);//Email
    registration_po.Password('Viru@123');//Password
    registration_po.Click();//Click

    a.navigate('https://partsunlimited-web-apps.azurewebsites.net/');//Url
    a.enterUsername(email);//Email
    a.enterPassword('Viru@123');//Password
    a.clickLogin()//Login

    addtocart.enterUrl()
    addtocart.enterProduct()//Search
    addtocart.Checkout()//Checkout
  }) 
})
 

  // it('Search Product',() => {
    // cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')
    // //Search product
    // cy.get('#search-box').type('Oil')
    // //Click Search
    // cy.get('#search-link').click()
    // //Select Product
    // cy.get('.section-alt > :nth-child(2) > :nth-child(2)').click()
    // cy.contains('Oil and Filter Combo')
    // //Add product
    // cy.contains('Add')
    // cy.get('.btn').click()
    // //Checkout
    // cy.get('.col-xs-12 > div > .btn').should("be.visible","CHECHOUT")
    // cy.get('.col-xs-12 > div > .btn').click()

    


   
    
  