import { config } from 'config';

export const getMutationData = async <TPayload>(endpoint: string, payload: TPayload, options?: any) => {
    const response = await fetch(config.api.url + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        ...options,
    });

    const jsonData = await response.json();

    return jsonData;
};
