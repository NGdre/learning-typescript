// I couldn't solve it until I remember about template literal types

type Space = " " | "\t" | "\n";

type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;
type TrimRight<S extends string> = S extends `${infer L}${Space}`
  ? TrimRight<L>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;
