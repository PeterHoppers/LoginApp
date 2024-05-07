/* eslint-disable */
// Cypress E2E Test

const legitEmail : string = 'example@user.com';
const badEmail: string = 'not@user.com';
const legitPassword : string = '123456';
const badPassword: string = 'badpassword';

describe("Login Auth", () => {
    it("user should get error with bad email", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(badEmail, badPassword);
        cy.contains('p', 'Invalid email was provided.').should('be.visible')
    });

    it("user should get error with bad password", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");
        
        attemptLogIn(legitEmail, badPassword);
        cy.contains('p', 'Invalid password was provided.').should('be.visible')
    });

    it("user should be able to log in", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(legitEmail, legitPassword);
        cy.contains('button', 'Logout').should('be.visible')
    });
});

describe("User Validation", () => {
    it("user's name should be visible", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(legitEmail, legitPassword);
        cy.contains('span', 'Example User').should('be.visible')
    });

    it("user's email should be correct", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(legitEmail, legitPassword);
        cy.contains('span', legitEmail).should('be.visible')
    });
});

function attemptLogIn(email: string, password: string) {
    // fill in the form
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(password)

    cy.get('button').contains('Login').click();
}
  
// Prevent TypeScript from reading file as legacy script
export {};