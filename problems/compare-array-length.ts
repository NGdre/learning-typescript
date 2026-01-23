type IsEqualLength<
  X extends unknown[],
  Y extends unknown[],
> = X["length"] extends Y["length"] ? true : false;

type Pop<A extends unknown[]> = A extends [infer _, ...infer Rest]
  ? Rest
  : never;

type IsGreater<W1 extends unknown[], W2 extends unknown[]> =
  IsEqualLength<W1, W2> extends true
    ? true
    : W1 extends [...infer Rest, infer L]
      ? IsGreater<Rest, [L, ...W2]>
      : never;

type CompareArrayLength<T extends unknown[], U extends unknown[]> =
  IsEqualLength<T, U> extends true
    ? 0
    : true extends IsGreater<T, U> | IsGreater<Pop<T>, U>
      ? 1
      : -1;
