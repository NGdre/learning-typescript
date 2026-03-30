type Chunk<
  T extends unknown[],
  N extends number,
  B extends unknown[] = [],
  R extends unknown[] = [],
> = T extends [infer F, ...infer Rest]
  ? B["length"] extends N
    ? Chunk<T, N, [], [...R, B]>
    : Chunk<Rest, N, [...B, F], R>
  : [...R, ...(B["length"] extends 0 ? [] : [B])];
