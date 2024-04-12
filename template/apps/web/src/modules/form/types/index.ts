import type { MessageKey } from '~modules/intl';

export * from './nestedPossibleZodEffect';

export type TypedZodIssueBase<
    FormSchema extends Record<string, any>,
    FormKey extends keyof FormSchema = keyof FormSchema,
> = {
    path: FormKey[];
    message: MessageKey;
};
