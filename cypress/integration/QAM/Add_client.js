it('Add Client', function () {
    cy.visit('https://user1.dev.bonoud.com/')
    cy.get('#user_name').type('user1')
    cy.get('input[type="password"]').type('asdfghjkl1')
    cy.get('.mat-raised-button').contains('دخول').click()
    cy.visit('https://user1.dev.bonoud.com/clients')
    cy.get('mat-icon', {timeout:100}).contains('add').click();
    cy.get('#name').type('auto_employee');
    cy.get('#phoneNumber').type('0492288612')  
    cy.get('#email').type('aut_employee@g.com')
    cy.get('mat-select[formcontrolname="gender"]').click();
    cy.get('mat-option').contains('ذكر').click();
    cy.get('mat-select[formcontrolname="status"]').click();
    cy.get('mat-option').contains('نشط').click();
    cy.get('mat-select[formcontrolname="client_type"]').click();
    cy.get('mat-option').contains('فردي').click();
    cy.get('#address').type('Nablus')
    cy.get('button[aria-label="Open calendar"]').click()
    cy.get('mat-calendar').click()
    //cy.get('td[tabindex="-1"]').first().click()
    cy.get('#id_number').type('987595318')
    //cy.get('button[color="primary"]').contains('اضافة').should('be.visible')
    cy.get('button[color="primary"]').contains('اضافة').then($button => {
        if ($button.is(':visible')){
            $button.click()
        }
    })
   // cy.expect(response).to.have.property('status', 200)
    cy.url().should('include', '/clients')
})
