# Bootstrapped app with create-next-app by Ackee

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using our skeleton written in Typescript and based on create-next-app => https://github.com/AckeeCZ/next-app-template

## Getting Started

First, install all dependencies:

```bash
npm install
# or
yarn
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Localizations

For localizations we use our library for parsing google spreadsheets called Lokše => https://github.com/AckeeCZ/lokse and it works with the google spreadsheet with all texts used in the app to be more easy to fill it for the customer.
Spreadsheet => https://docs.google.com/spreadsheets/d/1snXqnscRrXD6DDSYOUefgiVDo1GwoTFaUGiS-3-UJYM/edit#gid=0

For updating localizations from the sheet you may just run: 

```bash
npm run localize
# or
yarn localize
```

## Storybook

We use Storybook for design system of UI components. You can build it and run with:

build-storybook
```bash
npm run build-storybook
npm run storybook
# or
yarn build-storybook
yarn storybook
```

## Icon generator

For better developer experience we use icon generator. If you want to use it - just add an svg icon to the `src/modules/ui/Icons/Icons/assets` folder and then run:

```bash
npm run generate-icons
# or
yarn generate-icons
```

It will generate icons into the React/Typescript components ready to use.

## Types generator

We also generate typescript types from the backend side to improve developer experience. So you have to run this comand to get all the types from the BE via graphql-codegen:

```bash
npm run generate:api
# or
yarn generate:api
```


## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.Z