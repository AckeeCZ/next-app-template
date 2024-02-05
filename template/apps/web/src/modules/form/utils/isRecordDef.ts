import { ZodFirstPartyTypeKind, type ZodRecordDef, type ZodTypeDef } from 'zod';

import { isDefType } from './isDefType';

export function isRecordDef(def: ZodTypeDef): def is ZodRecordDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodRecord);
}
