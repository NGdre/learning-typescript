type FlipArguments<T extends Function> = T extends (...args: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : never;
