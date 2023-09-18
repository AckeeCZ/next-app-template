import type { AppProps } from 'next/app';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { buildEnv } from '~constants';
import { QueryProvider } from '~modules/api/components';
import { Intl } from '~modules/intl';

import { ErrorBoundary } from '@workspace/errors';
import { initLogger } from '@workspace/logger';

import 'normalize.css';
import 'reset.css';

initLogger(buildEnv === 'development');

interface ExtendedAppProps extends AppProps {}

function App({ Component, pageProps }: ExtendedAppProps) {
    return (
        <ErrorBoundary>
            <QueryProvider>
                <Hydrate state={pageProps.dehydratedState}>
                    <Intl>
                        <Component {...pageProps} />
                    </Intl>
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryProvider>
        </ErrorBoundary>
    );
}

export default App;
