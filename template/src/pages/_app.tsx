import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

import { QueryClientProvider } from 'modules/api';
import { Intl } from 'modules/intl';
import 'normalize.css';
import 'reset.css';
import { globalStyles } from 'styles/globals';

interface ExtendedAppProps extends AppProps {
    children: ReactNode;
}

function App({ Component, pageProps }: ExtendedAppProps) {
    globalStyles();

    return (
        <>
            <QueryClientProvider>
                <Hydrate state={pageProps.dehydratedState}>
                    <Intl>
                        <Component {...pageProps} />
                    </Intl>
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}

export default App;
