import type { ReactNode } from 'react';
import type { IRenderer } from 'fela';
import type { AppProps } from 'next/app';

import { Fela } from 'modules/fela';
import { Intl } from 'modules/intl';

import 'normalize.css';
import 'reset.css';
import 'styles/globals.css';

interface ExtendedAppProps extends AppProps {
    children: ReactNode;
    renderer: IRenderer;
}

export default function App({ Component, pageProps, renderer }: ExtendedAppProps) {
    return (
        <Fela renderer={renderer}>
            <Intl>
                <Component {...pageProps} />
            </Intl>
        </Fela>
    );
}
