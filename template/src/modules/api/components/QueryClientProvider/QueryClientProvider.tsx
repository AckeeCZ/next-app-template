import { type PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider as RaQueryClientProvider } from '@tanstack/react-query';

interface QueryClientProps extends PropsWithChildren {}

export const QueryClientProvider = ({ children }: QueryClientProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return <RaQueryClientProvider client={queryClient}>{children}</RaQueryClientProvider>;
};