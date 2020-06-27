describe('launch my app',()=>{
    it('launching my application in cypress',()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform')
        cy.contains('Platform').click()
        cy.url().should('include','/platform')
        cy.contains('Customers').click()
        cy.url().should('include','/customers')
    })
})