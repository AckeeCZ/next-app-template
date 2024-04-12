import { ZodFirstPartyTypeKind, type ZodObjectDef, type ZodTypeDef } from 'zod';

import { isDefType } from './isDefType';

export function isObjectDef(def: ZodTypeDef): def is ZodObjectDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodObject);
}
