import { z } from 'zod';

import { formError } from '../errors';

export const required = z.string({
    required_error: formError.required,
    invalid_type_error: formError.required,
});
