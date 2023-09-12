import { z } from 'zod';

import * as validators from '../../../validators';

export const loginFormSchema = z.object({
    email: validators.email,
    password: validators.password,
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const loginFormKey = loginFormSchema.keyof().enum;
