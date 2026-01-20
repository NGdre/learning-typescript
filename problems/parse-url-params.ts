type ParseUrlParams<T> = T extends `${string}:${infer M}/${infer R}`
  ? M | ParseUrlParams<R>
  : T extends `${string}:${infer M}`
    ? M
    : never;
