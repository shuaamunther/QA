it('Edit employee', function () {
    cy.visit('https://user1.dev.bonoud.com/')
    cy.get('#user_name').type('user1')
    cy.get('input[type="password"]').type('asdfghjkl1')
    cy.get('.mat-raised-button').contains('دخول').click()
    cy.visit('https://user1.dev.bonoud.com/staff')
    cy.get('mat-card-actions').children('button').first().click()
    cy.get('#name').clear();
    cy.get('#name').type('auto_employee')
    cy.get('#phone').clear()  
    cy.get('#phone').type('0492288612')  
    cy.get('#email').clear()
    cy.get('#email').type('automation_testing_employee@g.com')
    cy.get('mat-select[formcontrolname="gender"]').click();
    cy.get('mat-option').contains('ذكر').click();
    cy.get('mat-select[formcontrolname="status"]').click();
    cy.get('mat-option').contains('نشط').click();
    cy.get('#address').clear()
    cy.get('#address').type('Nablus')
    cy.get('#job_description').clear()
    cy.get('#job_description').type('UN')
    cy.get('#date_of_birth').clear()
    cy.get('button[aria-label="Open calendar"]').click()
    cy.get('mat-calendar').click()
    cy.get('input[type="password"]').type('asdfghjkl1')
    cy.get('button[color="primary"]').contains('تعديل').click() 
})

