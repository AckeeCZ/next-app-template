import type { AxiosRequestConfig } from 'axios';

import { localAxiosInstance } from '../config';

export const mutationFnFactory = async <TPayload, TAxiosResponse>(
    endpoint: string,
    payload: TPayload,
    options?: AxiosRequestConfig,
) => {
    const response = await localAxiosInstance.post<TAxiosResponse>(endpoint, payload, options);

    return response.data;
};
