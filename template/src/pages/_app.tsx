import type { ReactNode } from 'react';
import type { AppProps } from 'next/app';

import { Intl } from '~modules/intl/components';

import 'normalize.css';
import 'reset.css';

interface ExtendedAppProps extends AppProps {
    children: ReactNode;
}

function App({ Component, pageProps }: ExtendedAppProps) {
    return (
        <Intl>
            <Component {...pageProps} />
        </Intl>
    );
}

export default App;
