import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from 'styles/theme';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/** Preloaded fonts */}
                    {/* <link rel="preload" href="" /> */}
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
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
