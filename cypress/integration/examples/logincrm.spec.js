/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import LoginPage from '../pageobjects/LoginPage'

describe('login into crm application',function(){

    it('verify user is login successfully',function(){
       const loginPage = new LoginPage()
       cy.visit('https://classic.freecrm.com/index.html')
       cy.title().should('have','CRMPRO  - CRM software for customer relationship management, sales, and support.')
       loginPage.doLogin('batchautomation','Test@12345')
      // cy.get("input[name='username']").type('batchautomation')
       //cy.get("input[name='password']").type('Test@12345')
       //cy.get("input[value='Login']").click()
       cy.title().should('have','CRMPRO')
       cy.title().should('include','CRMPRO')

       //cy.frameLoaded("frame[name='mainpanel']")
       cy.get("frame[name='mainpanel']")
         .its('0.contentDocument').should('not.be.empty')
         .its('body').should('not.be.undefined')
         .then(cy.wrap)
         .find("a[title=Deals]").should('have.text', 'Deals').click()
       
       

    })
})