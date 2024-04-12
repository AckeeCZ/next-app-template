import { useMemo, type ReactNode } from 'react';
import { type QueryClientConfig } from '@tanstack/react-query';

import { QueryProvider } from '@workspace/api';

export interface AppQueryProviderProps {
    children: ReactNode;
}

export function AppQueryProvider({ children }: AppQueryProviderProps) {
    const queryClientConfig = useMemo<QueryClientConfig>(() => {
        return {};
    }, []);

    return <QueryProvider queryClientConfig={queryClientConfig}>{children}</QueryProvider>;
}
