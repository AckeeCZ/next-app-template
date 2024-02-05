import { ZodFirstPartyTypeKind, type ZodArrayDef, type ZodTypeDef } from 'zod';

import { isDefType } from './isDefType';

export function isArrayDef(def: ZodTypeDef): def is ZodArrayDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodArray);
}
