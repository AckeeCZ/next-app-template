import { useMutation } from '@tanstack/react-query';

import { getMutationData } from '../services';

export const useAppMutation = <TPayload, TOptions>(queryEndpoint: string, options?: TOptions) =>
    useMutation({
        mutationFn: async (payload: TPayload) =>
            await getMutationData<TPayload, TOptions>(queryEndpoint, payload, options),
    });
