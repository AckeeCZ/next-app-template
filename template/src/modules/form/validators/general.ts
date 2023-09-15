import { z } from 'zod';

import { formError } from '../errors';

export const required = z.string({
    // eslint-disable-next-line camelcase
    required_error: formError.required,
});

export const email = required.email({
    message: formError.email,
});
