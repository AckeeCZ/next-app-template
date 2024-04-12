export type RecordKeys<K extends string> = {
    [P in K]: K;
};

export type ValuesOf<T extends object> = T[keyof T];

export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export type NullablePartial<T> = {
    [K in keyof T]?: T[K] | null;
};

export type Undefinable<T> = {
    [K in keyof T]: T[K] | undefined;
};

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export type KeyOf<T extends object, V extends keyof any & ValuesOf<T>> = ValuesOf<{
    [K in keyof T]: T[K] extends V ? K : never;
}>;

export type Inverse<T extends Record<any, keyof any>> = {
    [K in ValuesOf<T>]: KeyOf<T, K>;
};
