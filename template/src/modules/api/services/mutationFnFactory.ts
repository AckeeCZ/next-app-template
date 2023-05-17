import { config } from 'config/config';

export const getMutationData = async <TPayload, TOptions extends RequestInit>(
    endpoint: string,
    payload: TPayload,
    options?: TOptions,
) => {
    const response = await fetch(config.api.url + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        ...options,
    });

    return response.json();
};
