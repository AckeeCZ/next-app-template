import type { AuthRoute, Route } from '../constants';

type SplitString<S extends string, D extends string> = string extends S
    ? string[]
    : S extends ''
    ? []
    : S extends `${infer T}${D}${infer U}`
    ? [T, ...SplitString<U, D>]
    : [S];

type Variables<S extends string> = SplitString<S, '/'>[number] extends `${infer V}`
    ? V extends `[${infer T}]`
        ? T
        : never
    : never;

type Params<S extends string> = Variables<S> extends string ? { [key in Variables<S>]: string } : never;

export function createGeneratePath<T extends string = string>() {
    return function generatePath(route: T, params: Params<T>) {
        const regex = /[[](?<variable>\w+)[\]]/g;

        return route.toString().replace(regex, (_, key) => {
            const variableKey = key as keyof Params<T>;

            if (!params[variableKey]) throw Error(`Key ${key} was not provided`);

            return params[variableKey];
        });
    };
}

export const generatePath = createGeneratePath<AuthRoute | Route>();
