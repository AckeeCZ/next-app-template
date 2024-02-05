import type { ZodEffects, ZodTypeAny } from 'zod';

// This is possibly infinite and typescript would throw an error
//  export type NestedPossibleZodEffect<T extends ZodTypeAny> = T | ZodEffects<NestedPossibleZodEffect<T>>;

export type NestedPossibleZodEffect<T extends ZodTypeAny> =
    | T
    | ZodEffects<T>
    | ZodEffects<ZodEffects<T>>
    | ZodEffects<ZodEffects<ZodEffects<T>>>
    | ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>
    | ZodEffects<ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>>;
