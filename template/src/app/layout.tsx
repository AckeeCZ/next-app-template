'use client';

import { globalStyles } from '../styles/globals';
import { StitchesRegistry } from '../styles/StitchesRegistry';

import { QueryClientProvider } from '../modules/api';

import 'normalize.css';
import 'reset.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    globalStyles();

    return (
        <html lang="en">
            <body>
                <StitchesRegistry>
                    <QueryClientProvider>{children}</QueryClientProvider>
                </StitchesRegistry>
            </body>
        </html>
    );
}
