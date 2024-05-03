import { useState, type ReactNode } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface AppQueryProviderProps {
    children: ReactNode;
    dehydratedState: unknown;
}

export function AppQueryProvider({ children, dehydratedState }: AppQueryProviderProps) {
    const [queryClient] = useState(() => new QueryClient({}));

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
        </QueryClientProvider>
    );
}
