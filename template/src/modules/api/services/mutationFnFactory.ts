import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '../config';

export const getMutationData = async <TPayload, TAxiosResponse>(
    endpoint: string,
    payload: TPayload,
    options?: AxiosRequestConfig,
) => {
    const response = await axiosInstance.post<TAxiosResponse>(endpoint, payload, options);

    return response.data;
};
