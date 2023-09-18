import type { ValuesOf } from '@workspace/ts-utils';

export const routes = {
    home: '/',
} as const satisfies Record<string, string>;

export type Route = ValuesOf<typeof routes>;

export const authRoutes = {
    foo: '/auth-route',
} as const satisfies Record<string, string>;

export type AuthRoute = ValuesOf<typeof authRoutes>;
