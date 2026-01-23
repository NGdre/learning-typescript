type ValuesOf<T> = T[keyof T];

type Subrecord<U extends PropertyKey, V> = ValuesOf<{
  [Key in U]: Exclude<U, Key> extends ""
    ? never
    : Record<Exclude<U, Key>, V> | Subrecord<Exclude<U, Key>, V>;
}>;

type DefinedPartial<T> =
  T extends Record<infer U, infer V> ? T | Subrecord<U, V> : never;
