import axios from 'axios';

import { config } from 'config';

export const axiosInstance = axios.create({
    baseURL: config.api.url,
});

export const localAxiosInstance = axios.create({
    baseURL: '/api/api-proxy',
});
