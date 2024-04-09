import type { ZodFirstPartyTypeKind, ZodTypeDef } from 'zod';

export function isDefType(def: ZodTypeDef, typeName: ZodFirstPartyTypeKind) {
    return 'typeName' in def && def.typeName === typeName;
}
