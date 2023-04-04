import { useMutation } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

import { getMutationData } from '../services';

export type AppMutationOptions<TOptions = unknown> = AxiosRequestConfig<TOptions>;

export const useAppMutation = <TPayload, TAxiosResponse>(queryEndpoint: string, options?: any) =>
    useMutation({
        mutationFn: async (payload: TPayload) =>
            // @ts-expect-error
            await getMutationData<TPayload, TAxiosResponse>(queryEndpoint, payload, options),
    });
