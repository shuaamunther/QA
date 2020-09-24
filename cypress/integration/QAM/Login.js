describe('Login', function(){
    it('Sign in', function(){
        cy.visit('http://dev.bonoud.com/')
        cy.get('.signin-button').contains('دخول').click()
        cy.get('input[placeholder="اسم المستخدم"]').type('user1')
        cy.get('input[type="password"]').type('asdfghjkl1')
        cy.get('.mat-raised-button').contains('دخول').click()
        //cy.contains('homepage', {timeout:1000})
    })
})
