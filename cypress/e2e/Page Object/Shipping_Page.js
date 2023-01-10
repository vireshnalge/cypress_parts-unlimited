export class Shipping{
     
    enterShippingDetails(){
        //Name
        cy.get('#Name').type('Viresh')
        //Phone
        cy.get('#Phone').type('6070809880')
        //Email
        //cy.get('#Email').should('conatin','Exten@gmail.com')
        //Address
        cy.get('#Address').type('OmSantee Nivas')
        //City
        cy.get('#City').type('Pune')
        //State
        cy.get('#State').type('Maharastra')
        //PostalCode
        cy.get('#PostalCode').type('423569')
        //Country
        cy.get('#Country').type('India')
    }
    enterPromocode(){
        //PromoCode
        cy.get('#PromoCode').type('FREE').should('be.visible','FREE')
    }
    Submit(){
         //Submit Order
         cy.get('.wide-col-padding > :nth-child(4) > input').click()
         cy.get('.col-sm-12 > :nth-child(2)').should('contain','Your order number is:')
    }
    Logout(){
        //Logout
        cy.get('#profile-link').click()
       // cy.get('.open > .dropdown-menu > :nth-child(3) > a').as('Log off').click()
       //cy.contains('Log off').click()

    }

   
}