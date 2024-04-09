import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider, type QueryClientConfig } from '@tanstack/react-query';

export interface QueryProviderProps {
    children: ReactNode;
    queryClientConfig?: QueryClientConfig;
}

export const QueryProvider = ({ children, queryClientConfig }: QueryProviderProps) => {
    const [queryClient] = useState(() => new QueryClient(queryClientConfig));

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
