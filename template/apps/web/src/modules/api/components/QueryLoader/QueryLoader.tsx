import type { ReactNode } from 'react';
import type { UseQueryResult } from '@tanstack/react-query';

export interface QueryLoaderProps {
    children: ReactNode | ReactNode[];
    result: UseQueryResult | UseQueryResult[];
    skeleton: ReactNode;
}

export const isLoading = (result: UseQueryResult) => result.status === 'pending';

export function isAnyResultLoading(results: UseQueryResult | UseQueryResult[]) {
    return Array.isArray(results) ? results.some(isLoading) : isLoading(results);
}

export const QueryLoader = ({ result, children, skeleton }: QueryLoaderProps) => {
    if (isAnyResultLoading(result)) {
        return <>{skeleton}</>;
    }

    if (!result.data) return null;

    return <>{children(result.data)}</>;
};
