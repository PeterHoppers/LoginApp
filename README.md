The Login Application is a NextJs application that uses Next Auth and OAuth to allow users to log in either through a provided email/password pair or through their Google Account.

## Getting Started Locally

After cloning the repo locally, navigate to the folder.

To install all dependencies:

```bash
npm install
```

and then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For the login system to work, a copy of the .env file provided by the developer needs to be placed in the root of the folder.
If one wanted to create their own copy of the application, one could set up environmental values that point to their own Google API creds and postgres database.

## Updating the Theming

All colors found within the application can be found in the app/globals.css as CSS variables. 
* **Background Color**: Color behind the floating card where the text exists
* **Foreground Color**: Background color of the card itself
* **Text Color**: Default color for the text
* **Background Against Text Color**: Background color for pieces of interaction that need to make sure the text is readable
* **Primary Color**: Main branding color that is used on elements of interaction
* **Text Againt Primary**: Color that is easily readable when placed on top of the primary color
* **Interactive Color**: An alternative color used for links or any element of interaction that doesn't need to be the primary color

## Running Tests

Use the following command to begin the e2e tests:

```bash
npm run e2e
```

This command will run the app pointed at [http://localhost:3000](http://localhost:3000) and start up the Cypress app. From here, you'll be able to select which browser you'd like to test with and choose which tests to run.

There is also a secrets.ts file that needs to be placed in the /cypress/lib/ folder for the tests to run properly. 
