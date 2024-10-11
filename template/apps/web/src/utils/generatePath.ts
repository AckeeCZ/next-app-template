import type { AuthRoute, Route } from '~constants';

type Value = string | number;

type SplitString<S extends Value, D extends Value> = Value extends S
    ? Value[]
    : S extends ''
      ? []
      : S extends `${infer T}${D}${infer U}`
        ? [T, ...SplitString<U, D>]
        : [S];

type Variables<S extends Value> = SplitString<S, '/'>[number] extends `${infer V}`
    ? V extends `[${infer T}]`
        ? T
        : never
    : never;

export type GeneratePathParams<S extends Value> = Variables<S> extends Value ? { [key in Variables<S>]: Value } : never;

export function generatePath<T extends AuthRoute | Route, P extends GeneratePathParams<T>>(route: T, params: P) {
    const regex = /[[](?<variable>\w+)[\]]/g;

    type VarKey = keyof P;

    return route.replace(regex, (_, key) => {
        const variableKey = key as VarKey;

        if (params[variableKey] === undefined) {
            throw Error(`Key ${key} was not provided`);
        }

        const value = params[variableKey];

        return encodeURIComponent(value);
    });
}
