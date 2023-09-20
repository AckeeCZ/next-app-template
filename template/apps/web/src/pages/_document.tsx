import Document, { Head, Html, Main, NextScript } from 'next/document';

import { initLogger } from '@workspace/logger';

import { buildEnv } from '~constants/env';

initLogger({
    outputToConsole: buildEnv === 'development',
});

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/** Preloaded fonts */}
                    {/* <link rel="preload" href="" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
