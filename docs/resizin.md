# Resizin

This is a guide of how to use Ackee image server Resizin in the Next.js app.

## ➕ Install `react-resizin` package

```sh
$ npx i react-resizin
# or
$ yarn add react-resizin
```

## 🔧 Configure bucket

Add name of bucket name into environment configs in `src/config`

```ts
// config.*.ts
const config = {
    api: {  ...  },
    resizin: {
        bucketName: 'your-bucket-name',
    },
};
```

## 💁 Use provider

Add Resizin provider into `pages/_app.tsx`

```tsx
import { ResizinProvider } from 'react-resizin';
...

export default function App({
  Component,
  pageProps,
  renderer,
}: ExtendedAppProps) (
    <ResizinProvider bucket={config.resizin.bucketName}>
        <Fela renderer={renderer}>
            <Intl>
                <Component {...pageProps} />
            </Intl>
        </Fela>
    </ResizinProvider>
);
```

## 🌐 Allow Resizin domain

Add Resizin domain into [`domains` configuration](https://nextjs.org/docs/api-reference/next/image#domains) of the `next.config.js` config

```ts
module.exports = {
  images: {
    domains: ["img.resizin.com"],
  },
};
```

## 💰 Use together with `next-image`

```tsx
import Image from 'next/image';
import { useImage } from 'react-resizin';

export const MyImage = ({ imageId }) => {
    const imgOptions = { ... }; // Resizin modifiers
    const imageUrl = useImage(imageId, options);

    return (
        <Image src={imageUrl ?? '/images/mockup.png'} alt="" />
    );
};
```
