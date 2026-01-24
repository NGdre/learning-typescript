type Faulsy<T> = T extends "" | [] | false | 0 | null | undefined
  ? true
  : keyof T extends ""
    ? true
    : false;

type AnyOf<T extends readonly unknown[]> = T extends [infer F, ...infer R]
  ? Faulsy<F> extends true
    ? AnyOf<R>
    : true
  : false;
