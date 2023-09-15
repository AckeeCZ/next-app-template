import type { MessageKey } from '~modules/intl/types';

export const formError = {
    required: 'form.error.required',
    email: 'form.error.email',
    passwordLength: 'form.error.password.length',
    passwordCasing: 'form.error.password.casing',
    passwordNumeric: 'form.error.password.numeric',
    passwordEquality: 'form.error.password.equality',
} as const satisfies Record<string, MessageKey>;
