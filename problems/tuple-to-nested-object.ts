type TupleToNestedObject<T, U> = T extends [...infer Rest, infer L]
  ? L extends PropertyKey
    ? TupleToNestedObject<Rest, { [Key in L]: U }>
    : never
  : U;
