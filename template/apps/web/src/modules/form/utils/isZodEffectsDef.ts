import { ZodFirstPartyTypeKind, type ZodEffectsDef, type ZodTypeDef } from 'zod';

import { isDefType } from './isDefType';

export function isZodEffectsDef(def: ZodTypeDef): def is ZodEffectsDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodEffects);
}
