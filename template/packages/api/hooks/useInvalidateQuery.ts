import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import type { ApiQueryKey } from '../constants';

export function useInvalidateQuery() {
    const queryClient = useQueryClient();

    const invalidateQuery = useCallback(
        (queryKey: ApiQueryKey, ...args: ReadonlyArray<unknown>) => {
            return queryClient.invalidateQueries({
                queryKey: [queryKey, ...args],
            });
        },
        [queryClient],
    );

    /**
     * @example
     *  ```ts
     * // invalidate only query keys WITHOUT additional args:
     *  await invalidateQueries([
     *      QueryKey.FETCH_DATA_WITH_LIGHT_FILTER,
     *      QueryKey.GET_FILTER_SETTINGS,
     * ])
     *  ```
     *
     * @example
     * ```ts
     * // invalidate query keys WITH additional args:
     * await invalidateQueries([
     *      [QueryKey.FETCH_DATA_WITH_LIGHT_FILTER, id, anotherDep],
     *      [QueryKey.GET_FILTER_SETTINGS, dep1, dep2],
     * ])
     * ```
     */
    const invalidateQueries = useCallback(
        async (queryKeys: ReadonlyArray<Parameters<typeof invalidateQuery>> | ReadonlyArray<ApiQueryKey>) => {
            return Promise.all(
                queryKeys.map(queryKey =>
                    Array.isArray(queryKey) ? invalidateQuery(...queryKey) : invalidateQuery(queryKey),
                ),
            );
        },
        [invalidateQuery],
    );

    return {
        invalidateQuery,
        invalidateQueries,
    };
}
