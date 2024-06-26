import 'normalize.css';
import 'reset.css';

import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { env } from '@workspace/env';
import { ErrorBoundary } from '@workspace/errors';
import { initLogger } from '@workspace/logger';

import { AppQueryProvider } from '~modules/api/components';
import { Intl } from '~modules/intl';

initLogger({
    outputToConsole: env.NEXT_PUBLIC_BUILD_ENV === 'development',
});

export interface ExtendedAppProps extends AppProps {}

function App({ Component, pageProps }: ExtendedAppProps) {
    return (
        <ErrorBoundary>
            <AppQueryProvider dehydratedState={pageProps.dehydratedState}>
                <Intl>
                    <Component {...pageProps} />
                </Intl>
                <ReactQueryDevtools initialIsOpen={false} />
            </AppQueryProvider>
        </ErrorBoundary>
    );
}

export default App;
