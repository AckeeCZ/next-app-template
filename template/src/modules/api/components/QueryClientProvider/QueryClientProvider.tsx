'use client';

import React, { type PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider as RaQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface QueryClientProps extends PropsWithChildren {}

export const QueryClientProvider = ({ children }: QueryClientProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <RaQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </RaQueryClientProvider>
    );
};
