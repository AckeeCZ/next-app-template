import type { QueryKey, QueryObserverOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

import { getQueryData } from '../services';

export interface AppQueryOptions<TQueryKey extends QueryKey = QueryKey, TQueryFnData = unknown, TOptions = unknown>
    extends Pick<
        QueryObserverOptions<TQueryFnData, unknown, TQueryFnData, TQueryFnData, TQueryKey>,
        'enabled' | 'refetchOnWindowFocus'
    > {
    options?: AxiosRequestConfig<TOptions>;
}
export const useAppQuery = <TQueryFnData = unknown, TQueryKey extends QueryKey = QueryKey, TOptions = unknown>(
    queryKey: TQueryKey,
    queryEndpoint: string,
    options: AppQueryOptions<TQueryKey, TQueryFnData, TOptions> = {},
) => {
    const { options: axiosOptions, enabled, refetchOnWindowFocus } = options;

    return useQuery({
        queryKey,
        // @ts-expect-error
        queryFn: async () => await getQueryData<TQueryFnData>(queryEndpoint, axiosOptions),
        enabled,
        refetchOnWindowFocus,
    });
};
