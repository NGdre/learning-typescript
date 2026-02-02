import { Equal } from "./index-of";

type Includes<A extends unknown[], T> = A extends [infer F, ...infer R]
  ? Equal<T, F> extends true
    ? true
    : Includes<R, T>
  : false;

type CheckRepeatedTuple<T extends unknown[]> = T extends [infer F, ...infer R]
  ? Includes<R, F> extends true
    ? true
    : CheckRepeatedTuple<R>
  : false;
