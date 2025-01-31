import { useMemo } from 'react';
import type { FieldErrors } from 'react-hook-form';
import type { ZodObjectDef, ZodRecordDef, ZodType, ZodUnionDef } from 'zod';

import { useIntl } from '@workspace/localization';

import type { NestedPossibleZodEffect } from '../types';
import { isUnionDef } from '../utils/guards';
import { translateErrorsOfDef } from '../utils/translateErrors';
import { unwrapPossibleZodEffects } from '../utils/unwrap';

export type AcceptedZodType = ZodType<object, ZodObjectDef | ZodRecordDef | ZodUnionDef>;

export function useTranslateErrors<Schema extends NestedPossibleZodEffect<AcceptedZodType>>(schema: Schema) {
    const { formatMessage } = useIntl();

    return useMemo(() => {
        const innerSchema = unwrapPossibleZodEffects(schema);
        const def = innerSchema._def;

        if (isUnionDef(def)) {
            const d = def as ZodUnionDef;

            return (errors: FieldErrors) => {
                const translatedErrors = d.options.map(option =>
                    translateErrorsOfDef(option._def, errors, { formatMessage }),
                );

                return translatedErrors.reduce((allTranslatedErrors, optionDefTranslatedErrors) => {
                    Object.assign(allTranslatedErrors, optionDefTranslatedErrors);

                    return allTranslatedErrors;
                }, {});
            };
        }

        return (errors: FieldErrors) => translateErrorsOfDef(def, errors, { formatMessage });
    }, [schema, formatMessage]);
}
