import { config } from 'config';

export const getQueryData = async (endpoint: string, options?: any) => {
    const response = await fetch(config.api.url + endpoint, options);
    const jsonData = await response.json();

    return jsonData;
};
