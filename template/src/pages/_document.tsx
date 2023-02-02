import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { renderToNodeList } from 'react-fela';

import { renderer } from 'modules/fela';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                // TODO - solve the ESLint and Typescript issue
                // @ts-expect-error
                // eslint-disable-next-line react/display-name
                enhanceApp: App => props => <App {...props} renderer={renderer} />,
            });

        const initialProps = await Document.getInitialProps(ctx);
        const styles = renderToNodeList(renderer);

        return {
            ...initialProps,
            styles: [initialProps.styles, ...styles],
        };
    }

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
