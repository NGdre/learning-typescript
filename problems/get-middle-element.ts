type GetMiddleElement<T> = T extends [infer F, ...infer M, infer L]
  ? M["length"] extends 1 | 2
    ? M
    : M["length"] extends 0
      ? [F, L]
      : GetMiddleElement<M>
  : T;
