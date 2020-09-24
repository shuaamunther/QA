// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('http://dev.bonoud.com/')
    cy.get('.signin-button').contains('دخول').click()
    cy.get('input[placeholder="اسم المستخدم"]').type('user1')
    cy.get('input[type="password"]').type('asdfghjkl1')
    cy.get('.mat-raised-button').contains('دخول').click()
    cy.contains('Home Page', { timeout: 10000 }).should('be.visible')
})