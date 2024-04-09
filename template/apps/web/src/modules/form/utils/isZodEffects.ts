import type { ZodEffects, ZodTypeAny } from 'zod';

export function isZodEffects<T extends ZodTypeAny>(schema: object): schema is ZodEffects<T> {
    return 'sourceType' in schema;
}
