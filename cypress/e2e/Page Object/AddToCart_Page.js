export class AddtoCart{
     enterUrl(){
        cy.visit('https://partsunlimited-web-apps.azurewebsites.net/')//Url
     }
    enterProduct(){
         //Search product
         cy.get('#search-box').type('Oil')
         //Click Search
         cy.get('#search-link').click()
        //Select Product
         cy.get('.section-alt > :nth-child(2) > :nth-child(2)').click()
         cy.contains('Oil and Filter Combo')
        //Add product
         cy.contains('Add')
         cy.get('.btn').click()
    }
    Checkout(){
        cy.get('.col-xs-12 > div > .btn').should("be.visible","CHECHOUT")
        cy.get('.col-xs-12 > div > .btn').click()
    }
}