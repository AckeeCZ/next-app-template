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

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
