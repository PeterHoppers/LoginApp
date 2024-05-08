/* eslint-disable */

import { attemptLogIn, visitLoginPage } from "../lib/util";
import { LanguageStrings } from "../../lib/strings";
import { loginEmail, loginPassword } from "../lib/secrets";

const legitEmail : string = loginEmail;
const badEmail: string = 'not@user.com';
const legitPassword : string = loginPassword;
const badPassword: string = 'badpassword';

describe("Login Auth", () => {
    beforeEach(() => {
        visitLoginPage();
    });

    it("user should get error with bad email", () => {
        attemptLogIn(badEmail, badPassword);
        cy.contains('p', LanguageStrings.Error_Email).should('be.visible')
    });

    it("user should get error with bad password", () => {
        attemptLogIn(legitEmail, badPassword);
        cy.contains('p', LanguageStrings.Error_Password).should('be.visible')
    });

    it("user should be able to log in", () => {
        attemptLogIn(legitEmail, legitPassword);
        cy.contains('button', LanguageStrings.LogOut).should('be.visible')
    });
});

describe("User Validation", () => {
    beforeEach(() => {
        visitLoginPage();
    });

    it("user's name should be visible", () => {
        attemptLogIn(legitEmail, legitPassword);
        cy.contains('span', 'Example User').should('be.visible')
    });

    it("user's email should be correct", () => {
        attemptLogIn(legitEmail, legitPassword);
        cy.contains('span', legitEmail).should('be.visible')
    });
});

// Prevent TypeScript from reading file as legacy script
export {};