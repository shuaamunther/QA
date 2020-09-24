
    
    it('Add employee', function () {
        cy.visit('https://user1.dev.bonoud.com/')
        cy.get('#user_name').type('user1')
        cy.get('input[type="password"]').type('asdfghjkl1')
        cy.get('.mat-raised-button').contains('دخول').click()
        cy.visit('https://user1.dev.bonoud.com/staff')
        cy.get('mat-icon', {timeout:100}).contains('add').click();
        cy.get('#name').type('automation_testing_employee')
        cy.get('#user_name').type('automation_testing_employee')
        cy.get('#phone').type('0492288612')  
        cy.get('#email').type('automation_testing_employee@g.com')
        cy.get('mat-select[formcontrolname="gender"]').click();
        cy.get('mat-option').contains('ذكر').click();
        cy.get('mat-select[formcontrolname="status"]').click();
        cy.get('mat-option').contains('نشط').click();
        cy.get('#address').type('Nablus')
        cy.get('#job_description').type('UN')
        cy.get('button[aria-label="Open calendar"]').click()
        cy.get('mat-calendar').click()
        cy.get('input[type="password"]').type('asdfghjkl1')
        cy.get('button[color="primary"]').contains('اضافة').click()
        cy.contains('الموظفين', {timeout:10}).should('be.visible')
    })


