import type { ZodTypeDef } from 'zod';

import { isZodEffectsDef } from './isZodEffectsDef';

export function unwrapPossibleZodEffectsDef(def: ZodTypeDef): ZodTypeDef {
    return isZodEffectsDef(def) ? unwrapPossibleZodEffectsDef(def.schema._def) : def;
}
