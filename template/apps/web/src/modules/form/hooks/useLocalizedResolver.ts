import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { isMessageKey, type MessageKey } from '~modules/intl';
import type { FieldValues, ResolverOptions, ResolverResult } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { ZodObject } from 'zod';

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

    // TODO: remove the `as any` cast when the zod types are fixed  (remove all the casting)
    const schemaResolver = zodResolver(schema as any);

    const localizedZodResolver = useCallback<LocalizedZodResolver>(
        async (values, context, options) => {
            const result = await schemaResolver(values, context, options);

            const translatedErrors = Object.entries(result.errors).map(([key, value]) => {
                if (value && 'message' in value && isMessageKey(value.message as string)) {
                    return [
                        key,
                        {
                            ...value,
                            message: formatMessage({ id: value.message as MessageKey }),
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
