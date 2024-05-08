/* eslint-disable */

import { attemptLogIn } from "../lib/util";
import { LanguageStrings } from "../../lib/strings";
import { loginEmail, loginPassword } from "../lib/secrets";

const legitEmail : string = loginEmail;
const badEmail: string = 'not@user.com';
const legitPassword : string = loginPassword;
const badPassword: string = 'badpassword';

describe("Login Auth", () => {
    it("user should get error with bad email", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(badEmail, badPassword);
        cy.contains('p', LanguageStrings.Error_Email).should('be.visible')
    });

    it("user should get error with bad password", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");
        
        attemptLogIn(legitEmail, badPassword);
        cy.contains('p', LanguageStrings.Error_Password).should('be.visible')
    });

    it("user should be able to log in", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(legitEmail, legitPassword);
        cy.contains('button', LanguageStrings.LogOut).should('be.visible')
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

// Prevent TypeScript from reading file as legacy script
export {};