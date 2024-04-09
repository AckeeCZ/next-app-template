import type { MessageKey } from '~modules/intl/types';

export const formError = {
    required: 'form.error.required',
} as const satisfies Record<string, MessageKey>;
