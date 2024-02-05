import type { ZodTypeAny } from 'zod';

import type { NestedPossibleZodEffect } from '../types';
import { isZodEffects } from './isZodEffects';

export function unwrapPossibleZodEffects<T extends ZodTypeAny>(schema: NestedPossibleZodEffect<T>): T {
    return isZodEffects(schema) ? unwrapPossibleZodEffects(schema.innerType()) : schema;
}
