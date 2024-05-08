import { devEmail, devName, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from "../lib/secrets";

describe("Google Auth", () => {
    it("user's google account login", () => {
        // Start from the index page
        cy.visit("http://localhost:3000");

        cy.loginByGoogleApi(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, devName);
    });
});