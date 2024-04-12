import type { AppType } from 'next/app';
import Document, { Head, Html, Main, NextScript, type DocumentContext, type DocumentProps } from 'next/document';

import { env } from '@workspace/env';
import { initLogger } from '@workspace/logger';

import type { ExtendedAppProps } from './_app';

initLogger({
    outputToConsole: env.NEXT_PUBLIC_BUILD_ENV === 'development',
});

interface MyDocumentProps extends DocumentProps {}

function MyDocument({}: MyDocumentProps) {
    return (
        <Html lang='en'>
            <Head>
                <meta name='theme-color' content={'#000'} />
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & ExtendedAppProps>) =>
                function EnhanceApp(props) {
                    return <App {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
    };
};

export default MyDocument;
