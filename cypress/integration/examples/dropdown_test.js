describe('dropdown test in orange hrm application',function(){
    it('check select dropdown',function(){
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')
    })

    it('check google search dropdown',function(){
        cy.visit('https://www.google.com/')
        cy.get("[name='q']").type('cypress')
        cy.get('ul.erkvQe')
        .find('li span')
        .contains('cypress tutorial').click()
    })

    it('check amazon product search dropdown',function(){
        cy.visit('https://www.amazon.in/')
        cy.get("#twotabsearchtextbox").type('laptops')
        cy.get('#suggestions')
        .find('div span:nth-child(2)')
        .contains('lenovo').click()
    })
})