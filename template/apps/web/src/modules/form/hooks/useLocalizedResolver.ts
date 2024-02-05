import { useCallback, useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues, ResolverOptions, ResolverResult } from 'react-hook-form';

import type { NestedPossibleZodEffect } from '../types';
import { useTranslateErrors, type AcceptedZodType } from './useTranslateErrors';

export type LocalizedZodResolver = <TFieldValues extends FieldValues, TContext>(
    values: TFieldValues,
    context: TContext | undefined,
    options: ResolverOptions<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>>;

/**
 * Extend the zodResolver with the ability to translate the error messages.
 */
export function useLocalizedResolver<Schema extends NestedPossibleZodEffect<AcceptedZodType>>(
    schema: Schema,
): ReturnType<typeof zodResolver> {
    const schemaResolver = useMemo(() => zodResolver(schema), [schema]);
    const translateErrors = useTranslateErrors(schema);

    return useCallback<LocalizedZodResolver>(
        async (values, context, options) => {
            const result = await schemaResolver(values, context, options);

            const translatedErrors = translateErrors(result.errors);

            return {
                ...result,
                errors: translatedErrors,
            };
        },
        [schemaResolver, translateErrors],
    );
}
