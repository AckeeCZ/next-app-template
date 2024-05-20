# Bootstrapped app with create-next-app by Ackee

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using our skeleton written in Typescript and based on create-next-app => https://github.com/AckeeCZ/next-app-template

## Getting Started

0. Activate package manager & Install dependencies
   This project uses `yarn@4.x`:

    ```sh
    # adds required binaries based on packageManager field in package.json
    corepack enable
    ```

    then install dependencies by running:

    ```sh
    yarn
    ```

1. [Download `env.local` from Passwd](https://ackee.passwd.team/secrets/3vA3iG87ziu3RAchXXUM) and rename it to `.env.local`.

    > Be aware that env. variables are validated with predefined zod schema in `src/env/index.mjs`.
    > If you need to add/remove a new env. var., don't forget the update the schema too.

2. Set `sheetId` in `template/tooling/lokse/config/index.js` & fetch fresh translations:

    ```sh
    # Go to the app
    cd apps/web

    # Fetch fresh translations
    yarn localize
    ```

3. Launch development server:

    ```sh
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Envs

-   `dev` & `stage` are deployed to Vercel where are defined corresponding env. vars – [Edit Vercel env vars](https://vercel.com/frontend-ackeecz/efactoring/settings/environment-variables).
    -   Credentials for Vercel can be found [here](https://ackee.passwd.team/secrets/ndFdjQT50bIsLFintjlU).
-   Production (`master`) deployment is handled by Arbes. Contact Matěj Holý for more info.
-   For local development, you need to provide `.env.local` with those vars placed in the `apps/web`. [Download it from Passwd](https://ackee.passwd.team/secrets/23LeUdfz8TU7h2LklOcR)

## Localizations

For localizations we use our library for parsing google spreadsheets called Lokše => https://github.com/AckeeCZ/lokse and it works with the google spreadsheet with all texts used in the app to be more easy to fill it for the customer.
Spreadsheet => https://docs.google.com/spreadsheets/d/1snXqnscRrXD6DDSYOUefgiVDo1GwoTFaUGiS-3-UJYM/edit#gid=0

To update translations:

```bash
yarn localize
```

To open translations:

```sh
yarn lokse
```

## Storybook

We use Storybook for design system of UI components. You can build it and run with:

```bash
yarn storybook:dev
```

## Icon generator

For better developer experience we use icon generator. If you want to use it - just add an svg icon to the `src/modules/ui/Icons/Icons/assets` folder and then run:

```bash
yarn generate-icons
```

It will generate icons into the React/Typescript components ready to use.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.Z
