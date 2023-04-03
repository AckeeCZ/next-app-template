import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '../config';

export const getQueryData = async <TAxiosResponse>(endpoint: string, options?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<TAxiosResponse>(endpoint, options);

    return response.data;
};
