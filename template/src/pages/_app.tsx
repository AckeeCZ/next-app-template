import { Hydrate } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import { QueryProvider } from '~modules/api/components';
import { Intl } from '~modules/intl/components';

import 'normalize.css';
import 'reset.css';

interface ExtendedAppProps extends AppProps {}

function App({ Component, pageProps }: ExtendedAppProps) {
    return (
        <QueryProvider>
            <Hydrate state={pageProps.dehydratedState}>
                <Intl>
                    <Component {...pageProps} />
                </Intl>
            </Hydrate>
        </QueryProvider>
    );
}

export default App;
