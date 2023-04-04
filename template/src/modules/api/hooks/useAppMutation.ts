import { useMutation } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

import { getMutationData } from '../services';

export type AppMutationOptions<TOptions = unknown> = AxiosRequestConfig<TOptions>;

export const useAppMutation = <TPayload, TAxiosResponse, TOptions = unknown>(
    queryEndpoint: string,
    options?: AppMutationOptions<TOptions>,
) =>
    useMutation({
        mutationFn: async (payload: TPayload) =>
            await getMutationData<TPayload, TAxiosResponse>(queryEndpoint, payload, options),
    });
