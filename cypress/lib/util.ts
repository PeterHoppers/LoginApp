
import { LanguageStrings } from "../../lib/strings";

export function attemptLogIn(email: string, password: string) {
    // fill in the form
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(password)

    cy.get('button').contains(LanguageStrings.LogIn).click();
}  