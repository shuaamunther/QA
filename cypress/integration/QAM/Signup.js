describe('SignUp', function(){
    it('Sign Up', function(){
        cy.visit('http://dev.bonoud.com/')
        cy.get('.mat-focus-indicator').contains('تسجيل').click()
        cy.get('#name').type('automation_testing5')
        cy.get('#user_name').type('automation_testing5')
        cy.get('#phone').type('0492288645')
        cy.get('#organization_name').type('automation_testing5')
        cy.get('#domain_name').type('automation_testing5')
        cy.get('#email').type('automation_testin5g@g.com')
        cy.get('input[type="password"]').type('asdfghjkl1')
        cy.get('.w-100').contains('تسجيل').click()
        cy.contains('اهلا', {timeout:10000}).should('be.visible')
    })
})

