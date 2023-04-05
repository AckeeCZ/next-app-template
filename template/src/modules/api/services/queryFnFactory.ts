import { config } from 'config';

export const getQueryData = async <TOptions>(endpoint: string, options?: TOptions) => {
    const response = await fetch(config.api.url + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    const jsonData = await response.json();

    return jsonData;
};
