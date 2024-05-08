/* eslint-disable */

import { attemptLogIn } from "../lib/util";
import { LanguageStrings, Page } from "../../lib/strings";
import { loginEmail, loginPassword } from "../lib/secrets";

describe("Redirect", () => {
    it("user should redirect after login", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(loginEmail, loginPassword);
        cy.url().should('include', Page.Display);
    });   
    
    it("user should redirect after logout", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        attemptLogIn(loginEmail, loginPassword);

        cy.get('button').contains(LanguageStrings.LogOut).click();
        cy.url().should('not.include', Page.Display);
    }); 
});

// Prevent TypeScript from reading file as legacy script
export {};