/* eslint-disable */

import { attemptLogIn, visitLoginPage } from "../lib/util";
import { LanguageStrings, Page } from "../../lib/strings";
import { loginEmail, loginPassword } from "../lib/secrets";

describe("Redirect", () => {
    beforeEach(() => {
        visitLoginPage();
    });

    it("user should redirect after login", () => {
        attemptLogIn(loginEmail, loginPassword);
        cy.url().should('include', Page.Display);
    });   
    
    it("user should redirect after logout", () => {
        attemptLogIn(loginEmail, loginPassword);

        cy.get('button').contains(LanguageStrings.LogOut).click();
        cy.url().should('not.include', Page.Display);
    }); 
});

// Prevent TypeScript from reading file as legacy script
export {};