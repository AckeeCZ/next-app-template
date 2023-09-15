import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues, ResolverOptions, ResolverResult } from 'react-hook-form';
import { useIntl } from 'react-intl';
import type { ZodObject } from 'zod';
import { useCallback } from 'react';

import { isMessageKey } from '~modules/intl/utils';

export type LocalizedZodResolver = <TFieldValues extends FieldValues, TContext>(
    values: TFieldValues,
    context: TContext | undefined,
    options: ResolverOptions<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>>;

/**
 * Extend the zodResolver with the ability to translate the error messages.
 */
export function useLocalizedResolver<Schema extends ZodObject<any>>(schema: Schema): ReturnType<typeof zodResolver> {
    const { formatMessage } = useIntl();

    const schemaResolver = zodResolver(schema);

    const localizedZodResolver = useCallback<LocalizedZodResolver>(
        async (values, context, options) => {
            const result = await schemaResolver(values, context, options);

            const translatedErrors = Object.entries(result.errors).map(([key, value]) => {
                if (value && 'message' in value && isMessageKey(value.message)) {
                    return [
                        key,
                        {
                            ...value,
                            message: formatMessage({ id: value.message }),
                        },
                    ];
                }

                return [key, value];
            });

            result.errors = Object.fromEntries(translatedErrors);

            return result;
        },
        [schemaResolver, formatMessage],
    );

    return localizedZodResolver;
}
