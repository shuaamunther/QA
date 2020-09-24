it('Edit Organization', function () {
    cy.visit('https://user1.dev.bonoud.com/')
    cy.get('#user_name').type('user1')
    cy.get('input[type="password"]').type('asdfghjkl1')
    cy.get('.mat-raised-button').contains('دخول').click()
    cy.visit('https://user1.dev.bonoud.com/organization')
    cy.get('button').contains('تعديل').click()
    cy.get('#name').clear();
    cy.get('#name').type('automation_O')
    cy.get('#phone').clear()  
    cy.get('#phone').type('0492288616')  
    cy.get('#email').clear()
    cy.get('#email').type('automation_testing@g.com')
    cy.get('#address').clear()
    cy.get('#address').type('Nablus')
    const imageName = 'wrong_response.png';
    cy.get('ngx-mat-file-input').attachFile(imageName);
    cy.get('button[color="primary"]').contains('حفظ').click() 
    //cy.contains("تم تعديل بنجاح",{timeout:100})
})