import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

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
            <Intl>
                <Component {...pageProps} />
            </Intl>
        </>
    );
}

export default App;
