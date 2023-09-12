import Document, { Head, Html, Main, NextScript } from 'next/document';

import { currentEnv } from '~constants';
import { initLogger } from '~modules/logger';

initLogger({
    outputToConsole: currentEnv === 'development',
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
