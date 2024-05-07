The Login Application is a NextJs application that uses Next Auth and OAuth to allow users to log in either through a provided email/password pair or through their Google Account.

## Getting Started Locally

After cloning the repo locally, navigate to the folder and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

One needs to place a copy of the .env file provided by developer in order to have the login system work correctly. If one wanted to create their own copy of the application, one could set up environmental values that point to their own Google API creds and postgres database.
