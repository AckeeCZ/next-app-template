# Bootstrapped app with create-next-app by Ackee

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using our skeleton written in Typescript and based on create-next-app => https://github.com/AckeeCZ/next-app-template

## Getting Started

1. Rename `.env.defaults` to `.env.local` and update it with real values.

2. Launch development server:

    ```sh
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Localizations

For localizations we use our library for parsing google spreadsheets called Lokše => https://github.com/AckeeCZ/lokse and it works with the google spreadsheet with all texts used in the app to be more easy to fill it for the customer.
Spreadsheet => https://docs.google.com/spreadsheets/d/1snXqnscRrXD6DDSYOUefgiVDo1GwoTFaUGiS-3-UJYM/edit#gid=0

To update translations:

```bash
yarn localize
```

To open translations:

```sh
yarn open
```

## Storybook

We use Storybook for design system of UI components. You can build it and run with:

build-storybook

```bash
yarn build-storybook
yarn storybook
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
