import {
    ZodEffects,
    ZodFirstPartyTypeKind,
    type ZodArrayDef,
    type ZodEffectsDef,
    type ZodObjectDef,
    type ZodRecordDef,
    type ZodTypeAny,
    type ZodTypeDef,
    type ZodUnionDef,
} from 'zod';

export function isDefType(def: ZodTypeDef, typeName: ZodFirstPartyTypeKind) {
    return 'typeName' in def && def.typeName === typeName;
}

export function isArrayDef(def: ZodTypeDef): def is ZodArrayDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodArray);
}

export function isObjectDef(def: ZodTypeDef): def is ZodObjectDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodObject);
}

export function isRecordDef(def: ZodTypeDef): def is ZodRecordDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodRecord);
}

export function isUnionDef(def: ZodTypeDef): def is ZodUnionDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodUnion);
}

export function isZodEffects<T extends ZodTypeAny>(schema: object): schema is ZodEffects<T> {
    return 'sourceType' in schema;
}

export function isZodEffectsDef(def: ZodTypeDef): def is ZodEffectsDef {
    return isDefType(def, ZodFirstPartyTypeKind.ZodEffects);
}
