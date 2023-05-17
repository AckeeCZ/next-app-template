'use client';

import type { QueryKey, QueryObserverOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getQueryData } from '../services';

export interface AppQueryOptions<TQueryKey extends QueryKey = QueryKey, TQueryFnData = unknown, TOptions = unknown>
    extends Pick<
        QueryObserverOptions<TQueryFnData, unknown, TQueryFnData, TQueryFnData, TQueryKey>,
        'enabled' | 'refetchOnWindowFocus'
    > {
    options?: TOptions;
}
export const useAppQuery = <TQueryFnData = unknown, TQueryKey extends QueryKey = QueryKey, TOptions = unknown>(
    queryKey: TQueryKey,
    queryEndpoint: string,
    options: AppQueryOptions<TQueryKey, TQueryFnData, TOptions> = {},
) => {
    const { options: fetchOptions, enabled, refetchOnWindowFocus } = options;

    return useQuery({
        queryKey,
        queryFn: async () => await getQueryData<TOptions>(queryEndpoint, fetchOptions),
        enabled,
        refetchOnWindowFocus,
    });
};
