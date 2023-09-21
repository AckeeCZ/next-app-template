# UI

## Scripts

### `chromatic`

-   Manual deploy of chromatic.
-   Requires [`CHROMATIC_PROJECT_TOKEN`](https://ackee.passwd.team/secrets/ZFPl01IbDNgu4qGW5NBj). Put it in `.env.local`.
-   Deployed at https://642abd4c13183719022fb2b4-axwmiujfyr.chromatic.com/.

### Icon generator

For better developer experience we use icon generator. If you want to use it - just add an svg icon to the `src/modules/ui/Icons/Icons/assets` folder and then run:

```bash
yarn generate-icons
```

It will generate icons into the React/Typescript components ready to use.
