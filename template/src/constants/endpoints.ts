import type { ValuesOf } from '~types/utils';

export const endpoints = {
    TestData: '/recipes',
} as const satisfies Record<string, string>;

export type Endpoint = ValuesOf<typeof endpoints>;
