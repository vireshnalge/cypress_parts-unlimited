import { LoginPage } from "../Page Object/Login_page";
import { AddtoCart } from "../Page Object/AddToCartPage";
import { Shipping } from "../Page Object/Shipping";
import { email } from "./Registratio";

const loginPage =new LoginPage()
const addtocart = new AddtoCart()
const shipping  = new Shipping()

describe("All_Test",function(){
  it('Login ', () => {
    loginPage.navigate('https://partsunlimited-web-apps.azurewebsites.net/');
    loginPage.enterUsername(email)
    loginPage.enterPassword('Viru@123');
    loginPage.clickLogin()
  
   })
  it('AddtoCart',() => {
    addtocart.enterUrl()
    addtocart.enterProduct()
    addtocart.Checkout()
   })
  it('ShippingInformation',() => {

    shipping.enterShippingDetails()
    shipping.enterPromocode()
    shipping.Submit()
    shipping.Logout()
  })
    

})
