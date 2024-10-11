import { useMemo } from 'react';
import type { FieldErrors } from 'react-hook-form';
import type { ZodObjectDef, ZodRecordDef, ZodType } from 'zod';

import { useIntl } from '@workspace/localization';

import type { NestedPossibleZodEffect } from '../types';
import { isObjectDef } from '../utils/isObjectDef';
import { isRecordDef } from '../utils/isRecordDef';
import { translateObjectErrors, translateRecordErrors } from '../utils/translateErrors';
import { unwrapPossibleZodEffects } from '../utils/unwrapPossibleZodEffects';

export type AcceptedZodType = ZodType<object, ZodObjectDef | ZodRecordDef>;

export function useTranslateErrors<Schema extends NestedPossibleZodEffect<AcceptedZodType>>(schema: Schema) {
    const { formatMessage } = useIntl();

    return useMemo(() => {
        const innerSchema = unwrapPossibleZodEffects(schema);
        const def = innerSchema._def;

        if (isObjectDef(def)) {
            return (errors: FieldErrors) => translateObjectErrors(def, errors, { formatMessage });
        }
        if (isRecordDef(def)) {
            return (errors: FieldErrors) => translateRecordErrors(def, errors, { formatMessage });
        }

        throw new Error('invalid def received, ' + String(def));
    }, [schema, formatMessage]);
}
