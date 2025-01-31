import type { ZodTypeAny, ZodTypeDef } from 'zod';

import type { NestedPossibleZodEffect } from '../types';
import { isZodEffects, isZodEffectsDef } from './guards';

export function unwrapPossibleZodEffects<T extends ZodTypeAny>(schema: NestedPossibleZodEffect<T>): T {
    return isZodEffects(schema) ? unwrapPossibleZodEffects(schema.innerType()) : schema;
}

export function unwrapPossibleZodEffectsDef(def: ZodTypeDef): ZodTypeDef {
    return isZodEffectsDef(def) ? unwrapPossibleZodEffectsDef(def.schema._def) : def;
}
