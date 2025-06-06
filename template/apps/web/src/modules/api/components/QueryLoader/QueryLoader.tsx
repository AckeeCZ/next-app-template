import type { ReactNode } from 'react';
import type { UseQueryResult } from '@tanstack/react-query';

export interface QueryLoaderProps<QR extends UseQueryResult> {
    children: (result: QR['data']) => ReactNode;
    result: UseQueryResult;
    skeleton: ReactNode;
}

export const isLoading = (result: UseQueryResult) => result.status === 'pending';

export const QueryLoader = <QR extends UseQueryResult>({ result, children, skeleton }: QueryLoaderProps<QR>) => {
    if (isLoading(result)) {
        return <>{skeleton}</>;
    }

    if (!result.data) {
        return null;
    }

    return <>{children(result.data)}</>;
};
