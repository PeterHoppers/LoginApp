/* eslint-disable */

import { devName, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from "../lib/secrets";
import { visitLoginPage } from "../lib/util";

describe("Google Auth", () => {
    it("user's google account login", () => {
        visitLoginPage();

        cy.request({
            method: 'POST',
            url: 'https://www.googleapis.com/oauth2/v4/token',
            body: {
              grant_type: 'refresh_token',
              client_id: GOOGLE_CLIENT_ID,
              client_secret: GOOGLE_CLIENT_SECRET,
              refresh_token: GOOGLE_REFRESH_TOKEN,
            },
          }).then(({ body }) => {
            const { access_token, id_token } = body
        
            cy.request({
              method: 'GET',
              url: 'https://www.googleapis.com/oauth2/v3/userinfo',
              headers: { Authorization: `Bearer ${access_token}` },
            }).then(({ body }) => {
              cy.log(body)
              const userItem = {
                token: id_token,
                user: {
                  googleId: body.sub,
                  email: body.email,
                  givenName: body.given_name,
                  familyName: body.family_name,
                  imageUrl: body.picture,
                },
              }
      
              expect(userItem.user.givenName).to.eq(devName);
            })
          })
    });
});