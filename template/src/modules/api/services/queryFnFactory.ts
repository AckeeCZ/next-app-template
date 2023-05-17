import { config } from 'config/config';

export const getQueryData = async <TOptions extends RequestInit>(endpoint: string, options?: TOptions) => {
    const response = await fetch(config.api.url + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    return response.json();
};
