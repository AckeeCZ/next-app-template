import { AxiosError } from 'axios';

export function handleError(err: unknown) {
    console.error(err);

    let error;

    if (typeof err === 'string') {
        error = { message: err.toUpperCase(), status: 500 };
    } else if (err instanceof AxiosError) {
        error = err;
    } else {
        error = { message: 'Error occured', status: 500 };
    }

    return error;
}
