import type { MessageKey } from '@workspace/localization';

export const formError = {
    required: 'form.error.required',
} as const satisfies Record<string, MessageKey>;
